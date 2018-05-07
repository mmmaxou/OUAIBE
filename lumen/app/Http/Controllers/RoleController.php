<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RoleController extends Controller {

  public function __construct() {
    /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
  }

  public function store(Request $request) {
    $this->validateRequestStore($request);

    $role = Role::create([
                'name' => $request->get('name'),
                'shortDescription' => $request->get('shortDescription'),
                'image_id' => $request->get('image_id')
    ]);
    if (!empty($request->get('permissions')))
      $role->permissions()->sync($request->get('permissions'));
    return $this->success("The role with with id {$role->id} has been created", 201);
  }

  public function show($id) {
    $role = Role::find($id);
    if (!$role) {
      return $this->error("The role with id {$id} doesn't exist", 404);
    }
    return $this->success($role->load(['image']), 200);
  }

  public function showPermissions($id) {
    $role = Role::find($id);
    if (!$role) {
      return $this->error("The role with id {$id} doesn't exist", 404);
    }
    return $this->success($role->permissions()->get(), 200);
  }

  public function index() {
    $roles = Role::with(['image'])->get();
    return $this->success($roles, 200);
  }

  public function update(Request $request, $id) {
    $role = Role::find($id);
    if (!$role) {
      return $this->error("The role with {$id} doesn't exist", 404);
    }
    $this->validateRequestUpdate($request);

    if (!empty($request->get('name')))
      $role->name = $request->get('name');
    if (!empty($request->get('shortDescription')))
      $role->shortDescription = $request->get('shortDescription');
    if (!empty($request->get('image_id')))
      $role->image_id = $request->get('image_id');
    if (!empty($request->get('permissions')))
      $member->permissions()->sync($request->get('permissions'));
    $role->save();
    return $this->success($role->load(['image']), 200);
  }

  public function destroy($id) {
    $role = Role::find($id);
    if (!$role) {
      return $this->error("The role with {$id} doesn't exist", 404);
    }
    $role->delete();
    return $this->success("The role with with id {$id} has been deleted", 200);
  }

  public function validateRequestStore(Request $request) {
    $rules = [
        'name' => 'required|string',
        'shortDescription' => 'required|string',
        'image_id' => 'required|numeric'
    ];
    $this->validate($request, $rules);
  }

  public function validateRequestUpdate(Request $request) {
    $rules = [
        'name' => 'string',
        'shortDescription' => 'string',
        'image_id' => 'numeric'
    ];
    $this->validate($request, $rules);
  }

}
