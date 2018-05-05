<?php

namespace App;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission {

  /**
   * Define a many-to-many relationship with App\Role 
   */
  public function roles() {
    return $this->belongsToMany('App\Role');
  }

}
