import React, { useState, useRef, useEffect } from 'react';

const VikingPlayer = ({ src, autoPlay = false }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");
    const [isBlocked, setIsBlocked] = useState(false); // Nouveau state pour détecter le blocage

    // Gestion de l'Autoplay
    useEffect(() => {
        if (autoPlay && audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Succès : Le navigateur a autorisé l'autoplay
                        setIsPlaying(true);
                        setIsBlocked(false);
                    })
                    .catch(error => {
                        // Échec : Le navigateur a bloqué l'autoplay
                        console.log("Autoplay bloqué (interaction requise)");
                        setIsPlaying(false);
                        setIsBlocked(true); // On signale qu'il faut une action manuelle
                    });
            }
        }
    }, [autoPlay, src]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setIsBlocked(false); // Si l'utilisateur clique, le blocage saute
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;
        
        if (total) {
            setProgress((current / total) * 100);
            setCurrentTime(formatTime(current));
            setDuration(formatTime(total));
        }
    };

    const handleSeek = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        if (duration) {
            audioRef.current.currentTime = (clickX / width) * duration;
        }
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? '0' + sec : sec}`;
    };

    // Visualiseur animé
    const bars = Array.from({ length: 30 }).map((_, i) => (
        <div 
            key={i} 
            className={`w-1 mx-[1px] rounded-t transition-all duration-300 ${isPlaying ? 'bg-viking-gold animate-bar' : 'bg-stone-700 h-1'}`}
            style={{ 
                animationDuration: `${Math.random() * 0.5 + 0.4}s`,
                height: isPlaying ? '100%' : '10%' 
            }}
        ></div>
    ));

    return (
        <div className="w-full max-w-2xl mx-auto my-8 bg-black/80 border border-viking-gold/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-sm relative overflow-hidden">
            
            {/* Message si bloqué */}
            {isBlocked && (
                <div className="absolute inset-0 bg-black/80 z-20 flex items-center justify-center animate-fade-in">
                    <button 
                        onClick={togglePlay}
                        className="px-6 py-3 bg-viking-gold text-black font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    >
                        🔊 Activer l'Ambiance Sonore
                    </button>
                </div>
            )}

            <audio 
                ref={audioRef} 
                src={src} 
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onLoadedMetadata={(e) => setDuration(formatTime(e.target.duration))} // Charge la durée dès le début
            />

            <div className="flex items-center gap-6 relative z-10">
                {/* Bouton Play/Pause */}
                <button 
                    onClick={togglePlay}
                    className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-viking-gold transition-all duration-300 ${isPlaying ? 'bg-viking-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'text-viking-gold hover:bg-viking-gold/20'}`}
                >
                    {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> 
                    ) : (
                        <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                    )}
                </button>

                {/* Info & Visualiseur */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-[10px] text-viking-gold font-mono mb-2 uppercase tracking-widest opacity-80">
                        <span>{currentTime}</span>
                        <span>{isPlaying ? "Lecture..." : "Pause"}</span>
                        <span>{duration}</span>
                    </div>

                    {/* Zone Visualiseur */}
                    <div className="h-10 flex items-end justify-center mb-3 overflow-hidden opacity-80">
                        {bars}
                    </div>

                    {/* Barre de progression */}
                    <div 
                        className="h-1.5 bg-stone-800 rounded-full cursor-pointer relative group"
                        onClick={handleSeek}
                    >
                        <div 
                            className="h-full bg-viking-gold rounded-full relative transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow scale-0 group-hover:scale-100 transition-all"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VikingPlayer;