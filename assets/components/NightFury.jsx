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
  const baseScale = viewport.width < 5 ? 0.35 : 0.8; 
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
      scale={finalScale} 
      position={[0, -1, 0]} 
      {...props} 
    />
  );
}

const NightFuryScene = () => {
  const [rotSpeed, setRotSpeed] = useState(0.001);
  const [animSpeed, setAnimSpeed] = useState(2.5);
  const [sizeFactor, setSizeFactor] = useState(1); 
  const [controlsVisible, setControlsVisible] = useState(false);

  const handleReset = () => {
    setRotSpeed(0.001);
    setAnimSpeed(2.5);
    setSizeFactor(1);
  };

  return (
    <div className="h-full w-full relative overflow-hidden bg-[#050510]">
      
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={4} />
        <spotLight position={[-5, 5, 10]} intensity={5} color="#a855f7" />
        <spotLight position={[0, 5, -10]} intensity={5} color="#ffffff" />

        <Suspense fallback={<Html center><div className="text-white text-xs animate-pulse">Invocation...</div></Html>}>
          <Center top>
            <DragonModel 
                vitesseRotation={rotSpeed} 
                vitesseAnimation={animSpeed}
                facteurTaille={sizeFactor} 
            />
          </Center>
        </Suspense>
      </Canvas>

      <button 
        onClick={() => setControlsVisible(!controlsVisible)}
        className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur text-viking-gold p-3 rounded-full border border-viking-gold/30 md:hidden shadow-lg active:scale-95 transition-transform"
      >
        {controlsVisible ? '✕' : '⚙️'}
      </button>

      <div className={`
        absolute z-10 bg-black/80 backdrop-blur-md text-white border border-blue-500/30 shadow-2xl transition-all duration-300 ease-in-out
        
        /* Styles Mobile (Bottom Sheet) */
        bottom-0 left-0 w-full rounded-t-2xl p-6 pb-8
        ${controlsVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}

        /* Styles Desktop (Floating Box) */
        md:bottom-auto md:left-auto md:top-4 md:right-4 md:w-64 md:rounded-xl md:p-4 md:pb-4
        md:translate-y-0 md:opacity-100 md:pointer-events-auto
      `}>
        
        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <h3 className="text-blue-300 font-bold text-sm uppercase tracking-wider">
                Paramètres
            </h3>
            <button 
                onClick={handleReset}
                className="text-[10px] text-stone-400 hover:text-white uppercase font-bold underline decoration-dotted"
            >
                Reset
            </button>
        </div>

        <div className="space-y-4">

            <div>
                <div className="flex justify-between text-xs mb-1 text-stone-300">
                    <span>Taille</span>
                    <span className="text-green-400 font-mono">x{sizeFactor.toFixed(1)}</span>
                </div>
                <input 
                    type="range" min="0.1" max="3" step="0.1" 
                    value={sizeFactor} onChange={(e) => setSizeFactor(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
            </div>

            {/* 2. Rotation */}
            <div>
                <div className="flex justify-between text-xs mb-1 text-stone-300">
                    <span>Vitesse Rotation</span>
                    <span className="text-blue-400 font-mono">{(rotSpeed * 1000).toFixed(0)}</span>
                </div>
                <input 
                    type="range" min="0" max="0.05" step="0.001" 
                    value={rotSpeed} onChange={(e) => setRotSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
            </div>

            {/* 3. Animation */}
            <div>
                <div className="flex justify-between text-xs mb-1 text-stone-300">
                    <span>Vitesse Animation</span>
                    <span className="text-purple-400 font-mono">x{animSpeed.toFixed(1)}</span>
                </div>
                <input 
                    type="range" min="0" max="5" step="0.1" 
                    value={animSpeed} onChange={(e) => setAnimSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
            </div>
        </div>
      </div>

    </div>
  );
};

useGLTF.preload(MODEL_PATH);
useTexture.preload(TEXTURE_PATH);

export default NightFuryScene;