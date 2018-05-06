<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TransactionController extends Controller
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
    $this->validateRequestStore($request);

    $transaction = Transaction::create([
      'dateTransaction' => $request->get('dateTransaction'),
      'shortDescription' => $request->get('shortDescription'),
      'output' => $request->get('output'),
      'input' => $request->get('input')
    ]);
    return $this->success("The transaction with with id {$transaction->id} has been created", 201);
  }

  public function show($id)
  {
    $transaction = Transaction::find($id);
    if (!$transaction) {
      return $this->error("The transaction with id {$id} doesn't exist", 404);
    }
    return $this->success($transaction, 200);
  }

  public function index()
  {
    $transactions = Transaction::all();
    return $this->success($transactions, 200);
  }

  public function update(Request $request, $id)
  {
    $transaction = Transaction::find($id);
    if (!$transaction) {
      return $this->error("The transaction with {$id} doesn't exist", 404);
    }
    $this->validateRequestUpdate($request);
    
    if (!empty($request->get('dateTransaction'))) $transaction->dateTransaction = $request->get('dateTransaction');
    if (!empty($request->get('shortDescription'))) $transaction->shortDescription = $request->get('shortDescription');
    if (!empty($request->get('output'))) $transaction->output = $request->get('output');
    if (!empty($request->get('input'))) $transaction->input = $request->get('input');
    $transaction->save();
    return $this->success("The transaction with with id {$transaction->id} has been updated", 200);
    }

  public function destroy($id)
  {
    $transaction = Transaction::find($id);
    if (!$transaction) {
      return $this->error("The transaction with {$id} doesn't exist", 404);
    }
    $transaction->delete();
    return $this->success("The transaction with with id {$id} has been deleted", 200);
  }

    public function validateRequestStore(Request $request) {
    $rules = [
        'dateTransaction' => 'date|required|string',
        'shortDescription' => 'required|string',
        'output' => 'required|numeric',
        'input' => 'required|numeric'
    ];
    $this->validate($request, $rules);
  }

  public function validateRequestUpdate(Request $request) {
    $rules = [
        'dateTransaction' => 'date|string',
        'shortDescription' => 'string',
        'output' => 'numeric',
        'input' => 'numeric'
    ];
    $this->validate($request, $rules);
  }
}
