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
              ->onDelete('cascade')
              ->onUpdate('cascade');
    });

    Schema::table('types_materials', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('set null')
              ->onUpdate('cascade');
    });

    Schema::table('members', function (Blueprint $table) {
      $table->foreign('role_id')
              ->references('id')
              ->on('roles')
              ->onDelete('cascade')
              ->onUpdate('cascade');
    });

    Schema::table('roles', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('set null')
              ->onUpdate('cascade');
    });

    Schema::table('sponsors', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('set null')
              ->onUpdate('cascade');
    });

    Schema::table('permission_role', function (Blueprint $table) {
      $table->foreign('permission_id')->references('id')->on('permissions')
              ->onUpdate('cascade')->onDelete('cascade');
      $table->foreign('role_id')->references('id')->on('roles')
              ->onUpdate('cascade')->onDelete('cascade');
    });


    Schema::table('image_member', function (Blueprint $table) {
      $table->foreign('image_id')
              ->references('id')
              ->on('images')
              ->onDelete('cascade')
              ->onUpdate('cascade');

      $table->foreign('member_id')->references('id')->on('members')
              ->onDelete('cascade')
              ->onUpdate('cascade');
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
    Schema::table('image_member', function(Blueprint $table) {
      $table->dropForeign('image_member_image_id_foreign');
      $table->dropForeign('image_member_member_id_foreign');
    });
    Schema::table('permission_role', function(Blueprint $table) {
      $table->dropForeign('permission_role_permission_id_foreign');
      $table->dropForeign('permission_role_role_id_foreign');
    });
  }

}
