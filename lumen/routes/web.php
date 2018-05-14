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
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$router->get('/', function () use ($router) {
  return $router->app->version();
});

// Authentication route

/*
  Se connecter
  $rules = [
  'email' => 'required|string',
  'password' => 'required|string'
  ];
  Renvoie un token
 */
Route::post('login', 'JwtAuthenticateController@login');

/*
  Se déconnecter
 */
Route::post('logout', 'JwtAuthenticateController@logout');

/*
  Rafraichir la connexion
  Renvoie un nouveau token
 */
Route::post('refresh', 'JwtAuthenticateController@refresh');
Route::post('me', 'JwtAuthenticateController@me');

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
    'role_id' => 'required|numeric|exists:roles,id',
    'password' => 'min:6',
    'images' => "array",
    'images.*' => "numeric|exists:images,id"
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
    'role_id' => 'numeric|exists:roles,id',
    'password' => 'min:6',
    'images' => "array",
    'images.*' => "numeric|exists:images,id"
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

$router->group(['middleware' => 'ability:admin,read-materials'], function() use ($router) {
  /*
    Renvoie tous les materiels
   */
  $router->get('/materials', 'MaterialController@index');

  /*
    Renvoie un materiel avec un id donné
   */
  $router->get('/materials/{material_id}', 'MaterialController@show');
});

$router->group(['middleware' => 'ability:admin,write-materials'], function() use ($router) {
  /*
    Ajoute un material: Règles:
    $rules = [
    'name' => 'required|string',
    'quantity' => 'required|numeric',
    'type_material_id' => 'required|numeric|exists:types_materials,id'
    ];
   */
  $router->post('/materials', 'MaterialController@store');
  /*
    Edite un materiel. Règles :
    $rules = [
    'name' => 'string',
    'quantity' => 'numeric',
    'type_material_id' => 'numeric|exists:types_materials,id'
    ];
   */
  $router->put('/materials/{material_id}', 'MaterialController@update');
  /*
    Supprime un materiel avec un id donné si il existe
   */
  $router->delete('/materials/{material_id}', 'MaterialController@destroy');
});


// ------------------------------ MetaData ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-metaDatas'], function() use ($router) {
  /*
    Renvoie tous les MetaDatas
   */
  $router->get('/metaDatas', 'MetaDataController@index');
  /*
    Renvoi un metaData d'id donné
   */
  $router->get('/metaDatas/{metaKey}', 'MetaDataController@show');
});
$router->group(['middleware' => 'ability:admin,write-metaDatas'], function() use ($router) {
  /*
    Ajoute un MetaData. Règles d'ajout :
    $rules = [
    'metaKey' => 'required|string',
    'metaValue' => 'required|string'
    ];
    Renvoie l'id du membre ajouté
   */
  $router->post('/metaDatas', 'MetaDataController@store');

  /*
    Edite un metaData. Règles :
    $rules = [
    'metaKey' => 'string',
    'metaValue' => 'string'
    ];
   */
  $router->put('/metaDatas/{metaKey}', 'MetaDataController@update');
  /*
    Supprime un metaData d'id donné
   */
  $router->delete('/metaDatas/{metaKey}', 'MetaDataController@destroy');
  /*
    Renvoie toutes les permissions d'un metaDatas
   */
  $router->get('/metaDatas/{metaKey}/permissions', 'MetaDataController@showPermissions');
});

// ------------------------------ Role ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-roles'], function() use ($router) {
  /*
    Renvoie tous les Roles
   */
  $router->get('/roles', 'RoleController@index');
  /*
    Renvoi un role d'id donné
   */
  $router->get('/roles/{role_id}', 'RoleController@show');
});
$router->group(['middleware' => 'ability:admin,write-roles'], function() use ($router) {
  /*
    Ajoute un Role. Règles d'ajout :
    $rules = [
    'name' => 'required|string',
    'shortDescription' => 'required|string',
    'image_id' => 'required|numeric|exists:images,id',
    'permissions' => "array",
    'permissions.*' => "numeric|exists:permissions,id"
    ];
    Renvoie l'id du membre ajouté
   */
  $router->post('/roles', 'RoleController@store');

  /*
    Edite un role. Règles :
    $rules = [
    'name' => 'string',
    'shortDescription' => 'string',
    'image_id' => 'numeric|exists:images,id',
    'permissions' => "array",
    'permissions.*' => "numeric|exists:permissions,id"
    ];
   */
  $router->put('/roles/{role_id}', 'RoleController@update');
  /*
    Supprime un role d'id donné
   */
  $router->delete('/roles/{role_id}', 'RoleController@destroy');
  /*
    Renvoie toutes les permissions d'un roles
   */
  $router->get('/roles/{role_id}/permissions', 'RoleController@showPermissions');
  /*
    Renvoie toutes les permissions
   */
  $router->get('/permissions', 'PermissionController@index');
});
// ------------------------------ Sponsor ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-sponsors'], function() use ($router) {
  /*
    Renvoie tous les sponsors
   */
  $router->get('/sponsors', 'SponsorController@index');
  /*
    Renvoie le nombre de sponsors
   */
  $router->get('/sponsors/count/', 'SponsorController@count');
  /*
    Renvoi un sponsor d'id donné
   */
  $router->get('/sponsors/{sponsor_id}', 'SponsorController@show');
});
$router->group(['middleware' => 'ability:admin,write-sponsors'], function() use ($router) {
  /*
    Ajoute un sponsor. Règles d'ajout :
    $rules = [
    'email' => 'email|unique:sponsors',
    'name' => 'required|alpha',
    'shortDescription' => 'alpha',
    'phoneNumber' => 'numeric|min:10',
    'image_id' => 'numeric|exists:images,id'
    ];
    Renvoie l'id du sponsor ajouté
   */
  $router->post('/sponsors', 'SponsorController@store');
  /*
    Edite un sponsor. Règles d'ajout :
    $rules = [
    'email' => 'email|unique:sponsors',
    'name' => 'alpha',
    'shortDescription' => 'alpha',
    'phoneNumber' => 'numeric|min:10',
    'image_id' => 'numeric|exists:images,id'
    ];
    Renvoie l'id du sponsor ajouté
   */
  $router->put('/sponsors/{sponsor_id}', 'SponsorController@update');
  /*
    Supprime un sponsor d'id donné
   */
  $router->delete('/sponsors/{sponsor_id}', 'SponsorController@destroy');
});
// ------------------------------ Transaction ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-transactions'], function() use ($router) {
  /*
    Renvoie tous les Transactions
   */
  $router->get('/transactions', 'TransactionController@index');
  /*
    Renvoie une transaction d'id donné
   */
  $router->get('/transactions/{transaction_id}', 'TransactionController@show');
});
$router->group(['middleware' => 'ability:admin,write-transactions'], function() use ($router) {
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
});
// ------------------------------ TypeMaterial ------------------------------ 
$router->group(['middleware' => 'ability:admin,read-types-materials'], function() use ($router) {
  /*
    Renvoie tous les typeMaterials
   */
  $router->get('/typeMaterials', 'TypeMaterialController@index');
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
});
$router->group(['middleware' => 'ability:admin,write-types-materials'], function() use ($router) {
  /*
    Ajoute un typeMateriel: Règles:
    $rules = [
    'name' => 'required|string',
    'image_id' => 'required|numeric|exists:images,id'
    ];
   */
  $router->post('/typeMaterials', 'TypeMaterialController@store');

  /*
    Edite un typeMateriel. Règles :
    $rules = [
    'name' => 'string',
    'image_id' => 'numeric|exists:images,id'
    ];
   */
  $router->put('/typeMaterials/{type_material_id}', 'TypeMaterialController@update');
  /*
    Supprime un typeMaterials avec un id donné si il existe
   */
  $router->delete('/typeMaterials/{type_material_id}', 'TypeMaterialController@destroy');
});
// ------------------------------ Images ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-images'], function() use ($router) {
  /*
    Renvoie toutes les images
   */
  $router->get('/images', 'ImageController@index');
  /*
    Renvoie le nombre d'images
   */
  $router->get('/images/count/', 'ImageController@count');
  /*
    Renvoi une image d'id donné
   */
  $router->get('/images/{image_id}', 'ImageController@show');
});
$router->group(['middleware' => 'ability:admin,write-images'], function() use ($router) {
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
});

