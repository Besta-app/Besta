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
        /**
         * @todo Ajuster les tailles des strings
         * @todo Valeurs par defaut
         * @todo onCascade et onDelete
         * @todo ajouter des checks
         */

        //  ---------- CREATION DES TABLES ----------
        Schema::create("reservations", function(Blueprint $table){
            $table->id();
            $table->string("prenom");
            $table->string("nom");
            $table->string("telephone", 10)->nullable()->required();
            $table->string("email")->nullable()->required();
            $table->timestamps();
            
            $table->unsignedBigInteger("carre_id");
            $table->unsignedBigInteger("evenement_id");
            $table->unique(["carre_id", "evenement_id"]);
        });
        Schema::create("accompagnants", function(Blueprint $table){
            $table->id();
            $table->string("prenom");
            $table->string("nom");
            $table->timestamps();

            $table->unsignedBigInteger("reservation_id");
        });
        Schema::create("carres", function(Blueprint $table){
            $table->id();
            $table->date("date_debut");
            $table->date("date_fin");
            $table->unsignedTinyInteger("capacite");
            $table->string("emplacement");
            $table->string("decription");
            $table->string("produits"); /** @todo lier avec boissons*/ 
            $table->boolean("estPlein");
            $table->timestamps();

            $table->unsignedBigInteger("modele_carre_id"); //Evenement auquel le carré temporaire appartient
        });
        Schema::create("evenements", function(Blueprint $table){
            $table->id();
            $table->string("titre");
            $table->string("description");
            $table->date("date_debut");
            $table->date("date_fin");
            $table->boolean("estPublie");
            $table->timestamps();

            $table->unsignedBigInteger("etablissement_id");
            $table->unsignedBigInteger("type_evenement_id")->default(1);
        });
        Schema::create("type_evenements", function(Blueprint $table){
            $table->id();
            $table->string("nom");
            $table->timestamps();
        });
        Schema::create("modele_carres", function(Blueprint $table){
            $table->id();
            $table->string("emplacement");
            $table->string("capacite");
            $table->string("description");
            $table->string("produits"); /** @todo lier avec boissons*/
            $table->timestamps();

            $table->unsignedBigInteger("etablissement_id");
        });
        Schema::create("etablissements", function(Blueprint $table){
            $table->id();
            $table->string("nom");
            $table->string("adresse");

            $table->unsignedBigInteger("type_etablissement_id");
        });
        Schema::create("users", function(Blueprint $table){
            // ON GARDE "USERS" A LA PLACE DE "EMPLOYERS" car laravel reconnait cette classe par defaut (changer le nom pourrait générer des erreurs débiles)
            $table->id();
            $table->string("nom");
            $table->string("prenom");
            $table->string("email")->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();

            $table->unsignedBigInteger("etablissement_id");
            $table->unsignedBigInteger("type_user_id");
        });
        Schema::create("droit_users", function(Blueprint $table){
            $table->id();
            $table->string("nom");
            $table->string("description")->nullable();
        });
        Schema::create("type_etablissements", function(Blueprint $table){
            $table->id();
            $table->string("nom");
        });
        Schema::create("type_users", function(Blueprint $table){
            $table->id();
            $table->string("nom");

            $table->unsignedBigInteger("etablissement_id");
        });
        Schema::create("permettre", function(Blueprint $table){
            $table->unsignedBigInteger("droit_user_id");
            $table->unsignedBigInteger("type_user_id");
            $table->primary(["droit_user_id", "type_user_id"]);
        });
        
        // ---------- CREATION DES LIAISONS ----------
        Schema::table("reservations", function(Blueprint $table){
            $table->foreign("carre_id")->references("id")->on("carres");
            $table->foreign("evenement_id")->references("id")->on("evenements");
        });
        Schema::table("accompagnants", function(Blueprint $table){
            $table->foreign("reservation_id")->references("id")->on("reservations");
        });
        Schema::table("carres", function(Blueprint $table){
            $table->foreign("modele_carre_id")->references("id")->on("modele_carres");
        });
        Schema::table("evenements", function(Blueprint $table){
            $table->foreign("etablissement_id")->references("id")->on("etablissements");
            $table->foreign("type_evenement_id")->references("id")->on("type_evenements");	
        });
        Schema::table("modele_carres", function(Blueprint $table){
            $table->foreign("etablissement_id")->references("id")->on("etablissements");
        });
        Schema::table("etablissements", function(Blueprint $table){
            $table->foreign("type_etablissement_id")->references("id")->on("type_etablissements");
        });
        Schema::table("users", function(Blueprint $table){
            $table->foreign("type_user_id")->references("id")->on("type_users");
            $table->foreign("etablissement_id")->references("id")->on("etablissements");
        });
        Schema::table("type_users", function(Blueprint $table){
            $table->foreign("etablissement_id")->references("id")->on("etablissements");
        });
        Schema::table("permettre", function(Blueprint $table){
            $table->foreign("droit_user_id")->references("id")->on("droit_users");
            $table->foreign("type_user_id")->references("id")->on("type_users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // DESACTIVATION REFERENCES
        Schema::disableForeignKeyConstraints();

        // SUPPRESSION TABLES CREES
        $nomsTables = array("reservations","accompagnants", "carres", "evenements", "type_evemenents", "modele_carres","etablissements", "users", "droit_users", "type_users", "permettre");
        foreach($nomsTables as $nomTable){Schema::dropIfExists($nomTable);}
    }
};
