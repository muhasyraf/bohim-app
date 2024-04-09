<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('marine_biotas', function (Blueprint $table) {
            $table->string('category'); 
        });
    }

    public function down()
    {
        Schema::table('marine_biotas', function (Blueprint $table) {
            $table->dropColumn('category'); 
        });
    }
};
