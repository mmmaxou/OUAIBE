<?php

use Illuminate\Database\Seeder;

use App\Materiel;
use App\Member;
use App\MetaData;
use App\Role;
use App\Sponsor;
use App\Transaction;
use App\TypeMateriel;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
       public function run(){

        // Disable foreign key checking because truncate() will fail
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        Member::truncate();
        Role::truncate();

        factory(Materiel::class, 50)->create();
        factory(Member::class, 50)->create();
        factory(MetaData::class, 5)->create();
        factory(Role::class, 10)->create();
        factory(Sponsor::class, 25)->create();
        factory(Transaction::class, 120)->create();
        factory(TypeMateriel::class, 5)->create();

        // Enable it back
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
