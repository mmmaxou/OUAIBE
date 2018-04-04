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
$router->get('/users/', 'UserController@index');
$router->post('/users/', 'UserController@store');
$router->get('/users/{user_id}', 'UserController@show');
$router->put('/users/{user_id}', 'UserController@update');
$router->delete('/users/{user_id}', 'UserController@destroy');


// * Real classes
// Members
$router->get('/members/', 'MemberController@index');
$router->post('/members/', 'MemberController@store');

// Material
$router->get('/materials/', 'MaterialController@index');

// MetaData
$router->get('/metadatas/', 'MetaDataController@index');

// Role
$router->get('/roles/', 'RoleController@index');

// Sponsor
$router->get('/sponsors/', 'SponsorController@index');

// Transaction
$router->get('/transactions/', 'TransactionController@index');

// TypeMaterial
$router->get('/typeMaterials/', 'TypeMaterialController@index');
