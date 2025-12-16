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
                        'Dragon Racing' => 'film2/01.Dragon_Racing.mp3',
                        'Together, we map the world' => 'film2/02.Together,we_Map_the_World.mp3',
                        'Hiccup, the chief' => 'film2/03.Hiccup;the_Chief.mp3',
                        'Should i know you' => 'film2/04.Should_I_Know_you.mp3',
                        'Valkas_Dragon_Sanctuary' => 'film2/06.Valkas_Dragon_Sanctuary.mp3',
                        'Losing mom' => 'film2/07.Losing_Mom.mp3',
                        'Meet Drago' => 'film2/08.Meet_Drago.mp3',
                        'Stoick finds Beauty' => 'film2/09.Stoick_finds_Beauty.mp3',
                        'Flying with Mother' => 'film2/10.Flying_with_Mother.mp3',
                        'For the dancing and the dreaming' => 'film2/11.For_the_Dancing_and_the_Dreaming.mp3',
                        'Battle of the bewilderbeast' => 'film2/12.Battle_of_the_Bewilderbeast.mp3',
                        'Hiccup confronts Drago' => 'film2/13.Hiccup_Confronts_Drago.mp3',
                        'Stoick saves Hiccup' => 'film2/14.Stoick_Saves_Hiccup.mp3',
                        'Stoicks ship' => 'film2/15.Stoicks_Ship.mp3',
                        'Alpha comes to Berk' => 'film2/16.Alpha_comes_to_Berk.mp3',
                        'Toothless Found' => 'film2/17.Toothless_Found.mp3',
                        'Two new alphas' => 'film2/18.Two_New_Alphas.mp3',
                        'Where no one goes' => 'film2/19.Where_No_one_Goes.mp3',
                        'Hiccup rescues stormfly' => 'film2/22.Hiccup_Rescues_Stormfly.mp3',
                        'Dragos coming!' => 'film2/23.Dragos_Coming!.mp3',
                        'Attacking Eret' => 'film2/24.Attacking_Eret.mp3',
                        'Astrid captures Eret' => 'film2/26.Astrid_Captures_Eret.mp3',
                        'Hiccup and Valka' => 'film2/27.Hiccup_and_Valka.mp3',
                        'Escape from Drago' => 'film2/28.Escape_from_Drago.mp3',
                        'the ride of the hatchlings' => 'film2/29.the_Ride_of_the_Hatchlings.mp3',
                    ],
                    '-- Dragons 3 --' => [
                        'Armada Battle' => 'film3/Armada_Battle.mp3',
                        'As long as hes safe' => 'film3/As_Long_As_Hes_Safe.mp3',
                        'Dinner talk Grimmels introduction' => 'film3/Dinner_TalkGrimmels_Introduction.mp3',
                        'Furies in love' => 'film3/Furies_In_Love.mp3',
                        'Killer Dragons' => 'film3/Killer_Dragons.mp3',
                        'Legend has it cliddside playtime' => 'film3/Legend_Has_ItCliddside_Playtime.mp3',
                        'New new tail' => 'film3/New_New_Tail.mp3',
                        'Night fury killer' => 'film3/Night_Fury_Killer.mp3',
                        'Once there where dragons' => 'film3/Once_There_Were_Dragons.mp3',
                        'Raiders return to busy, busy Berk' => 'film3/Raiders_Return_To_Busy,Busy_Berk.mp3',
                        'The hidden world' => 'film3/The_Hidden_World.mp3',
                        'The hidden world suite' => 'film3/The_Hidden_World_Suite.mp3',
                        'Toothless smitten' => 'film3/Toothless_Smitten.mp3',
                        'With love comes a great waterwall' => 'film3/With_Love_Comes_a_Great_Waterwall.mp3',
                        'Worst pep talk ever' => 'film3/Worst_Pep_Talk_Ever.mp3',
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