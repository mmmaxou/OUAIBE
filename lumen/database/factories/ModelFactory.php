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
        'shortDescription' => $faker->realText(64),
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
$factory->define(App\Materiel::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'quantity' => $faker->randomDigit,
        'type_materiels_id' => mt_rand(1, 5)
    ];
});
$factory->define(App\MetaData::class, function (Faker\Generator $faker) {
    return [
        'metakey' => $faker->word,
        'metavalue' => $faker->word,
    ];
});
$factory->define(App\Sponsor::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->company,
        'mail' => $faker->companyEmail,
        'phoneNumber' => $faker->e164PhoneNumber,
        'shortDescription' => $faker->realText(64),
        'logo' => $faker->imageUrl
    ];
});
$factory->define(App\Transaction::class, function (Faker\Generator $faker) {
    return [
        'dateTransaction' => $faker->dateTimeThisYear,
        'output' => $faker->randomFloat(4, 0, 1000),
        'input' => $faker->randomFloat(4, 0, 1000),
        'shortDescription' => $faker->realText(64)        
    ];
});

$factory->define(App\TypeMateriel::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'icon' => $faker->imageUrl
    ];
});
