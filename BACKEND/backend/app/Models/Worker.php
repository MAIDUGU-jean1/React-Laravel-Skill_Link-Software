<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class Worker extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'admin_id',
        'category_id',
        'name',
        'email',
        'password',
        'bio',
        'phone',
        'location',
        'experience',
        'profile_pic',
        'is_available',
        'is_verified'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'is_available' => 'boolean',
        'is_verified' => 'boolean',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    //
}
