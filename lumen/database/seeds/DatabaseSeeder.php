<?php

use Illuminate\Database\Seeder;

use App\Role;
use App\Member;

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

        factory(Role::class, 10)->create();
        factory(Member::class, 50)->create();

        // Enable it back
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
