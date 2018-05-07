<?php

namespace App;

use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class Member extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject {

  use EntrustUserTrait,
      Authenticatable,
      Authorizable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'email',
      'firstName',
      'lastName',
      'phoneNumber',
      'lastPaymentDate',
      'role_id'
  ];

  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
  protected $hidden = [
      'password',
      'created_at',
      'updated_at'
  ];

  /**
   * Define a one-to-many relationship with App\Role 
   */
  public function role() {
    return $this->belongsTo('App\Role');
  }

  /**
   * Define a many-to-many relationship with App\Image 
   */
  public function images() {
    return $this->belongsToMany('App\Image');
  }

  /**
   * Checks if the members has a role by its name.
   *
   * @param string|array $name       Role name or array of role names.
   * @param bool         $requireAll All roles in the array are required.
   *
   * @return bool
   */
  public function hasRole($name, $requireAll = false) {
    if (is_array($name)) {
      foreach ($name as $roleName) {
        $hasRole = $this->hasRole($roleName);

        if ($hasRole && !$requireAll) {
          return true;
        } elseif (!$hasRole && $requireAll) {
          return false;
        }
      }

      // If we've made it this far and $requireAll is FALSE, then NONE of the roles were found
      // If we've made it this far and $requireAll is TRUE, then ALL of the roles were found.
      // Return the value of $requireAll;
      return $requireAll;
    } else {
      $role = $this->role()->get()->first();
      if (strtolower($role->name) == strtolower($name)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check if user has a permission by its name.
   *
   * @param string|array $permission Permission string or array of permissions.
   * @param bool         $requireAll All permissions in the array are required.
   *
   * @return bool
   */
  public function can($permission, $requireAll = false) {
    if (is_array($permission)) {
      foreach ($permission as $permName) {
        $hasPerm = $this->can($permName);

        if ($hasPerm && !$requireAll) {
          return true;
        } elseif (!$hasPerm && $requireAll) {
          return false;
        }
      }

      // If we've made it this far and $requireAll is FALSE, then NONE of the perms were found
      // If we've made it this far and $requireAll is TRUE, then ALL of the perms were found.
      // Return the value of $requireAll;
      return $requireAll;
    } else {

      $role = $this->role()->get()->first();
      // Validate against the Permission table
      foreach ($role->permissions()->get() as $perm) {
        if (str_is($permission, $perm->name)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Checks role(s) and permission(s).
   *
   * @param string|array $roles       Array of roles or comma separated string
   * @param string|array $permissions Array of permissions or comma separated string.
   * @param array        $options     validate_all (true|false) or return_type (boolean|array|both)
   *
   * @throws \InvalidArgumentException
   *
   * @return array|bool
   */
  public function ability($roles, $permissions, $options = []) {

    // Convert string to array if that's what is passed in.
    if (!is_array($roles)) {
      $roles = explode(',', $roles);
    }
    if (!is_array($permissions)) {
      $permissions = explode(',', $permissions);
    }

    // Set up default values and validate options.
    if (!isset($options['validate_all'])) {
      $options['validate_all'] = false;
    } else {
      if ($options['validate_all'] !== true && $options['validate_all'] !== false) {
        throw new InvalidArgumentException();
      }
    }
    if (!isset($options['return_type'])) {
      $options['return_type'] = 'boolean';
    } else {
      if ($options['return_type'] != 'boolean' &&
              $options['return_type'] != 'array' &&
              $options['return_type'] != 'both') {
        throw new InvalidArgumentException();
      }
    }

    // Loop through roles and permissions and check each.
    $checkedRoles = [];
    $checkedPermissions = [];
    foreach ($roles as $role) {
      $checkedRoles[$role] = $this->hasRole($role);
    }
    foreach ($permissions as $permission) {
      $checkedPermissions[$permission] = $this->can($permission);
    }

    // If validate all and there is a false in either
    // Check that if validate all, then there should not be any false.
    // Check that if not validate all, there must be at least one true.
    if (($options['validate_all'] && !(in_array(false, $checkedRoles) || in_array(false, $checkedPermissions))) ||
            (!$options['validate_all'] && (in_array(true, $checkedRoles) || in_array(true, $checkedPermissions)))) {
      $validateAll = true;
    } else {
      $validateAll = false;
    }

    // Return based on option
    if ($options['return_type'] == 'boolean') {
      return $validateAll;
    } elseif ($options['return_type'] == 'array') {
      return ['roles' => $checkedRoles, 'permissions' => $checkedPermissions];
    } else {
      return [$validateAll, ['roles' => $checkedRoles, 'permissions' => $checkedPermissions]];
    }
  }

  /**
   * Get the identifier that will be stored in the subject claim of the JWT.
   *
   * @return mixed
   */
  public function getJWTIdentifier() {
    return $this->getKey();
  }

  /**
   * Return a key value array, containing any custom claims to be added to the JWT.
   *
   * @return array
   */
  public function getJWTCustomClaims() {
    return [];
  }

}
