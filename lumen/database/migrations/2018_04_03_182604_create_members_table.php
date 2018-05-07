<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('members', function (Blueprint $table) {
      $table->engine = 'InnoDB';

      $table->increments('id');
      $table->integer('role_id')->unsigned();
      $table->string('email', 80)->nullable();
      $table->string('password', 255)->nullable();
      $table->string('firstName', 30);
      $table->string('lastName', 30)->nullable();
      $table->string('phoneNumber', 15)->nullable();
      $table->date('lastPaymentDate')->nullable();

      $table->nullableTimestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('members');
  }

}
