<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSponsorsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('sponsors', function (Blueprint $table) {
      $table->engine = 'InnoDB';

      $table->increments('id');
      $table->integer('image_id')->unsigned()->nullable();
      $table->string('name', 50);
      $table->string('email', 80)->nullable();
      $table->string('phoneNumber', 15)->nullable();
      $table->string('shortDescription', 200)->nullable();
      $table->nullableTimestamps();
    });

  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('sponsors');
  }

}
