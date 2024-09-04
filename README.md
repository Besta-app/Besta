# Arborescence

**laravel** : Contient les APIS pour Laravel
**react** : Contient le projet React
**docs** : Contient la documentation (Diagrammes des cas d'utilisation...)

# Mise en place

## Installation

**React** : Se mettre dans le dossier react puis entrer "npm install" pour télécharger les dépendances
**Laravel** : Se mettre dans le dossier laravel puis faire "composer install"

## Lancement serveur

### React

npm start

### Laravel

- docker-compose up -d (à la racine du projet)
- php artisan migrate (dans laravel/)
- php artisan db:seed
- php artisan serve

Les données de la base sont visibles grace à PhpMyAdmin.
