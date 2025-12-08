<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType; // 👈 Import important
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
            // 👇 AJOUT DE LA COLLECTION DE BLOCS 👇
            ->add('blocs', CollectionType::class, [
                'entry_type' => BlocType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,    // Permet d'ajouter des blocs
                'allow_delete' => true, // Permet d'en supprimer
                'by_reference' => false, // Obligatoire pour que addBloc() soit appelé dans l'entité
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