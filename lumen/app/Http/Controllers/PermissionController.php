<?php

namespace App\Http\Controllers;

use App\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PermissionController extends Controller {

  public function __construct() {
    /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
  }

  public function index() {
    $permission = Permission::all();
    return $this->success($permission, 200);
  }

}
