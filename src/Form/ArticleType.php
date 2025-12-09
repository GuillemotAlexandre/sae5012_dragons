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
                        'This is Berk' => 'film1/01.This Is Berk How to Train Your Dragon OST.mp3',
                        'Test Drive' => 'film1/test_drive.mp3',
                        'Romantic Flight' => 'film1/romantic_flight.mp3',
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