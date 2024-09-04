<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use \App\Models\TypeEvenement;
use \App\Models\DroitUser;
use \App\Models\TypeEtablissement;
use \App\Models\Etablissement;
use \App\Models\TypeUser;
use \App\Models\User;
use \App\Models\Evenement;
use \App\Models\Carre;
use \App\Models\ModeleCarre;
use \App\Models\Reservation;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //---------------------------------------------------//
        //            TABLES AVEC 0 DEPENDANCES              //
        //---------------------------------------------------//
        // -- TYPE EVENEMENT --
        $type_evenements = [
            ["nom"=>"showcase"],
            ["nom"=>"concert"], 
            ["nom"=>"soiree"], 
        ];
        foreach($type_evenements as $val){TypeEvenement::create($val);}
        

        
        // -- DROIT USER --
        $droit_users = [
            ["nom"=>"creer_evenement"],
            ["nom"=>"modifier_evenement"],
            ["nom"=>"supprimer_evenement"],

            ["nom"=>"creer_carre"],
            ["nom"=>"modifier_carre"],
            ["nom"=>"supprimer_carre"],

            ["nom"=>"creer_modele_carre"],
            ["nom"=>"modifier_modele_carre"],
            ["nom"=>"supprimer_modele_carre"],

            ["nom"=>"creer_type_user"],
            ["nom"=>"supprimer_type_user"],

            ["nom"=>"creer_user"],
            ["nom"=>"modifier_user"],
            ["nom"=>"supprimer_user"]
        ];
        foreach($droit_users as $val){DroitUser::create($val);}


        // -- TYPE ETABLISSEMENT --
        $type_etablissements = [
            ["nom"=>"bar"], 
            ["nom"=>"boite de nuit"], 
            ["nom"=>"village"], 
            ["nom"=>"soiree privee"]
        ];
        foreach($type_etablissements as $val){TypeEtablissement::create($val);}




        //---------------------------------------------------//
        //            TABLES AVEC 1 DEPENDANCES              //
        //---------------------------------------------------//
        // -- ETBALISSEMENT --
        $etablissements = [
            [
                "nom"=>"Bloom bar",
                "adresse"=>"1 rue de la paix",
                "type_etablissement_id"=>TypeEtablissement::where("nom","bar")->first()->id
            ],
            [
                "nom"=>"Arena",
                "adresse"=>"1 rue de la paix",
                "type_etablissement_id"=>TypeEtablissement::where("nom","boite de nuit")->first()->id
            ],
        ];
        foreach($etablissements as $val){Etablissement::factory()->create($val);}
        Etablissement::factory(10)->create();
        



        //---------------------------------------------------//
        //            TABLES AVEC 2 DEPENDANCES              //
        //---------------------------------------------------//
        // -- EVENEMENT --
        Evenement::factory(30)->create();


        // -- MODELE CARRE --
        //Chaque etablissement a entre 0 et 5 modeles de carre
        // foreach (Etablissement::all() as $et){
        //     for ($i=0; $i < rand(0,5); $i++) { 
        //         ModeleCarre::factory()->create(["etablissement_id" => $et->id]);
        //     }
        // }
        // !!!!!!!!!!!! Necessite un factory pour ModeleCarre !!!!!!!!!!!!


        // -- TYPE USER --
        $type_users = [
            ["nom"=>"Proprietaire"],
            ["nom"=>"OrganisateurPlus"],
            ["nom"=>"Organisateur"],
        ];
        Etablissement::all()->each(function($etablissement) use ($type_users){
            $etablissement->type_users()->createMany($type_users);
        });



        //---------------------------------------------------//
        //            TABLES AVEC 3 DEPENDANCES              //
        //---------------------------------------------------//
        // -- CARRE --
        $carres = [];
        foreach($carres as $val){Carre::create($val);}


        // -- USER --
        $users = [
            ['prenom' => 'root', 'nom' => 'root', 'email' => 'root@root.root',"password" => bcrypt("root")],
            ['prenom' => 'Nicolas', 'nom' => 'delahaie', 'email' => 'nicolas@gmail.com',"password" => bcrypt("admin")],
            ['prenom' => 'Arthur', 'nom' => 'lemen', 'email' => 'arthur@gmail.com',"password" => bcrypt("admin")],
            ['prenom' => 'Oier', 'nom' => 'cesat', 'email' => 'oier@gmail.com',"password" => bcrypt("admin")],
            ['prenom' => 'Alexandre', 'nom' => 'pascal', 'email' => 'alexandre@gmail.com',"password" => bcrypt("admin")],
            ['prenom' => 'Robin', 'nom' => 'alonzo', 'email' => 'robin@gmail.com',"password" => bcrypt("admin")],
        ];
        foreach($users as $val){User::factory()->create($val);}
        User::factory(10)->create();


        // -- PERMETTRE --
        $permettre = [];
        foreach($permettre as $val){Permettre::create($val);}


        
        
        //---------------------------------------------------//
        //            TABLES AVEC 4 DEPENDANCES              //
        //---------------------------------------------------//
        // -- RESERVATIONS --
        $reservations = [];
        foreach($reservations as $val){Reservations::create($val);}
        



        //---------------------------------------------------//
        //            TABLES AVEC 5 DEPENDANCES              //
        //---------------------------------------------------//
        // -- ACCOMPAGNANT --
        $accompagnants = [];
        foreach($accompagnants as $val){Accompagnant::create($val);}
    }
}
