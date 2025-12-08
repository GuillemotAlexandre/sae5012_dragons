<?php

namespace App\Form;

use App\Entity\Bloc;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType; // 👈 Import pour l'upload
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File; // 👈 Import pour valider le fichier

class BlocType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices'  => [
                    'Titre (H2)' => 'title_h2',
                    'Paragraphe' => 'text',
                    'Image (Upload)' => 'image', // On change le nom pour être clair
                    'Visualisation' => 'viz',
                ],
                'label' => 'Type de contenu',
                'attr' => [
                    'class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full mb-2 js-type-selector' // 👈 Classe JS ajoutée
                ]
            ])
            ->add('title', TextType::class, [
                'required' => false,
                'label' => 'Titre ou Légende',
                'attr' => ['class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full mb-2', 'placeholder' => 'Titre du paragraphe ou légende de l\'image']
            ])
            ->add('content', TextareaType::class, [
                'required' => false,
                'label' => 'Contenu texte',
                'attr' => [
                    'class' => 'bg-slate-900 border border-slate-600 rounded p-2 text-white w-full h-32 mb-2 js-content-field', // 👈 Classe JS ajoutée
                    'placeholder' => 'Votre texte ici...'
                ]
            ])
            // 👇 NOUVEAU CHAMP FICHIER 👇
            ->add('imageFile', FileType::class, [
                'label' => 'Fichier Image',
                'mapped' => false, // Ce champ n'est pas dans l'entité Bloc
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => ['image/jpeg', 'image/png', 'image/webp'],
                        'mimeTypesMessage' => 'Veuillez uploader une image valide (JPG, PNG, WEBP)',
                    ])
                ],
                'attr' => [
                    'class' => 'bg-slate-900 text-white w-full mb-2 border border-slate-600 rounded p-1 js-image-field hidden', // 👈 Caché par défaut (hidden)
                    'accept' => 'image/*'
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