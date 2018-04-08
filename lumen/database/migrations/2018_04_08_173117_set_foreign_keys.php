<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SetForeignKeys extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {

    Schema::table('materials', function (Blueprint $table) {
      $table->foreign('type_material_id')
              ->references('id')
              ->on('types_materials')
              ->onDelete('restrict')
              ->onUpdate('restrict');
    });

    Schema::table('types_materials', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('restrict')
              ->onUpdate('restrict');
    });

    Schema::table('members', function (Blueprint $table) {
      $table->foreign('role_id')
              ->references('id')
              ->on('roles')
              ->onDelete('restrict')
              ->onUpdate('restrict');
    });

    Schema::table('roles', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('restrict')
              ->onUpdate('restrict');
    });

    Schema::table('sponsors', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
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
    Schema::table('materials', function(Blueprint $table) {
      $table->dropForeign('materials_type_material_id_foreign');
    });
    Schema::table('types_materials', function(Blueprint $table) {
      $table->dropForeign('types_materials_image_id_foreign');
    });
    Schema::table('members', function(Blueprint $table) {
      $table->dropForeign('members_role_id_foreign');
    });
    Schema::table('roles', function(Blueprint $table) {
      $table->dropForeign('roles_image_id_foreign');
    });
    Schema::table('sponsors', function(Blueprint $table) {
      $table->dropForeign('sponsors_image_id_foreign');
    });
  }

}
