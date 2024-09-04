<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etablissement extends Model
{
    use HasFactory;
    public $timestamps = false; //Pour que le seeder sache qu'il ne faut pas l initialiser (meme s il n existe pas)
    protected $table = 'etablissements';
    protected $fillable = [
        // Pas compris l interet de mettre les attributs
        // Le faire vraiment si besoins
    ];

    public function type_users(){
        return $this->hasMany(TypeUser::class, "etablissement_id");
    }
}
