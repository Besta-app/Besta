<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeEvenement extends Model
{
    use HasFactory;
    protected $table = 'type_evenements';
    protected $fillable = [
        // Pas compris l interet de mettre les attributs
        // Le faire vraiment si besoins
    ];
}
