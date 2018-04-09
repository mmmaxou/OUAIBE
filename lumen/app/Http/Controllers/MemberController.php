<?php

namespace App\Http\Controllers;

use App\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MemberController extends Controller {

  public function __construct() {
    /*
      $this->middleware('oauth', ['except' => ['index', 'show']]);
      $this->middleware('authorize:' . __CLASS__, ['except' => ['index', 'show']]);
     */
  }

  public function index() {
    $members = Member::with('images')->get();
    return $this->success($members, 200);
  }

  public function store(Request $request) {
    // $this->validateRequest($request);

    $member = Member::create([
                'email' => $request->get('email'),
                'firstName' => $request->get('firstName'),
                'lastName' => $request->get('lastName'),
                'phoneNumber' => $request->get('phoneNumber'),
                'lastPaymentDate' => $request->get('lastPaymentDate') || NULL,
                'role_id' => $request->get('role_id'),
                'password' => Hash::make($request->get('password'))
    ]);
    return $this->success("The user with with id {$member->id} has been created", 201);
  }

  public function show($id) {
    $user = User::find($id);
    if (!$user) {
      return $this->error("The user with {$id} doesn't exist", 404);
    }
    return $this->success($user, 200);
  }

  public function update(Request $request, $id) {
    $user = User::find($id);
    if (!$user) {
      return $this->error("The user with {$id} doesn't exist", 404);
    }
    $this->validateRequest($request);
    $user->email = $request->get('email');
    $user->password = Hash::make($request->get('password'));
    $user->save();
    return $this->success("The user with with id {$user->id} has been updated", 200);
  }

  public function destroy($id) {
    $user = User::find($id);
    if (!$user) {
      return $this->error("The user with {$id} doesn't exist", 404);
    }
    $user->delete();
    return $this->success("The user with with id {$id} has been deleted", 200);
  }

  public function validateRequest(Request $request) {
    $rules = [
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6'
    ];
    $this->validate($request, $rules);
  }

  public function isAuthorized(Request $request) {
    $resource = "users";
    // $user     = User::find($this->getArgs($request)["user_id"]);
    return $this->authorizeUser($request, $resource);
  }

}
