<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->uuid('category_id');
            $table->uuid('price_id');
            $table->string('slug');
            $table->uuid('vendor_id');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(1);
            $table->uuid('company_id');
            $table->uuid('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
