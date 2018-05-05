<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RoleController extends Controller
{
    public function __construct()
    {
        /*
    $this->middleware('oauth', ['except' => ['index', 'show']]);
    $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
    */
    }

    public function store(Request $request)
    {
        // $this->validateRequest($request);
        
        $role = Role::create([
            'name' => $request->get('name'),
            'shortDescription' => $request->get('shortDescription'),
            'elevationLevel' => $request->get('elevationLevel')
        ]);
        return $this->success("The role with with id {$role->id} has been created", 201);
    }
    
    public function show($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return $this->error("The role with {$id} doesn't exist", 404);
        }
        return $this->success($role, 200);
    }
    
    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        if (!$role) {
            return $this->error("The role with {$id} doesn't exist", 404);
        }
        $role->name = $request->get('name');
        $role->shortDescription = $request->get('shortDescription');
        $role->elevationLevel = $request->get('elevationLevel');
        $role->save();
        return $this->success("The role with with id {$role->id} has been updated", 200);
    }
    
    public function destroy($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return $this->error("The role with {$id} doesn't exist", 404);
        }
        $role->delete();
        return $this->success("The role with with id {$id} has been deleted", 200);
    }

    public function index()
    {
        $roles = Role::all();
        return $this->success($roles, 200);
    }
}
