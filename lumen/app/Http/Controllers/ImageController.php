<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ImageController extends Controller {

  public function __construct() {
    /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
  }

  public function index() {
    $images = Image::all();
    return $this->success($images, 200);
  }

  public function store(Request $request) {
    $this->validateRequestStore($request);

    $image = Image::create([
                'name' => $request->get('name'),
                'src' => $request->get('src')
    ]);
    return $this->success("The image with id {$image->id} has been created", 201);
  }

  public function show($id) {
    $image = Image::find($id);
    if (!$image) {
      return $this->error("The image with id {$id} doesn't exist", 404);
    }
    return $this->success($image, 200);
  }

  public function update(Request $request, $id) {
    $image = Image::find($id);
    if (!$image) {
      return $this->error("The image with id {$id} doesn't exist", 404);
    }
    $this->validateRequestUpdate($request);
    if (!empty($request->get('name')))
      $image->name = $request->get('name');
    if (!empty($request->get('src')))
      $image->src = $request->get('src');

    $image->save();
    return $this->success($image, 200);
  }

  public function destroy($id) {
    $image = Image::find($id);
    if (!$image) {
      return $this->error("The image with id {$id} doesn't exist", 404);
    }
    $image->delete();
    return $this->success("The image with id {$id} has been deleted", 200);
  }

  public function count() {
    $count = Image::all()->count();
    return $this->success($count, 200);
  }

  public function validateRequestStore(Request $request) {
    $rules = [
        'name' => 'required',
        'src' => 'required|unique:images'
    ];
    $this->validate($request, $rules);
  }

  public function validateRequestUpdate(Request $request) {
    $rules = [
        'name' => '',
        'src' => 'unique:images'
    ];
    $this->validate($request, $rules);
  }

}
