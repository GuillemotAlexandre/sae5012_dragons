    # 🐉 Projet SAE 5012 - Dragons

    Ce projet est une application Symfony pour la gestion d'une guilde de dragons.

    ## 🚀 Installation de zéro

    ### 1. Cloner le projet
    ```bash
    git clone -b branche-Alex https://github.com/GuillemotAlexandre/sae5012_dragons.git

    cd sae5012_dragons

    composer install

    php bin/console doctrine:database:create

    php bin/console make:migration

    php bin/console doctrine:migrations:migrate --no-interaction

    php bin/console doctrine:fixtures:load --no-interaction

    Remove-Item -Recurse -Force node_modules

    Remove-Item package-lock.json

    npm cache clean --force

    npm install --legacy-peer-deps

    créer le dossier jwt dans le dossier config

    C:\xampp\apache\bin\openssl.exe genrsa -out config/jwt/private.pem -aes256 4096

    il va vous demander de choisir un mot de passe et de le verifier
    mot de passe = 1234

    C:\xampp\apache\bin\openssl.exe rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
    même chose mais sans verification

    php -S localhost:8000 -t public

    npm run watch




    csv dans publique/data/stat

