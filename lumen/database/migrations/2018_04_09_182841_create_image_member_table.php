<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImageMemberTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('image_member', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('image_id')->unsigned();
      $table->integer('member_id')->unsigned();
    });

  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {

    Schema::dropIfExists('image_member');
  }

}
