<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Role::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->jobTitle,
        'shortDescription' => $faker->paragraph,
        'elevationLevel' => $faker->numberBetween(0, 10)
    ];
});


$factory->define(App\Member::class, function (Faker\Generator $faker) {

    $hasher = app()->make('hash');

    return [
        'mail'=> $faker->email,
        'firstName' => $faker->firstName,
        'lastName' => $faker->lastName,
        'phoneNumber' => $faker->e164PhoneNumber,
        'lastPaymentDate' => $faker->dateTimeThisYear,
        'role_id' => mt_rand(1, 10),
        'password' => $hasher->make("secret")
    ];
});
