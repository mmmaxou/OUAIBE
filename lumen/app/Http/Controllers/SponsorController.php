<?php

namespace App\Http\Controllers;

use App\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SponsorController extends Controller
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
        $sponsors = Sponsor::all();
        return $this->success($sponsors, 200);
    }
}
