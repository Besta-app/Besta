<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * function pour créer un utilisateur
     * @param Request $request
     * @return User $user
     * @return string $token
     */
    public function store(Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|unique:users,email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status'=>false,
                    'message'=>'Champs non valides',
                    'error'=>$validator->errors()], 401);
            }

            $user =User::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'etablissement_id' => $request->etablissement_id,
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status'=>true,
                'message'=>'Utilisateur créé avec succès',
                'data'=>[
                    'user'=>$user,
                    'token'=>$token
                ]
            ], 200);

        }catch(\Exception $e){
            return response()->json([
                'status'=>false,
                'message'=>'Utilisateur non créé',
                'error'=>$e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if($validator->fails()){
                return response()->json([
                    'status'=>false,
                    'message'=>'Champs non valides',
                    'error'=>$validator->errors()], 401);
            }

            if(!Auth::attempt($request->only('email', 'password'))){
                return response()->json([
                    'status'=>false,
                    'message'=>'Identifiants incorrects',
                    'error'=>'Identifiants incorrects'], 401);
            }

            $user = User::where('email', $request->email)->firstOrFail();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status'=>true,
                'message'=>'Connexion réussie',
                'data'=>[
                    'user'=>$user,
                    'token'=>$token
                ]
            ], 200);

        }catch(\Exception $e){
            return response()->json([
                'status'=>false,
                'message'=>'Connexion échouée',
                'error'=>$e->getMessage()
            ], 500);
        }
    }
}
