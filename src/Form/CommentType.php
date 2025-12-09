<?php

namespace App\Form;

use App\Entity\Comment;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'w-full bg-slate-800 border border-slate-600 rounded p-3 text-slate-200 focus:ring-2 focus:ring-red-500 mb-2',
                    'placeholder' => 'Partagez votre opinion draconique...',
                    'rows' => 3
                ]
            ])
            // Ce champ permet de stocker l'ID du commentaire parent (pour les réponses)
            ->add('parentid', HiddenType::class, [
                'mapped' => false,
                'required' => false
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => ['class' => 'bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded text-sm transition']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
