<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListItemsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_items', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('mlist_id')->unsigned();
            $table->smallInteger('orderNum')->nullable();
            $table->string('title');
            $table->string('body');
            $table->timestamps();

            $table->foreign('mlist_id')
                        ->references('id')
                        ->on('mlists')
                        ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('list_items');
    }

}
