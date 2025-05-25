<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use App\Models\Worker;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class WorkerController extends Controller
{
    public function getWorkers()
    {

        $workers = Worker::with('category')->where('is_verified', 1)->get();


        return response()->json($workers);
    }

    public function getWorkerRequest(Request $request)
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
        // $token = $request->bearerToken();
        // $admin = Admin::where('remember_token', $token)->first();
        if ($request->hasFile('profilePicture')) {
            $profile_picture = $request->file('profilePicture')->store('profile_pics', 'public');
        } else {
            $profile_picture = null;
        }
        // $admin_id = $admin->id;

        $worker = Worker::create([
            // 'admin_id' => $admin_id,
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
            'is_verified' => false,
        ]);


        return response()->json($worker);
    }

    public function diplayRequestWorker()
    {
        $workers = Worker::with('category')->where('is_verified', 0)->get();
        $TotalWorkersRequest = $workers->count();
        if (!$workers) {
            return response()->json(['NoWorker' => 'Workers not Found']);
        }

        return response()->json([
            'workers' => $workers,
            'TotalWorkerRequest' => $TotalWorkersRequest
        ]);
    }

    public function getDashboard(Request $request)
    {

        $token = $request->bearerToken();
        $worker = Worker::where('remember_token', $token)->first();
        if (!$worker) {
            return response()->json(['message' => 'Worker not found'], 404);
        }

        return response()->json([
            'worker' => $worker,
        ]);
    }
}
