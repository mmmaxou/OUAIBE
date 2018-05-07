<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('materials', function (Blueprint $table) {
      $table->engine = 'InnoDB';

      $table->increments('id');
      $table->string('name', 50);
      $table->integer('quantity');
      $table->integer('type_material_id')->unsigned();

      $table->nullableTimestamps();
    });

  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('materials');
  }

}
