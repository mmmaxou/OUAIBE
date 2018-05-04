<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EntrustSetupTables extends Migration {

  /**
   * Run the migrations.
   *
   * @return  void
   */
  public function up() {


    // Create table for storing permissions
    Schema::create('permissions', function (Blueprint $table) {
      $table->engine = 'InnoDB';
      $table->increments('id');
      $table->string('name')->unique();
      $table->string('display_name')->nullable();
      $table->string('description')->nullable();
      $table->timestamps();
    });

    // Create table for associating permissions to roles (Many-to-Many)
    Schema::create('permission_role', function (Blueprint $table) {
      $table->engine = 'InnoDB';
      $table->integer('permission_id')->unsigned();
      $table->integer('role_id')->unsigned();
      $table->primary(['permission_id', 'role_id']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return  void
   */
  public function down() {
    Schema::dropIfExists('permission_role');
    Schema::dropIfExists('permissions');
  }

}
