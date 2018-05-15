<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController {

  public function success($data, $code) {
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    return response()->json(['data' => $data], $code);
  }

  public function error($message, $code) {
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    return response()->json(['message' => $message], $code);
  }

}
