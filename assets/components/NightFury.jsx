import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, Center, Html, useTexture, Stars } from '@react-three/drei';

const MODEL_PATH = '/models/night_fury.glb';
const TEXTURE_PATH = '/textures/night_fury_skin.webp';
const ANIMATION_NAME = 'NightFury_armatureAction';

function DragonModel({ vitesseRotation, vitesseAnimation, facteurTaille, ...props }) {
  const { scene, animations } = useGLTF(MODEL_PATH);
  const texture = useTexture(TEXTURE_PATH);
  const { viewport } = useThree(); 
  
  // Calcul de base responsive
  const baseScale = viewport.width < 5 ? 0.5 : 0.8; 
  // 📏 CALCUL FINAL : Taille de base x Le curseur de l'utilisateur
  const finalScale = baseScale * facteurTaille;

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
        setIsPlaying(true);
    }
  }, [actions]);

  // Mise à jour vitesse animation
  useEffect(() => {
    if (actions && actions[ANIMATION_NAME]) {
        actions[ANIMATION_NAME].timeScale = vitesseAnimation;
    }
  }, [vitesseAnimation, actions]);

  const toggleAnimation = (e) => {
    e.stopPropagation();
    const action = actions[ANIMATION_NAME];
    if (!action) return;

    if (isPlaying) {
        action.paused = true;
    } else {
        action.paused = false;
        action.play(); 
    }
    setIsPlaying(!isPlaying);
  };

  useFrame(() => {
    if(group.current) group.current.rotation.y += vitesseRotation;
  });

  return (
    <primitive 
      ref={group} 
      object={scene} 
      onClick={toggleAnimation}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      
      scale={finalScale} // 👈 On applique la taille dynamique ici
      
      position={[0, 0.5, 0]} 
      {...props} 
    />
  );
}

const NightFuryScene = () => {
  // 🎛️ ÉTATS DU TABLEAU DE BORD
  const [rotSpeed, setRotSpeed] = useState(0.001);
  const [animSpeed, setAnimSpeed] = useState(2.5);
  const [sizeFactor, setSizeFactor] = useState(1); // 1 = taille normale (100%)

  // Fonction pour tout remettre à zéro
  const handleReset = () => {
    setRotSpeed(0.001);
    setAnimSpeed(2.5);
    setSizeFactor(1);
  };

  return (
    <div className="h-full w-full relative">
      
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={4} />
        <spotLight position={[-5, 5, 10]} intensity={5} color="#a855f7" />
        <spotLight position={[0, 5, -10]} intensity={5} color="#ffffff" />

        <Suspense fallback={<Html center><div className="text-white">Invocation...</div></Html>}>
          <Center top>
            <DragonModel 
                vitesseRotation={rotSpeed} 
                vitesseAnimation={animSpeed}
                facteurTaille={sizeFactor} // 👈 On envoie la taille
            />
          </Center>
        </Suspense>
      </Canvas>

      {/* 🎛️ UI PANNEAU DE CONTRÔLE */}
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 text-white w-64 shadow-2xl transition-all hover:bg-black/80">
        <h3 className="text-blue-300 font-bold mb-4 text-center border-b border-white/10 pb-2">
            CONTRÔLES DU DRAGON
        </h3>

        {/* 1. Taille (Zoom) */}
        <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
                <span>Taille</span>
                <span className="text-green-400">x{sizeFactor.toFixed(1)}</span>
            </div>
            <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.1" 
                value={sizeFactor}
                onChange={(e) => setSizeFactor(parseFloat(e.target.value))}
                className="w-full accent-green-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
            />
        </div>

        {/* 2. Rotation */}
        <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
                <span>Rotation</span>
                <span className="text-blue-400">{rotSpeed.toFixed(3)}</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="0.05" 
                step="0.001" 
                value={rotSpeed}
                onChange={(e) => setRotSpeed(parseFloat(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
            />
        </div>

        {/* 3. Vitesse Animation */}
        <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
                <span>Animation</span>
                <span className="text-purple-400">x{animSpeed.toFixed(1)}</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="5" 
                step="0.1" 
                value={animSpeed}
                onChange={(e) => setAnimSpeed(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
            />
        </div>
        
        <button 
            onClick={handleReset}
            className="w-full mt-4 bg-white/10 hover:bg-red-500/50 py-1 rounded text-xs transition-colors border border-white/10"
        >
            Réinitialiser
        </button>
      </div>

    </div>
  );
};

useGLTF.preload(MODEL_PATH);
useTexture.preload(TEXTURE_PATH);

export default NightFuryScene;