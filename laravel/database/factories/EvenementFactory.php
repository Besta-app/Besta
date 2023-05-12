<?php

namespace Database\Factories;

use Carbo\Carbon; //Pour ajouter des jours à des dates
use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\Etablissement;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evenement>
 */
class EvenementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /**
         * @warning Plusieurs evenements d'un meme etablissement peuvent se chevaucher
         */
        $date_debut = $this->faker->dateTimeBetween('-10 week', '+2 week');
        $date_fin = clone $date_debut;
        $date_fin->modify("+ 3 days");
        

        return [
            "titre" => "Showcase de ".$this->faker->name(),
            "description" => $this->faker->paragraph($nbSentences = 2),
            "date_debut" => $date_debut,
            "date_fin" => $date_fin,
            "estPublie" => $value = rand(0, 1) == 0 ? true : false,
            "etablissement_id" => rand(1, Etablissement::count()),
        ];
    }
}
