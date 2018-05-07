<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Material;
use App\Image;
use App\Member;
use App\MetaData;
use App\Role;
use App\Sponsor;
use App\Transaction;
use App\TypeMaterial;
use App\Permission;

class DatabaseSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {

    // Disable foreign key checking because truncate() will fail
    DB::statement('SET FOREIGN_KEY_CHECKS = 0');


    factory(Image::class, 10)->create();
    factory(Material::class, 50)->create();
    factory(Member::class, 50)->create();
    //factory(MetaData::class, 10)->create();
    factory(Role::class, 10)->create();
    factory(Sponsor::class, 25)->create();
    factory(Transaction::class, 120)->create();
    factory(TypeMaterial::class, 10)->create();


    // Get all the images attaching up to 3 random image to each member
    $images = App\Image::all();
    // Populate the pivot table
    App\Member::all()->each(function ($member) use ($images) {
      $member->images()->attach(
              $images->random(rand(1, 3))->pluck('id')->toArray()
      );
    });

    // Enable it back
    DB::statement('SET FOREIGN_KEY_CHECKS = 1');
  }

}
