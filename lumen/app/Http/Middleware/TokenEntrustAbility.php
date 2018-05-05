<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class TokenEntrustAbility extends BaseMiddleware {

  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next, $roles, $permissions, $validateAll = false) {
    if (!$token = $this->auth->setRequest($request)->getToken()) {
      return response()->json(['message' => 'The token was not provided or is invalid'], 400);
    }

    try {
      $user = $this->auth->authenticate($token);
    } catch (TokenExpiredException $e) {
      return response()->json(['message' => 'The token has expired'], 401);
    } catch (JWTException $e) {
      return response()->json(['message' => 'The token is invalid'], 400);
    }

    if (!$user) {
      return response()->json(['message' => 'The user was not found'], 404);
    }

    if (!$user->ability(explode('|', $roles), explode('|', $permissions), array('validate_all' => $validateAll))) {
      return response()->json(['message' => 'You are not authorized to make this request'], 401);
    }

    return $next($request);
  }

}
