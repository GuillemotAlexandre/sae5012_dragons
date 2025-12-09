<?php

namespace App\Form;

use App\Entity\Bloc;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class BlocType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices'  => [
                    'Paragraphe' => 'text',
                    'Titre (H2)' => 'title_h2',
                    'Image (Upload)' => 'image',
                    'Visualisation (CSV)' => 'viz', // 👈 Option Viz
                ],
                'label' => 'Type de contenu',
                'attr' => [
                    'class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full mb-2 js-type-selector'
                ]
            ])
            ->add('title', TextType::class, [
                'required' => false,
                'label' => 'Titre / Légende / Titre du Graphique',
                'attr' => ['class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full mb-2', 'placeholder' => 'Titre...']
            ])
            ->add('content', TextareaType::class, [
                'required' => false,
                'label' => 'Contenu texte',
                'attr' => [
                    'class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full h-32 mb-2 js-content-field',
                    'placeholder' => 'Votre texte ici...'
                ]
            ])
            // CHAMP IMAGE
            ->add('imageFile', FileType::class, [
                'label' => 'Fichier Image (JPG/PNG)',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => ['image/jpeg', 'image/png', 'image/webp'],
                        'mimeTypesMessage' => 'Image invalide',
                    ])
                ],
                'attr' => [
                    'class' => 'bg-slate-900 text-white w-full mb-2 border border-slate-600 rounded p-1 js-image-field hidden',
                    'accept' => 'image/*'
                ]
            ])
            // 👇 NOUVEAU : CHAMP CSV 👇
            ->add('csvFile', FileType::class, [
                'label' => 'Fichier de Données (.csv)',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '2M',
                        'mimeTypes' => ['text/csv', 'text/plain', 'application/csv'],
                        'mimeTypesMessage' => 'Veuillez uploader un fichier CSV valide',
                    ])
                ],
                'attr' => [
                    'class' => 'bg-slate-900 text-white w-full mb-2 border border-slate-600 rounded p-1 js-csv-field hidden',
                    'accept' => '.csv'
                ]
            ])
            // 👇 NOUVEAU : TYPE DE GRAPHIQUE 👇
            ->add('vizType', ChoiceType::class, [
                'mapped' => false, // On concatènera ça dans le contrôleur
                'required' => false,
                'label' => 'Type de Graphique',
                'choices' => [
                    'Diagramme en Barres (Bar)' => 'bar',
                    'Diagramme Circulaire (Pie)' => 'pie',
                    'Courbe (Line)' => 'line',
                    'Radar' => 'radar'
                ],
                'attr' => [
                    'class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full mb-2 js-viz-type-field hidden'
                ]
            ])
            ->add('position', IntegerType::class, [
                'label' => 'Ordre',
                'attr' => ['class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-20 mb-2']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Bloc::class,
        ]);
    }
}