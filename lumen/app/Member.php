<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Support\Facades\Hash;

class Member extends Model implements AuthenticatableContract, AuthorizableContract {

  use Authenticatable,
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
   * Define a one-to-many relationship with App\Role */
  public function role() {
    return $this->belongsTo('App\Role');
  }

  public function images() {
    return $this->belongsToMany('App\Image');
  }

}
