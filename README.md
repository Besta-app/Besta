> Projet étudiant Besta, continué en duo avec Oier Cesat lors de notre stage de fin d'année au Canada.  
> Découverte du framework en parallèle au stage, qui nous a permit de continuer notre projet étudiant sur un framework performant et avec la liberté qu'on désirait.

# Arborescence

**laravel** : Contient les APIS pour Laravel  
**react** : Contient le projet React  
**docs** : Contient la documentation (Diagrammes des cas d'utilisation...)

# Installation

**React** : Se mettre dans le dossier react puis entrer "npm install" pour télécharger les dépendances  
**Laravel** : Se mettre dans le dossier laravel puis faire "composer install"

# Lancement serveur

## React

`npm start`

## Laravel

- `docker-compose up -d` à la racine du projet
- `php artisan migrate` dans le dossier laravel
- `php artisan db:seed`
- `php artisan serve`

Les données de la base sont visibles grace à PhpMyAdmin.
