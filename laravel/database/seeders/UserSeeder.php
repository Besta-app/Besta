<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Seeder provisoire pour créer un utilisateur
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'nom' => 'cesat',
            'prenom' => 'oier',
            'email' => 'oier.cesat@gmail.com',
            'password' => Hash::make('root'),
            'etablissement_id' => 1,
            'type_user_id' => 1,
        ]);
    }
}
