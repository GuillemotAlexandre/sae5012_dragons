<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $usersData = [
            ['email' => 'admin@admin.fr', 'roles' => ['ROLE_ADMIN'], 'pseudo' => 'admin'],
            ['email' => 'designer@berk.fr', 'roles' => ['ROLE_DESIGNER'], 'pseudo' => 'artisan'],
            ['email' => 'auteur@berk.fr', 'roles' => ['ROLE_AUTEUR'], 'pseudo' => 'testalex'],
            ['email' => 'editeur@berk.fr', 'roles' => ['ROLE_EDITEUR'], 'pseudo' => 'editeur'],
            ['email' => 'scribe@berk.fr', 'roles' => ['ROLE_FOURNISSEUR'], 'pseudo' => 'the scribe'],
            ['email' => 'user@berk.fr', 'roles' => ['ROLE_USER'], 'pseudo' => 'ldkjfng'],
        ];

        foreach ($usersData as $data) {
            $user = new User();
            $user->setEmail($data['email']);
            $user->setRoles($data['roles']);
            $user->setPseudo($data['pseudo']);
            
            // On hache le mot de passe "1234" pour qu'il soit sécurisé
            $user->setPassword($this->passwordHasher->hashPassword($user, '1234'));

            $manager->persist($user);
        }

        $manager->flush();
    }
}