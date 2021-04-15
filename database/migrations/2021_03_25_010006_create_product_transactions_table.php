<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_transactions', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('product_name');
            $table->string('product_description');
            $table->string('product_image');
            $table->string('category_name');
            $table->uuid('category_id');
            $table->integer('total');
            $table->integer('quantity');
            $table->integer('price_capital_price');
            $table->integer('price_name');
            $table->uuid('transaction_id');
            $table->uuid('product_id');
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
        Schema::dropIfExists('product_transactions');
    }
}
