<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It is a breeze. Simply tell Lumen the URIs it should respond to
  | and give it the Closure to call when that URI is requested.
  |
 */

$router->get('/', function () use ($router) {
  return $router->app->version();
});

// * EXEMPLE
// Users
$router->get('/users', 'UserController@index');
$router->post('/users', 'UserController@store');
$router->get('/users/{user_id}', 'UserController@show');
$router->put('/users/{user_id}', 'UserController@update');
$router->delete('/users/{user_id}', 'UserController@destroy');


// Authentication route
Route::post('login', 'JwtAuthenticateController@login');
Route::post('logout', 'JwtAuthenticateController@logout');
Route::post('refresh', 'JwtAuthenticateController@refresh');
Route::post('me', 'JwtAuthenticateController@me');

// * Real classes
// ------------------------------ Members ---------------------------------------

$router->group(['middleware' => 'ability:admin,read-members'], function() use ($router) {
  /*
    Renvoie tous les membres
   */
  $router->get('/members', 'MemberController@index');
  /*
    Renvoie le nombre de membres
   */
  $router->get('/members/count/', 'MemberController@count');
  /*
    Renvoi un membrer d'id donné
   */
  $router->get('/members/{member_id}', 'MemberController@show');
  /*
    Renvoi les images d'un membrer d'id donné
   */
  $router->get('/members/{member_id}/images', 'MemberController@showImages');
});

$router->group(['middleware' => 'ability:admin,edit-members'], function() use ($router) {

  /*
    Ajoute un membre. Règles d'ajout :
    $rules = [
    'email' => 'required|email|unique:members',
    'firstName' => 'required|alpha',
    'lastName' => 'required|alpha',
    'phoneNumber' => 'required|numeric|min:10',
    'lastPaymentDate' => 'date',
    'role_id' => 'required|numeric',
    'password' => 'min:6',
    'images' => "array",
    'images.*' => "numeric"
    ];
    Renvoie l'id du membre ajouté
   */
  $router->post('/members', 'MemberController@store');

  /*
    Edite un membre. Règles d'ajout :
    $rules = [
    'email' => 'email|unique:members',
    'firstName' => 'alpha',
    'lastName' => 'alpha',
    'phoneNumber' => 'numeric|min:10',
    'lastPaymentDate' => 'date',
    'role_id' => 'numeric',
    'password' => 'min:6',
    'images' => "array",
    'images.*' => "numeric"
    ];
    Renvoie l'id du membre ajouté
   */
  $router->put('/members/{member_id}', 'MemberController@update');
  /*
    Supprime un membrer d'id donné
   */
  $router->delete('/members/{member_id}', 'MemberController@destroy');
});

// ------------------------------ Material ---------------------------------------
/*
  Renvoie tous les materiels
 */
$router->get('/materials', 'MaterialController@index');
/*
  Ajoute un material: Règles:
  'name' => 'required|string',
  'quantity' => 'required|numeric',
  'type_material_id' => 'required|numeric'
 */
$router->post('/materials', 'MaterialController@store');
/*
  Renvoie un materiel avec un id donné
 */
$router->get('/materials/{material_id}', 'MaterialController@show');
/*
  Edite un materiel. Règles :
  'name' => 'string',
  'quantity' => 'numeric',
  'type_material_id' => 'numeric'
 */
$router->put('/materials/{material_id}', 'MaterialController@update');
/*
  Supprime un materiel avec un id donné si il existe
 */
$router->delete('/materials/{material_id}', 'MaterialController@destroy');

// ------------------------------ MetaData ---------------------------------------
$router->get('/metadatas/', 'MetaDataController@index');

// ------------------------------ Role ---------------------------------------
/*
  Renvoie tous les Roles
*/
$router->get('/roles', 'RoleController@index');
/*
  Ajoute un Role. Règles d'ajout :
  $rules = [
        'name' => 'required|string',
        'shortDescription' => 'required|string',
        'elevationLevel' => 'required|numeric',
    ];
  Renvoie l'id du membre ajouté
*/
$router->post('/roles', 'RoleController@store');
/*
  Renvoi un role d'id donné
*/
$router->get('/roles/{role_id}', 'RoleController@show');
/*
    Edite un role. Règles :
    $rules = [
        'name' => 'string',
        'shortDescription' => 'string',
        'elevationLevel' => 'numeric',
    ];
*/
$router->put('/roles/{role_id}', 'RoleController@update');
/*
  Supprime un role d'id donné
*/
$router->delete('/roles/{role_id}', 'RoleController@destroy');

// ------------------------------ Permissions ---------------------------------------

/*
  Renvoie toutes les permissions
 */
$router->get('/permissions', 'PermissionController@index');
$router->get('/roles/{role_id}/permissions', 'RoleController@showPermissions');

// ------------------------------ Sponsor ---------------------------------------
/*
  Renvoie tous les sponsors
 */
$router->get('/sponsors', 'SponsorController@index');
/*
  Renvoie le nombre de sponsors
 */
$router->get('/sponsors/count/', 'SponsorController@count');
/*
  Ajoute un sponsor. Règles d'ajout :
  $rules = [
          'email' => 'email|unique:sponsors',
          'name' => 'required|alpha',
          'shortDescription' => 'required|alpha',
          'phoneNumber' => 'numeric|min:10',
          'image_id' => 'numeric'
    ];
  Renvoie l'id du sponsor ajouté
 */
$router->post('/sponsors', 'SponsorController@store');
/*
  Renvoi un sponsor d'id donné
 */
$router->get('/sponsors/{sponsor_id}', 'SponsorController@show');
/*
  Edite un sponsor. Règles d'ajout :
  $rules = [
          'email' => 'email|unique:sponsors',
          'name' => 'alpha',
          'shortDescription' => 'alpha',
          'phoneNumber' => 'numeric|min:10',
          'image_id' => 'numeric'
    ];
  Renvoie l'id du sponsor ajouté
 */
$router->put('/sponsors/{sponsor_id}', 'SponsorController@update');
/*
  Supprime un sponsor d'id donné
 */
$router->delete('/sponsors/{sponsor_id}', 'SponsorController@destroy');

// ------------------------------ Transaction ---------------------------------------
/*
  Renvoie tous les Transactions
*/
$router->get('/transactions', 'TransactionController@index');
/*
  Ajoute un Transaction. Règles d'ajout :
  $rules = [
        'dateTransaction' => 'required|string',
        'shortDescription' => 'required|string',
        'output' => 'required|numeric',
        'input' => 'required|numeric'
    ];
  Renvoie l'id du membre ajouté
*/
$router->post('/transactions', 'TransactionController@store');
/*
  Renvoi un transaction d'id donné
*/
$router->get('/transactions/{transaction_id}', 'TransactionController@show');
/*
    Edite un transaction. Règles :
    $rules = [
        'dateTransaction' => 'string',
        'shortDescription' => 'string',
        'output' => 'numeric',
        'input' => 'numeric'
    ];
*/
$router->put('/transactions/{transaction_id}', 'TransactionController@update');
/*
  Supprime un transaction d'id donné
*/
$router->delete('/transactions/{transaction_id}', 'TransactionController@destroy');

// ------------------------------ TypeMaterial ------------------------------ 
/*
  Renvoie tous les typeMaterials
 */
$router->get('/typeMaterials', 'TypeMaterialController@index');
/*
  Ajoute un typeMateriel: Règles:
  'name' => 'required|string',
  'image_id' => 'required|numeric'
 */
$router->post('/typeMaterials', 'TypeMaterialController@store');
/*
  Renvoie les materiels par catégorie
 */
$router->get('/typeMaterials/materials/', 'TypeMaterialController@materials');
/*
  Renvoie le nombre de materiel par catégorie
 */
$router->get('/typeMaterials/materials/count/', 'TypeMaterialController@count');
/*
  Renvoie un typeMateriel avec un id donné
 */
$router->get('/typeMaterials/{type_material_id}', 'TypeMaterialController@show');
/*
  Edite un typeMateriel. Règles :
  'name' => 'required|string',
  'image_id' => 'required|numeric'
 */
$router->put('/typeMaterials/{type_material_id}', 'TypeMaterialController@update');
/*
  Supprime un typeMaterials avec un id donné si il existe
 */
$router->delete('/typeMaterials/{type_material_id}', 'TypeMaterialController@destroy');
// ------------------------------ Images ---------------------------------------
/*
  Renvoie toutes les images
 */
$router->get('/images', 'ImageController@index');
/*
  Renvoie le nombre d'images
 */
$router->get('/images/count/', 'ImageController@count');
/*
  Ajoute une image. Règles d'ajout :
  $rules = [
  'name' => 'required',
  'image' => 'required|image'
  ];
  Renvoie l'id de l'image ajouté
 */
$router->post('/images', 'ImageController@store');
/*
  Renvoi une image d'id donné
 */
$router->get('/images/{image_id}', 'ImageController@show');
/*
  Edite une image. Règles de modification :
  $rules = [
  'name' => ''
  ];
  Renvoie les infos de l'image modifié
 */
$router->put('/images/{image_id}', 'ImageController@update');
/*
  Supprime une image d'id donné
 */
$router->delete('/images/{image_id}', 'ImageController@destroy');
