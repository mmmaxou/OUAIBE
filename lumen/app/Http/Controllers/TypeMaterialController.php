<?php

namespace App\Http\Controllers;

use App\TypeMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TypeMaterialController extends Controller
{
    public function __construct()
    {
        /*
    $this->middleware('oauth', ['except' => ['index', 'show']]);
    $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
    */
    }
    
    public function index()
    {
        $typeMaterials = TypeMaterial::all();
        return $this->success($typeMaterials, 200);
    }
}
