import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="text-center py-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-8 drop-shadow-sm">
                Bienvenue dans l'Antre
            </h1>
            
            <div className="w-24 h-1 bg-viking-red mx-auto mb-8 rounded-full shadow-[0_0_10px_#dc2626]"></div>

            <p className="text-2xl text-viking-light mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed">
                "Là où les cartes s'arrêtent, l'aventure commence. Explorez les légendes, partagez vos découvertes et analysez les données de l'archipel de Berk."
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link to="/forum" className="group relative px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <span className="relative z-10">Accéder au Forum</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                
                <Link to="/statistique" className="px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-xl rounded-lg transition-all shadow-lg">
                    Voir les Stats
                </Link>
            </div>
        </div>
    );
};

export default HomePage;