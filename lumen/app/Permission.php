<?php

namespace App;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission {

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'name',
      'display_name',
      'description'
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
   * Define a many-to-many relationship with App\Role 
   */
  public function roles() {
    return $this->belongsToMany('App\Role');
  }

}
