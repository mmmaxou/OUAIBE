<?php

namespace App\Http\Controllers;

use App\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SponsorController extends Controller
{
     public function __construct() {
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
    }
    
    public function index()
    {
        $sponsors = Sponsor::with(['image'])->get();
        return $this->success($sponsors, 200);
    }

    public function store(Request $request) {
        $this->validateRequestStore($request);

        $sponsor =  Sponsor::create([
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'shortDescription' => $request->get('shortDescription'),
            'phoneNumber' => $request->get('phoneNumber'),
            'image_id' => $request->get('image_id')
        ]);
        if ( !empty($request->get('image')) ) $sponsor->image()->sync($request->get('image'));
        return $this->success("The sponsor with with id {$sponsor->id} has been created", 201);
    }

    public function show($id) { 
        $sponsor =  Sponsor::find($id);
        if (!$sponsor) {
            return $this->error("The sponsor with id {$id} doesn't exist", 404);
        }
        return $this->success($sponsor->load(['image']), 200);
    }

    public function update(Request $request, $id) {
        $sponsor =  Sponsor::find($id);
        if (!$sponsor) {
            return $this->error("The sponsor with {$id} doesn't exist", 404);
        }
        $this->validateRequestUpdate($request);
        if ( !empty($request->get('email')) ) $sponsor->email = $request->get('email');
        if ( !empty($request->get('name')) ) $sponsor->name = $request->get('name');
        if ( !empty($request->get('shortDescription')) ) $sponsor->shortDescription = $request->get('shortDescription');
        if ( !empty($request->get('phoneNumber')) ) $sponsor->phoneNumber = $request->get('phoneNumber');
        if ( !empty($request->get('image_id')) ) $sponsor->image_id = $request->get('image_id');
        if ( !empty($request->get('image')) ) $sponsor->image()->sync($request->get('image'));
        $sponsor->save();
        //     return $this->success("The sponsor with with id {$sponsor->id} has been updated", 200);
        return $this->success($sponsor->load(['image']), 200);
    }

    public function destroy($id) {
        $sponsor =  Sponsor::find($id);
        if (!$sponsor) {
            return $this->error("The sponsor with {$id} doesn't exist", 404);
        }
        $sponsor->delete();
        return $this->success("The sponsor with with id {$id} has been deleted", 200);
    }

    public function count() {
        $count =  Sponsor::all()->count();
        return $this->success($count, 200);
    }

    public function validateRequestStore(Request $request) {
        $rules = [
            'email' => 'email|unique:sponsors',
            'name' => 'required|alpha',
            'shortDescription' => 'alpha',
            'phoneNumber' => 'numeric|min:10',
            'image_id' => 'numeric'
        ];
        $this->validate($request, $rules);
    }

    public function validateRequestUpdate(Request $request) {
        $rules = [
            'email' => 'email|unique:sponsors',
            'name' => 'alpha',
            'shortDescription' => 'alpha',
            'phoneNumber' => 'numeric|min:10',
            'image_id' => 'numeric'
        ];
        $this->validate($request, $rules);
    }
}
