<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->integer('role_id')->unsigned();
            $table->string('mail');
            $table->string('password');
            $table->string('firstName');
            $table->string('lastName');
            $table->string('phoneNumber', 20);
            $table->date('lastPaymentDate');

            $table->nullableTimestamps();
        });
        
        Schema::table('member', function (Blueprint $table) {
            $table->foreign('role_id')
                ->references('id')
                ->on('role');
//                ->onDelete('cascade')
//                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
}
