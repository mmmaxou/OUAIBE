<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
 */

$router->get('/', function () use ($router) {
  return $router->app->version();
});

// ------------------------- Authentication routes -----------------------------
/*
  Login
  $rules = [
    'email' => 'required|string',
    'password' => 'required|string'
  ];
  Return an access token
 */
Route::post('login', 'JwtAuthenticateController@login');

/*
  Logout
 */
Route::post('logout', 'JwtAuthenticateController@logout');

/*
  Refresh the connection
  Return a new token
 */
Route::post('refresh', 'JwtAuthenticateController@refresh');

/*
  Return the information of the member who owns this token
 */
Route::post('me', 'JwtAuthenticateController@me');

// ------------------------------ Members ---------------------------------------

$router->group(['middleware' => 'ability:admin,read-members'], function() use ($router) {
  /*
    Return all members
   */
  $router->get('/members', 'MemberController@index');
  /*
    Return the number of members
   */
  $router->get('/members/count/', 'MemberController@count');
  /*
    Return a given member from his id
   */
  $router->get('/members/{member_id}', 'MemberController@show');
  /*
    Return all images from a given id member
   */
  $router->get('/members/{member_id}/images', 'MemberController@showImages');
});


$router->group(['middleware' => 'ability:admin,edit-members'], function() use ($router) {

  /*
    Add a member. Add rules:
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
    Return a message with the id of the added member
   */
  $router->post('/members', 'MemberController@store');

  /*
    Edit a member. 
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
    Return the edited member
   */
  $router->put('/members/{member_id}', 'MemberController@update');
  
  /*
    Delete a member from a given id
   */
  $router->delete('/members/{member_id}', 'MemberController@destroy');
});

// ------------------------------ Material ---------------------------------------

$router->group(['middleware' => 'ability:admin,read-materials'], function() use ($router) {
  /*
    Return all the materials
   */
  $router->get('/materials', 'MaterialController@index');

  /*
    Return a material from a given id
   */
  $router->get('/materials/{material_id}', 'MaterialController@show');
});

$router->group(['middleware' => 'ability:admin,write-materials'], function() use ($router) {
  
  /*
    Add a material
    $rules = [
      'name' => 'required|string',
      'quantity' => 'required|numeric',
      'type_material_id' => 'required|numeric|exists:types_materials,id'
    ];
    Return a message with the id of the added material
   */
  $router->post('/materials', 'MaterialController@store');
  
  /*
    Edit a material
    $rules = [
      'name' => 'string',
      'quantity' => 'numeric',
      'type_material_id' => 'numeric|exists:types_materials,id'
    ];
    Return the edited material
   */
  $router->put('/materials/{material_id}', 'MaterialController@update');
  
  /*
    Delete a materials from a given id
   */
  $router->delete('/materials/{material_id}', 'MaterialController@destroy');
});


// ------------------------------ MetaData ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-metaDatas'], function() use ($router) {
  /*
    Return all MetaDatas
   */
  $router->get('/metaDatas', 'MetaDataController@index');
  /*
    Return a metaData from a given metaKey
   */
  $router->get('/metaDatas/{metaKey}', 'MetaDataController@show');
});
$router->group(['middleware' => 'ability:admin,write-metaDatas'], function() use ($router) {
  
  /*
    Add a metadata
    $rules = [
      'metaKey' => 'required|string',
      'metaValue' => 'required|string'
    ];
    Return a message with the id of the added metadata
   */
  $router->post('/metaDatas', 'MetaDataController@store');

  /*
    Edit a metaData
    $rules = [
      'metaKey' => 'string',
      'metaValue' => 'string'
    ];
    Return the edited metadata
   */
  $router->put('/metaDatas/{metaKey}', 'MetaDataController@update');
  
  /*
    Delete a metaDatas from a given id
   */
  $router->delete('/metaDatas/{metaKey}', 'MetaDataController@destroy');
});

// ------------------------------- Role ----------------------------------------

$router->group(['middleware' => 'ability:admin,read-roles'], function() use ($router) {
  
  /*
    Return all roles
   */
  $router->get('/roles', 'RoleController@index');
  
  /*
    Return a role from a given id
   */
  $router->get('/roles/{role_id}', 'RoleController@show');
});

$router->group(['middleware' => 'ability:admin,write-roles'], function() use ($router) {
  /*
    Add a role
    $rules = [
      'name' => 'required|string',
      'shortDescription' => 'required|string',
      'image_id' => 'required|numeric|exists:images,id',
      'permissions' => "array",
      'permissions.*' => "numeric|exists:permissions,id"
    ];
    Return a message with the id of the added role
   */
  $router->post('/roles', 'RoleController@store');

  /*
    Edit a role
    $rules = [
      'name' => 'string',
      'shortDescription' => 'string',
      'image_id' => 'numeric|exists:images,id',
      'permissions' => "array",
      'permissions.*' => "numeric|exists:permissions,id"
    ];
    Return the edited role
   */
  $router->put('/roles/{role_id}', 'RoleController@update');
  
  /*
    Delete a role from a given id
   */
  $router->delete('/roles/{role_id}', 'RoleController@destroy');
  
  /*
    Return all permissions of a role from a given id
   */
  $router->get('/roles/{role_id}/permissions', 'RoleController@showPermissions');
  
  /*
    Return all permissions
   */
  $router->get('/permissions', 'PermissionController@index');
});
// ------------------------------ Sponsor ---------------------------------------

$router->group(['middleware' => 'ability:admin,read-sponsors'], function() use ($router) {
  /*
    Return all sponsors
   */
  $router->get('/sponsors', 'SponsorController@index');
  
  /*
    Return the number of sponsors
   */
  $router->get('/sponsors/count/', 'SponsorController@count');
  
  /*
    Return a sponsor from a given id
   */
  $router->get('/sponsors/{sponsor_id}', 'SponsorController@show');
  
});

$router->group(['middleware' => 'ability:admin,write-sponsors'], function() use ($router) {
  /*
    Add a sponsor
    $rules = [
      'email' => 'email|unique:sponsors',
      'name' => 'required|alpha',
      'shortDescription' => 'alpha',
      'phoneNumber' => 'numeric|min:10',
      'image_id' => 'numeric|exists:images,id'
    ];
    Return a message with the id of the added sponsor
   */
  $router->post('/sponsors', 'SponsorController@store');
  
  /*
    Edit a sponsor
    $rules = [
      'email' => 'email|unique:sponsors',
      'name' => 'alpha',
      'shortDescription' => 'alpha',
      'phoneNumber' => 'numeric|min:10',
      'image_id' => 'numeric|exists:images,id'
    ];
    Return the edited sponsor
   */
  $router->put('/sponsors/{sponsor_id}', 'SponsorController@update');
  
  /*
    Delete a sponsor from a given id
   */
  $router->delete('/sponsors/{sponsor_id}', 'SponsorController@destroy');
});
// ------------------------------ Transaction ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-transactions'], function() use ($router) {
  /*
    Return all transactions
   */
  $router->get('/transactions', 'TransactionController@index');
  
  /*
    Return a transaction from a given id
   */
  $router->get('/transactions/{transaction_id}', 'TransactionController@show');
  
});
$router->group(['middleware' => 'ability:admin,write-transactions'], function() use ($router) {
  /*
    Add a transaction
    $rules = [
      'dateTransaction' => 'required|string',
      'shortDescription' => 'required|string',
      'output' => 'required|numeric',
      'input' => 'required|numeric'
    ];
    Return a message with the id of the added transaction
   */
  $router->post('/transactions', 'TransactionController@store');

  /*
    Edit a transaction
    $rules = [
      'dateTransaction' => 'string',
      'shortDescription' => 'string',
      'output' => 'numeric',
      'input' => 'numeric'
    ];
    Return the edited transaction
   */
  $router->put('/transactions/{transaction_id}', 'TransactionController@update');
  
  /*
    Delete a transaction from a given id
   */
  $router->delete('/transactions/{transaction_id}', 'TransactionController@destroy');
});
// ------------------------------- TypeMaterial ------------------------------- 

$router->group(['middleware' => 'ability:admin,read-types-materials'], function() use ($router) {
  /*
    Return all typeMaterials
   */
  $router->get('/typeMaterials', 'TypeMaterialController@index');
  
  /*
    Return the materials by category
   */
  $router->get('/typeMaterials/materials/', 'TypeMaterialController@materials');
  
  /*
    Return the number of materials by category
   */
  $router->get('/typeMaterials/materials/count/', 'TypeMaterialController@count');
  
  /*
    Return a material type from a given id
   */
  $router->get('/typeMaterials/{type_material_id}', 'TypeMaterialController@show');
});
$router->group(['middleware' => 'ability:admin,write-types-materials'], function() use ($router) {
  /*
    Add a typeMaterial
    $rules = [
      'name' => 'required|string',
      'image_id' => 'required|numeric|exists:images,id'
    ];
   */
  $router->post('/typeMaterials', 'TypeMaterialController@store');

  /*
    Edit a typeMaterials
    $rules = [
      'name' => 'string',
      'image_id' => 'numeric|exists:images,id'
    ];
   */
  $router->put('/typeMaterials/{type_material_id}', 'TypeMaterialController@update');
  
  /*
    Deletes a typeMaterials with a given id
   */
  $router->delete('/typeMaterials/{type_material_id}', 'TypeMaterialController@destroy');
});
// ------------------------------ Images ---------------------------------------
$router->group(['middleware' => 'ability:admin,read-images'], function() use ($router) {
  /*
    Return all images
   */
  $router->get('/images', 'ImageController@index');
  
  /*
    Returns the number of images
   */
  $router->get('/images/count/', 'ImageController@count');
  
  /*
    Return a image from a given id
   */
  $router->get('/images/{image_id}', 'ImageController@show');
});

$router->group(['middleware' => 'ability:admin,write-images'], function() use ($router) {
  /*
    Add an image
    $rules = [
      'name' => 'required',
      'image' => 'required|image'
    ];
    Return a message with the id of the added image
   */
  $router->post('/images', 'ImageController@store');
  /*
    Edit a image
    $rules = [
      'name' => ''
    ];
    Returns the info of the edited image
   */
  $router->put('/images/{image_id}', 'ImageController@update');
  
  /*
    Delete a image with a given id
   */
  $router->delete('/images/{image_id}', 'ImageController@destroy');
});

