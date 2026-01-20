import React, { useRef, useState, useEffect } from 'react';

const MusicPlayer = ({ musicPath }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration) setProgress((current / duration) * 100);
    };

  
    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    }, [musicPath]);

    if (!musicPath) return null;

    return (

        <div className="bg-viking-rock border-2 border-viking-gold/50 rounded-xl p-3 md:p-4 mb-6 md:mb-8 shadow-xl relative overflow-hidden group w-full">
 
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-viking-red rounded-full blur-[60px] md:blur-[80px] opacity-20 pointer-events-none"></div>
            
      
            <div className="relative z-10 flex items-center gap-4 md:gap-6">
                
              
                <button 
                    onClick={togglePlay} 
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-viking-fire to-red-800 hover:scale-105 transition flex items-center justify-center shadow-lg border border-viking-gold active:scale-95"
                >
                    {isPlaying ? (
                        <span className="text-xl md:text-2xl text-white">❚❚</span>
                    ) : (
                        <span className="text-xl md:text-2xl text-white ml-1">▶</span>
                    )}
                </button>

                <div className="flex-1 min-w-0"> 
              
                    <h4 className="text-viking-gold font-dragon text-base md:text-lg truncate">Ambiance Draconique</h4>
                    <div className="relative w-full h-2 bg-stone-700 rounded-full mt-2 overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-viking-fire rounded-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>

            <audio 
                ref={audioRef} 
                src={`/musique/${musicPath}`} 
                onTimeUpdate={handleTimeUpdate} 
                loop
            />
        </div>
    );
};

export default MusicPlayer;