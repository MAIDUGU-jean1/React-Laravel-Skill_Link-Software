<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use App\Models\Worker;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use Illuminate\Container\Attributes\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{
    public function CreateWorker(Request $request)
    {
        $request->validate([
            'category_id' => 'required|string',
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:workers,email',
            'password' => 'required',
            'bio' => 'nullable|string',
            'phone' => 'required|string|max:15|min:9',
            'location' => 'required|string|max:255',
            'experience' => 'nullable|string',
            'profile_pic' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $token = $request->bearerToken();
        $admin = Admin::where('remember_token', $token)->first();
        if ($request->hasFile('profilePicture')) {
            $profile_picture = $request->file('profilePicture')->store('profile_pics', 'public');
        } else {
            $profile_picture = null;
        }
        if (!$admin) {
            return response()->json([
                'message' => 'Invalid or missing admin token.'
            ], 401); // Unauthorized
        }
        $admin_id = $admin->id;
        $worker = Worker::create([
            'admin_id' => $admin_id,
            'category_id' => $request->category_id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'bio' => $request->bio,
            'phone' => $request->phone,
            'location' => $request->location,
            'experience' => $request->experience,
            'profile_pic' => $profile_picture,
            'is_available' => true,
            'is_verified' => true,
        ]);
        // $token = $worker->createToken('auth_token')->plainTextToken;
        // $worker->remember_token = $token;
        if (!$worker) {
            return response()->json([
                'error' => 'Worker not created Check you validations '
            ]);
        }
        return response()->json([
            'message' => 'Worker created successfully',
            'worker' => $worker,
        ], 201);
    }

    public function deleteWorker($id)
    {
        $worker = Worker::find($id);
        if (!$worker) {
            return response()->json(['message' => 'Worker not found'], 404);
        }
        $worker->delete();
        return response()->json(['message' => 'Worker deleted successfully']);
    }


    public function getCategories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        $admin = Admin::where('remember_token', $token)->first();


        if ($admin) {
            // $admin->tokens()->delete();
            $admin->update(['remember_token' => null]);
            return response()->json(['message' => 'Logged out successfully']);
        }
        return response()->json(['message' => 'Invalid token'], 401);
    }

    public function editWorker(Request $request, $id)
    {

        // Log::info('Request: ' . $request);
        $worker = Worker::find($id);
        if (!$worker) {
            return response()->json(['message' => 'Worker not found'], 404);
        }

        $request->validate([
            'category_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'email' => 'required',
            // 'bio' => 'nullable|string',
            'phone' => 'required|string|max:15|min:9',
            // 'location' => 'required|string|max:255',
            'experience' => 'nullable|integer',
            'profile_pic' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('profilePicture')) {
            $profile_picture = $request->file('profilePicture')->store('profile_pics', 'public');
        } else {
            $profile_picture = $worker->profile_pic;
        }

        $worker->update([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'email' => $request->email,
            // 'bio' => $request->bio,
            'phone' => $request->phone,
            // 'location' => $request->location,
            'experience' => $request->experience,
            // 'profilePicture' => $profile_picture,
        ]);

        return response()->json(['message' => 'Worker updated successfully', 'worker' => $worker]);
    }
}
