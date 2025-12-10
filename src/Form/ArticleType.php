<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType; // 👈 Import nécessaire
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre du récit',
                'attr' => ['class' => 'w-full bg-slate-900 border border-slate-600 rounded p-2 text-white mb-4']
            ])
            ->add('summary', TextareaType::class, [
                'label' => 'Résumé court',
                'attr' => ['class' => 'w-full bg-slate-900 border border-slate-600 rounded p-2 text-white h-24 mb-4']
            ])
            // 👇 NOUVEAU : SÉLECTEUR DE MUSIQUE 👇
            ->add('music', ChoiceType::class, [
                'label' => 'Musique d\'ambiance',
                'required' => false,
                'placeholder' => 'Aucune musique (Silence)',
                // La clé est le texte affiché, la valeur est le chemin du fichier (relatif au dossier public/musique/)
                'choices' => [
                    '-- Dragons 1 --' => [
                        'This is Berk' => 'film1/01.This_Is_Berk.mp3',
                        'Dragon Battle' => 'film1/02.Dragon_Battle.mp3',
                        'The Downed Dragon' => 'film1/03.The_Downed_Dragon.mp3',
                        'Dragon Training' => 'film1/04.Dragon_Training.mp3',
                        'Wounded' => 'film1/05.Wounded.mp3',
                        'The Dragon Book' => 'film1/06.The_Dragon_Book.mp3',
                        'Focus' => 'film1/07.Focus.mp3',
                        'Forbiden Friendship' => 'film1/08.Forbidden_Friendship.mp3',
                        'New Tail' => 'film1/09.New_Tail.mp3',
                        'Test Drive' => 'film1/11.Test_Drive.mp3',
                        'Not So Fireproof' => 'film1/12.Not_So_Fireproof.mp3',
                        'This Time for Sure' => 'film1/13.This_Time_For_Sure.mp3',
                        'Astrid Goes For A Spin' => 'film1/14.Astrid_Goes_For_A_Spin.mp3',
                        'Romantic Flight' => 'film1/15.Romantic_Flight.mp3',
                        'Dragon\s Den' => 'film1/16.Dragons_Den.mp3',
                        'The Cove' => 'film1/17.The_Cove.mp3',
                        'The Kill Ring' => 'film1/18.The_Kill_Ring.mp3',
                        'Ready The Ship' => 'film1/19.Ready_The_Ship.mp3',
                        'Battling The Green Death' => 'film1/20.Battling_The_Green_Death.mp3',
                        'Counter Attack' => 'film1/21.Counter_Attack.mp3',
                        'Wheres Hiccup' => 'film1/22.Wheres_Hiccup.mp3',
                        'Coming Back Around' => 'film1/23.Coming_Back_Around.mp3',
                        'The Vikings Have Their Tea' => 'film1/24.The_Vikings_Have_Their_Tea.mp3',
                        

                    ],
                    '-- Dragons 2 --' => [
                        'Where No One Goes' => 'film2/where_no_one_goes.mp3',
                        'Flying With Mother' => 'film2/flying_with_mother.mp3',
                        'Stoick\'s Ship' => 'film2/stoicks_ship.mp3',
                    ],
                    '-- Dragons 3 --' => [
                        'The Hidden World' => 'film3/hidden_world.mp3',
                        'Together From Afar' => 'film3/together_from_afar.mp3',
                    ]
                ],
                'attr' => ['class' => 'w-full bg-slate-900 border border-slate-600 rounded p-2 text-white mb-4']
            ])
            ->add('blocs', CollectionType::class, [
                'entry_type' => BlocType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'label' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}