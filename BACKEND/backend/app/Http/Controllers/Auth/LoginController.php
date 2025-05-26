<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if ($request->type === 'admin') {
            if (Auth::guard('admin')->attempt($credentials)) {
                $admin = Auth::guard('admin')->user();
                $token = $admin->createToken('auth_token')->plainTextToken;
                $admin->remember_token = $token;
                $admin->save();
                return response()->json([
                    'message' => 'Login successful',
                    'user' => $admin,
                    'token' => $token,
                ]);
            }
        } elseif ($request->type === 'worker') {
            if (Auth::guard('worker')->attempt($credentials)) {
                $worker = Auth::guard('worker')->user();
                $token = $worker->createToken('auth_token')->plainTextToken;
                $worker->remember_token = $token;
                $worker->save();
                return response()->json([
                    'message' => 'Login successful',
                    'user' => $worker,
                    'token' => $token,
                ]);
            }
        }

        return response()->json([
            'message' => 'Invalid credentials or user type',
        ], 401);
    }


    public function getUser(Request $request)
    {
        $token = $request->bearerToken();
        // Log::info("Token: " . $token);
        $user = Admin::where('remember_token', $token)->first();

        if ($user) {
            return response()->json([
                'user' => $user,
                'role' => 'admin',
            ]);
        } else {
            return response()->json([
                'message' => 'User not found From perrin',
            ], 404);
        }
    }
}
