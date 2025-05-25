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
        Schema::create('workers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable()->constrained('admins')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            // $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->string('bio');
            $table->string('phone')->nullable();
            $table->integer('experience')->nullable();
            $table->string('location')->nullable();
            $table->string('profile_pic')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('is_verified')->nullable();
            $table->string('is_available')->default('no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workers');
    }
};
