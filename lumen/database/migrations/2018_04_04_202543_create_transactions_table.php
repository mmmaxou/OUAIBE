<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('transactions', function (Blueprint $table) {
      $table->engine = 'InnoDB';

      $table->increments('id');
      $table->date('dateTransaction');
      $table->float('output', 10, 4)->nullable();
      $table->float('input', 10, 4)->nullable();
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
    Schema::dropIfExists('transactions');
  }

}