<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypesMaterialsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('types_materials', function (Blueprint $table) {
      $table->engine = 'InnoDB';

      $table->increments('id');
      $table->integer('image_id')->unsigned();
      $table->string('name', 50);

      $table->nullableTimestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('types_materials');
  }

}
