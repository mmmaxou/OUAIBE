<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;
use App\Member;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Log;

class JwtAuthenticateController extends Controller {

  public function index() {
    return response()->json(['auth' => Auth::user(), 'users' => Member::all()]);
  }

  public function authenticate(Request $request) {
    $credentials = $request->only('email', 'password');

    try {
      // verify the credentials and create a token for the user
      if (!$token = JWTAuth::attempt($credentials)) {    // <========== fix me
        return response()->json(['error' => 'invalid_credentials'], 401);
      }
    } catch (JWTException $e) {
      // something went wrong
      return response()->json(['error' => 'could_not_create_token'], 500);
    }

    // if no errors are encountered we can return a JWT
    return response()->json(compact('token'));
  }

}
