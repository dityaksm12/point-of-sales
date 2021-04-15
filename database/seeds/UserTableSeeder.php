<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Provider\Uuid;
use App\Role;
use App\Company;

class UserTableSeeder extends Seeder
{

    public function run()
    {
        $companyId = Uuid::uuid();
        $userId = Uuid::uuid();
        $roleAdminId = Uuid::uuid();
        $roleEmployeeId = Uuid::uuid();

        DB::table('users')->insert([
            'id' => $userId,
            'company_id' => $companyId,
            'role_id' => 0,
            'is_active' => 1,
            'name' => "gema",
            'username' => 'gemaakbar',
            'password' => Hash::make('gemaakbar'),
        ]);

        DB::table('companies')->insert([
            'id' => $companyId,
            'name' => "PT Mercubuana Indonesia",
            'is_active' => 1,
            'created_by' => $userId,
        ]);


        DB::table('roles')->insert([
            'id' => $roleAdminId,
            'name' => "Admin",
            'is_active' => 1,
            'company_id' => $companyId,
            'created_by' => $userId,
        ]);


        DB::table('roles')->insert([
            'id' => $roleEmployeeId,
            'name' => "Employee",
            'is_active' => 1,
            'company_id' => $companyId,
            'created_by' => $userId,
        ]);

    }
}
