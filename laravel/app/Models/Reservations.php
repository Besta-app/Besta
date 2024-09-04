<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservations extends Model
{
    use HasFactory;
    protected $table = 'reservations';
    protected $fillable = [
        // Pas compris l interet de mettre les attributs
        // Le faire vraiment si besoins
    ];
}
