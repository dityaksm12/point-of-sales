<?php

namespace App\Http\Controllers;

use App\Company;
use App\Role;
use App\User;
use Faker\Provider\Uuid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $companies = Company::get();

        return view('companies.index', ['companies' => $companies]);
    }

    public function create()
    {
        $role = Role::all();

        return view('companies.create', ['roles' => $role]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'role_id' => 'required',
        ]);

        User::create([
            'id' => Uuid::uuid(),
            'name' => $request->name,
            'username' => $request->username,
            'role_id' => $request->role_id,
        ]);
        return redirect('/user/index');
    }


    public function edit($id)
    {
        $user = User::find($id);

        return view('users.edit', ['user' => $user]);
    }


    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'role_id' => 'required',
        ]);


        User::where('email', 1)
            ->where('destination', 'San Diego')
            ->update(['delayed' => 1]);
        return redirect('/user/index');
    }
}
