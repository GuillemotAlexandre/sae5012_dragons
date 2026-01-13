import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; // 👈 Ajoute useThree
// import { useGLTF, useAnimations, Center, Html, useTexture } from '@react-three/drei';
import { useGLTF, useAnimations, Center, Html, useTexture, Stars } from '@react-three/drei';

const MODEL_PATH = '/models/night_fury.glb';
const TEXTURE_PATH = '/textures/night_fury_skin.webp';
const ANIMATION_NAME = 'NightFury_armatureAction';

function DragonModel(props) {
  const { scene, animations } = useGLTF(MODEL_PATH);
  const texture = useTexture(TEXTURE_PATH);
  
  // Pour rendre le dragon responsive (Calcul automatique)
  const { viewport } = useThree(); 
  
  // 🧠 LE CALCUL INTELLIGENT :
  // Si l'écran est petit (mobile), on réduit l'échelle.
  // viewport.width est la largeur de la scène en unités 3D.
  const echelleResponsive = viewport.width < 5 ? 0.5 : 0.8; 

  texture.flipY = false;
  texture.colorSpace = 'srgb';

  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  useEffect(() => {
    if (actions && actions[ANIMATION_NAME]) {
        const action = actions[ANIMATION_NAME];
        action.reset().fadeIn(0.5).play();
        action.timeScale = 2.5;
        setIsPlaying(true);
    }
  }, [actions]);

  const toggleAnimation = (e) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer'; 
    const action = actions[ANIMATION_NAME];
    if (!action) return;
    if (isPlaying) action.fadeOut(0.5);
    else { action.reset().fadeIn(0.5).play(); action.timeScale = 1.5; }
    setIsPlaying(!isPlaying);
  };

  useFrame(() => {
    if(group.current) group.current.rotation.y += 0.005;
  });

  return (
    <primitive 
      ref={group} 
      object={scene} 
      onClick={toggleAnimation}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      
      // 👇 On applique l'échelle calculée ici
      scale={echelleResponsive} 
      
      // 👇 On force X à 0 pour le centrage horizontal absolu
      // [X=0, Y=-1 (pour baisser un peu), Z=0]
      position={[0, 0.5, 0]} 
      
      {...props} 
    />
  );
}

const NightFuryScene = () => {
  return (
    <div className="h-full w-full">
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
        
        {/* 🌑 1. FOND DE NUIT PROFONDE */}
        {/* On remplace le gris par un bleu nuit très sombre */}
        <color attach="background" args={['#050510']} />

        {/* ✨ 2. CIEL ÉTOILÉ */}
        <Stars 
          radius={100} // Rayon de la sphère d'étoiles
          depth={50}   // Profondeur perçue
          count={5000} // Nombre d'étoiles
          factor={4}   // Taille des étoiles
          saturation={0} // 0 = blanc, 1 = coloré
          fade         // Les étoiles disparaissent aux bords (effet réaliste)
          speed={1}    // Vitesse de scintillement
        />

        {/* Lumières (on garde tes réglages boostés) */}
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={4} />
        <spotLight position={[-5, 5, 10]} intensity={5} color="#a855f7" />
        <spotLight position={[0, 5, -10]} intensity={5} color="#ffffff" />

        <Suspense fallback={<Html center><div className="text-white animate-pulse">Invocation...</div></Html>}>
          <Center top>
            <DragonModel scale={1.25} />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload(MODEL_PATH);
useTexture.preload(TEXTURE_PATH);

export default NightFuryScene;