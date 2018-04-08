<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Support\Facades\Hash;

class TypeMaterial extends Model implements AuthenticatableContract, AuthorizableContract {

  use Authenticatable,
      Authorizable;

  protected $table = "types_materials";

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'name',
      'icon',
      'image_id'
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
   * Define a one-to-many relationship with App\Materiel
   */
  public function materials() {
    return $this->hasMany('App\Material');
  }

  /**
   * Define a one-to-many relationship with App\Image
   */
  public function image() {
    return $this->belongsTo('App\Image');
  }

}
