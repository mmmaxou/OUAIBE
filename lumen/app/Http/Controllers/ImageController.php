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

    // get current time and append the upload file extension to it,
    // then put that name to $imageName variable.
    $imageName = time() . '.' . $request->image->getClientOriginalExtension();

    // talk the select file and move it public directory and make images
    // folder if doesn't exsit then give it that unique name.
    $request->image->move(public_path('img'), $imageName);

    $image = Image::create([
                'name' => $request->get('name'),
                'src' => url('/img/' . $imageName)
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

    $image->save();
    return $this->success($image, 200);
  }

  public function destroy($id) {
    $image = Image::find($id);
    if (!$image) {
      return $this->error("The image with id {$id} doesn't exist", 404);
    }
    // Search and delete the file if it exists in public/images folder
    $path = explode('/', $image->src);
    $filePath = public_path('img') .'/'. end($path);
    // If the file exists, delete it
    if (file_exists($filePath))
      unlink($filePath);
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
        'image' => 'required|image'
    ];
    $this->validate($request, $rules);
  }

  public function validateRequestUpdate(Request $request) {
    $rules = [
        'name' => ''
    ];
    $this->validate($request, $rules);
  }

}
