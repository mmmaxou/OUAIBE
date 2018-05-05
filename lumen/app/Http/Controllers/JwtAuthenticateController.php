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
use Illuminate\Support\Facades\Hash;

class JwtAuthenticateController extends Controller {

  /**
   * Create a new AuthController instance.
   *
   * @return void
   */
  public function __construct() {
    $this->middleware('auth:api', ['except' => ['login']]);
  }

  public function login(Request $request) {
    $rules = [
        'email' => 'required|string',
        'password' => 'required|string'
    ];
    $this->validate($request, $rules);

    $credentials = $request->only('email', 'password');

    try {
// verify the credentials and create a token for the user
      if (!$token = $this->guard()->attempt($credentials)) {
        return response()->json(['error' => 'Incorrect email or password'], 401);
      }
// grab some user
    } catch (JWTException $e) {
// something went wrong
      return response()->json(['error' => 'Could not create token'], 500);
    }

// if no errors are encountered we can return a JWT
    return $this->respondWithToken($token);
  }

  /**
   * Get the authenticated User
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function me() {
    return response()->json(Member::find($this->guard()->user()->id)->load(['images', 'role']));
  }

  /**
   * Log the user out (Invalidate the token)
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function logout() {
    $this->guard()->logout();

    return response()->json(['message' => 'Successfully logged out']);
  }

  /**
   * Refresh a token.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function refresh() {
    return $this->respondWithToken($this->guard()->refresh());
  }

  /**
   * Get the token array structure.
   *
   * @param  string $token
   *
   * @return \Illuminate\Http\JsonResponse
   */
  protected function respondWithToken($token) {
    return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => $this->guard()->factory()->getTTL() * 60
    ]);
  }

  /**
   * Get the guard to be used during authentication.
   *
   * @return \Illuminate\Contracts\Auth\Guard
   */
  public function guard() {
    return Auth::guard();
  }

}
