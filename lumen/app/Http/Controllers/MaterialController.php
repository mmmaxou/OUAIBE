<?php

namespace App\Http\Controllers;

use DB;
use App\Material;
use App\TypeMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MaterialController extends Controller
{
    public function __construct()
    {
        /*
    $this->middleware('oauth', ['except' => ['index', 'show']]);
    $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
    */
    }

    public function index() {
        $materials = Material::with(['type_material.image'])->get();
        return $this->success($materials, 200);
    }
    
    public function store(Request $request) {
        $this->validateRequestStore($request);

        $material = Material::create([
            'name' => $request->get('name'),
            'quantity' => $request->get('quantity'),
            'type_material_id' => $request->get('type_material_id'),
        ]);
        return $this->success("The material with with id {$material->id} has been created", 201);
    }

    public function show($id) {
        $material = Material::find($id);
        if (!$material) {
            return $this->error("The material with {$id} doesn't exist", 404);
        }
        return $this->success($material->load(['type_material.image']), 200);
    }

    public function update(Request $request, $id) {
        $material = Material::find($id);
        if (!$material) {
            return $this->error("The material with {$id} doesn't exist", 404);
        }
        $this->validateRequestUpdate($request);
        if ( !empty($request->get('name')) ) $material->name = $request->get('name');
        if ( !empty($request->get('quantity')) ) $material->quantity = $request->get('quantity');
        if ( !empty($request->get('type_material_id')) ) $material->type_material_id = $request->get('type_material_id');

        $material->save();
        //     return $this->success("The material with with id {$material->id} has been updated", 200);
        return $this->success($material, 200);
    }

    public function destroy($id) {
        $material = Material::find($id);
        if (!$material) {
            return $this->error("The material with {$id} doesn't exist", 404);
        }
        $material->delete();
        return $this->success("The material with with id {$id} has been deleted", 200);
    }

    public function count() {
        $count = Material::with('images')->count();
        return $this->success($count, 200);
    }

    public function validateRequestStore(Request $request) {
        $rules = [
            'name' => 'required|string',
            'quantity' => 'required|numeric',
            'type_material_id' => 'required|numeric'
        ];
        $this->validate($request, $rules);
    }

    public function validateRequestUpdate(Request $request) {
        $rules = [
            'name' => 'string',
            'quantity' => 'numeric',
            'type_material_id' => 'numeric'
        ];
        $this->validate($request, $rules);
    }

    public function isAuthorized(Request $request) {
        $resource = "users";
        // $user     = User::find($this->getArgs($request)["user_id"]);
        return $this->authorizeUser($request, $resource);
    }
}
