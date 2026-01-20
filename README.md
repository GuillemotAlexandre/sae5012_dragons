# 🐉 Riders of Berk - SAE 5012

Bienvenue sur **Riders of Berk**, une application Web Fullstack immersive dédiée à la gestion d'une guilde de dragons. Ce projet a été réalisé dans le cadre de la SAE 5012 (MMI).

L'application permet de gérer des dragons, des utilisateurs (Guerriers, Fournisseurs, Designers) et de publier des chroniques, le tout avec une interface React animée et une API Symfony robuste.

## 🛠️ Stack Technique

* **Backend :** Symfony 6, API Platform, Doctrine ORM, JWT Authentication.
* **Frontend :** React.js, Tailwind CSS, React-Three-Fiber (3D).
* **Base de données :** MySQL / MariaDB.
* **Outils :** Webpack Encore, Git.

---

## 🚀 Installation de zéro

Suivez ces étapes scrupuleusement pour installer le projet sur votre machine (Windows).

### 1. Récupération du projet
Clonez la branche finale du projet :


git clone -b branche-Alex https://github.com/GuillemotAlexandre/sae5012_dragons.git

cd sae5012_dragons

# 1. Installer les paquets PHP
composer install

# 2. Créer la base de données
php bin/console doctrine:database:create

# 3. Créer la structure des tables (migration)
php bin/console make:migration
php bin/console doctrine:migrations:migrate --no-interaction

# 4. Charger les fausses données (Fixtures)
php bin/console doctrine:fixtures:load --no-interaction

mkdir config\jwt

C:\xampp\apache\bin\openssl.exe genrsa -out config/jwt/private.pem -aes256 4096

C:\xampp\apache\bin\openssl.exe rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem

JWT_PASSPHRASE=1234

# Nettoyage des anciens fichiers
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm cache clean --force

# Installation des dépendances (avec mode compatibilité)
npm install --legacy-peer-deps

php -S localhost:8000 -t public

npm run watch



## 📡 Documentation de l'API

L'API est documentée interactivement via **Swagger UI**.
🔹 **Accès direct :** [http://localhost:8000/api](http://localhost:8000/api)

L'API utilise le format standard **JSON-LD** / **Hydra**. Voici les principaux points d'entrée disponibles :

### 🔐 Authentification & Sécurité
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/login_check` | Vérifie les identifiants et retourne un **Token JWT** (Bearer). |

### 🐉 Le Bestiaire (Dragons)
| Ressource | Méthodes | Description |
| :--- | :--- | :--- |
| **Dragons** | `GET`, `POST`, `PATCH`, `DELETE` | Gestion complète des fiches de dragons (Stats, Lore, Configuration 3D). |
| **Ratings** | `GET`, `POST` | Système de notation des dragons par les utilisateurs. |

### 📚 Blog & Contenu (CMS)
| Ressource | Méthodes | Description |
| :--- | :--- | :--- |
| **Articles** | `GET`, `POST`, `PUT`, `DELETE` | Gestion des chroniques et articles de blog. |
| **Themes** | `CRUD Complète` | Catégories/Thèmes associés aux articles. |
| **Blocs** | `CRUD Complète` | Blocs de contenu modulaire pour la construction des pages. |
| **Comments** | `GET`, `POST` | Gestion des commentaires sous les articles (liaison via `/api/articles/{id}/comments`). |

### 👥 Administration & Données
| Ressource | Méthodes | Description |
| :--- | :--- | :--- |
| **Users** | `GET`, `PUT`, `DELETE` | Gestion des comptes utilisateurs et attribution des rôles (`ROLE_ADMIN`, `ROLE_PROVIDER`, etc.). |
| **Datasets** | `CRUD Complète` | Upload et gestion des fichiers CSV pour l'analyse de données (Espace Fournisseur). |






utilisateur : 

admin@admin.fr

auteur@berk.fr

designer@berk.fr

editeur@berk.fr

scribe@berk.fr

user@berk.fr

mot de passe pour tous les utilisateur :
1234
