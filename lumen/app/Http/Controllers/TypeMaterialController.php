<?php

namespace App\Http\Controllers;

use App\TypeMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TypeMaterialController extends Controller {

    public function __construct() {
        /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
    }

    public function index() {
        $typesMaterials = TypeMaterial::with('image')->get();
        return $this->success($typesMaterials, 200);
    }

    public function materials() {
        $typeMaterials = TypeTypeMaterial::with('materials')->get();
        return $this->success($typeMaterials, 200);
    }

    public function count() {
        $typeMaterials = TypeTypeMaterial::select('id', 'name')
            ->withCount('materials')
            ->get();
        return $this->success($typeMaterials, 200);
    }

    public function store(Request $request) {
        $this->validateRequestStore($request);

        $typeMaterials = TypeMaterial::create([
            'name' => $request->get('name'),
            'image_id' => $request->get('image_id'),
        ]);
        return $this->success("The typeMaterials with with id {$typeMaterials->id} has been created", 201);
    }

    public function show($id) {
        $typeMaterials = TypeMaterial::find($id);
        if (!$typeMaterials) {
            return $this->error("The typeMaterials with {$id} doesn't exist", 404);
        }
        return $this->success($typeMaterials->load('image'), 200);
    }

    public function update(Request $request, $id) {
        $typeMaterials = TypeMaterial::find($id);
        if (!$typeMaterials) {
            return $this->error("The typeMaterials with {$id} doesn't exist", 404);
        }
        $this->validateRequestUpdate($request);
        if ( !empty($request->get('name')) ) $typeMaterials->name = $request->get('name');
        if ( !empty($request->get('image_id')) ) $typeMaterials->image_id = $request->get('image_id');

        $typeMaterials->save();
        //     return $this->success("The material with with id {$material->id} has been updated", 200);
        return $this->success($typeMaterials, 200);
    }

    public function destroy($id) {
        $typeMaterials = TypeMaterial::find($id);
        if (!$typeMaterials) {
            return $this->error("The typeMaterials with {$id} doesn't exist", 404);
        }
        $typeMaterials->delete();
        return $this->success("The typeMaterials with with id {$id} has been deleted", 200);
    }

    public function validateRequestStore(Request $request) {
        $rules = [
            'name' => 'required|string',
            'image_id' => 'required|numeric'
        ];
        $this->validate($request, $rules);
    }

    public function validateRequestUpdate(Request $request) {
        $rules = [
            'name' => 'string',
            'image_id' => 'numeric'
        ];
        $this->validate($request, $rules);
    }

}
