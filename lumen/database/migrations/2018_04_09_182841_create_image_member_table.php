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

    Schema::table('image_member', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('restrict')
              ->onUpdate('restrict');

      $table->foreign('member_id')->references('id')->on('members')
              ->onDelete('restrict')
              ->onUpdate('restrict');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('image_member', function(Blueprint $table) {
      $table->dropForeign('image_member_image_id_foreign');
      $table->dropForeign('image_member_member_id_foreign');
    });

    Schema::dropIfExists('image_member');
  }

}
