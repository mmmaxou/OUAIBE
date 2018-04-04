<?php

namespace App\Http\Controllers;

use App\MetaData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MetaDataController extends Controller
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
        $metaDatas = MetaData::all();
        return $this->success($metaDatas, 200);
    }
}
