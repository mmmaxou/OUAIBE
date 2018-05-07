<?php

namespace App\Http\Controllers;

use App\MetaData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MetaDataController extends Controller {

  public function __construct() {
    /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
  }

  public function index() {
    $metaDatas = MetaData::all();
    return $this->success($metaDatas, 200);
  }

  public function store(Request $request) {
    $this->validateRequestStore($request);

    $metaData = MetaData::create([
                'metaKey' => $request->get('metaKey'),
                'metaValue' => $request->get('metaValue'),
                'description' => $request->get('description')
    ]);
    return $this->success("The metaData with with metaKey {$metaData->metaKey} has been created", 201);
  }

  public function show($metaKey) {
    $metaData = MetaData::find($metaKey);
    if (!$metaData) {
      return $this->error("The metaData with metaKey {$metaKey} doesn't exist", 404);
    }
    return $this->success($metaData, 200);
  }

  public function update(Request $request, $metaKey) {
    $metaData = MetaData::find($metaKey);
    if (!$metaData) {
      return $this->error("The metaData with {$metaKey} doesn't exist", 404);
    }
    $this->validateRequestUpdate($request);

    if (!empty($request->get('metaKey')))
      $metaData->metaKey = $request->get('metaKey');
    if (!empty($request->get('metaValue')))
      $metaData->metaValue = $request->get('metaValue');
    if (!empty($request->get('description')))
      $metaData->metaValue = $request->get('description');
    $metaData->save();
    return $this->success($metaData, 200);
  }

  public function destroy($metaKey) {
    $metaData = MetaData::find($metaKey);
    if (!$metaData) {
      return $this->error("The metaData with {$metaKey} doesn't exist", 404);
    }
    $metaData->delete();
    return $this->success("The metaData with with metaKey {$metaKey} has been deleted", 200);
  }

  public function validateRequestStore(Request $request) {
    $rules = [
        'metaKey' => 'required|string',
        'metaValue' => 'required|string',
        'description' => 'string'
    ];
    $this->validate($request, $rules);
  }

  public function validateRequestUpdate(Request $request) {
    $rules = [
        'metaKey' => 'string',
        'metaValue' => 'string',
        'description' => 'string'
    ];
    $this->validate($request, $rules);
  }

}
