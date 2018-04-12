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
        $members = Member::all();
        return $this->success($members, 200);
    }

    public function store(Request $request) {
        $this->validateRequestStore($request);

        $member = Member::create([
            'email' => $request->get('email'),
            'firstName' => $request->get('firstName'),
            'lastName' => $request->get('lastName'),
            'phoneNumber' => $request->get('phoneNumber'),
            'lastPaymentDate' => $request->get('lastPaymentDate') || NULL,
            'role_id' => $request->get('role_id'),
            'password' => Hash::make($request->get('password'))
        ]);
        return $this->success("The member with with id {$member->id} has been created", 201);
    }

    public function show($id) {
        $member = Member::find($id);
        if (!$member) {
            return $this->error("The member with {$id} doesn't exist", 404);
        }
        return $this->success($member, 200);
    }

    public function update(Request $request, $id) {
        $member = Member::find($id);
        if (!$member) {
            return $this->error("The member with {$id} doesn't exist", 404);
        }
        $this->validateRequestUpdate($request);
        if ( !empty($request->get('email')) ) $member->email = $request->get('email');
        if ( !empty($request->get('firstName')) ) $member->firstName = $request->get('firstName');
        if ( !empty($request->get('lastName')) ) $member->lastName = $request->get('lastName');
        if ( !empty($request->get('phoneNumber')) ) $member->phoneNumber = $request->get('phoneNumber');
        if ( !empty($request->get('lastPaymentDate')) ) $member->lastPaymentDate = $request->get('lastPaymentDate');
        if ( !empty($request->get('role_id')) ) $member->role_id = $request->get('role_id');
        if ( !empty($request->get('password')) ) $member->password = Hash::make($request->get('password'));
        $member->save();
        //     return $this->success("The member with with id {$member->id} has been updated", 200);
        return $this->success($member, 200);
    }

    public function destroy($id) {
        $member = Member::find($id);
        if (!$member) {
            return $this->error("The member with {$id} doesn't exist", 404);
        }
        $member->delete();
        return $this->success("The member with with id {$id} has been deleted", 200);
    }

    public function count() {
        $count = Member::all()->count();
        return $this->success($count, 200);
    }

    public function validateRequestStore(Request $request) {
        $rules = [
            'email' => 'required|email|unique:members',
            'firstName' => 'required|alpha',
            'lastName' => 'required|alpha',
            'phoneNumber' => 'required|numeric|min:10',
            'lastPaymentDate' => 'required|date',
            'role_id' => 'required|numeric',
            'password' => 'required|min:6'
        ];
        $this->validate($request, $rules);
    }

    public function validateRequestUpdate(Request $request) {
        $rules = [
            'email' => 'email|unique:members',
            'firstName' => 'alpha',
            'lastName' => 'alpha',
            'phoneNumber' => 'numeric|min:10',
            'lastPaymentDate' => 'date',
            'role_id' => 'numeric',
            'password' => 'min:6'
        ];
        $this->validate($request, $rules);
    }

    public function isAuthorized(Request $request) {
        $resource = "users";
        // $user     = User::find($this->getArgs($request)["user_id"]);
        return $this->authorizeUser($request, $resource);
    }

}
