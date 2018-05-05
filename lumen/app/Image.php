<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Support\Facades\Hash;

class Image extends Model implements AuthenticatableContract, AuthorizableContract {

  use Authenticatable,
      Authorizable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'name',
      'src'
  ];

  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
  protected $hidden = [
      'created_at',
      'updated_at'
  ];

  /**
   * Define a one-to-many relationship with App\TypeMaterial
   */
  public function types_materials() {
    return $this->hasMany('App\TypeMaterial');
  }

  /**
   * Define a one-to-many relationship with App\Sponsor
   */
  public function sponsors() {
    return $this->hasMany('App\Sponsor');
  }

  /**
   * Define a one-to-many relationship with App\Role
   */
  public function roles() {
    return $this->hasMany('App\Role');
  }

  /**
   * Define a many-to-many relationship with App\Role
   */
  public function members() {
    return $this->belongsToMany('App\Member');
  }

}
