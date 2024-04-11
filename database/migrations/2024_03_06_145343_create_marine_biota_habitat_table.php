<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('marine_biota_habitat', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('marine_biota_id');
            $table->unsignedBiginteger('habitat_id');


            $table->foreign('marine_biota_id')->references('id')
                ->on('marine_biotas')->onDelete('cascade');
            $table->foreign('habitat_id')->references('id')
                ->on('habitats')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marine_biota_habitat');
    }
};
