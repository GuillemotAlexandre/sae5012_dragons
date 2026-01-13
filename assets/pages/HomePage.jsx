<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import NightFuryScene from "../components/NightFury";
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad

const HomePage = () => {
    return (
        <div className="text-center py-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-8 drop-shadow-sm">
                Bienvenue dans l'Antre
            </h1>
<<<<<<< HEAD

            <div className="w-24 h-1 bg-viking-red mx-auto mb-8 rounded-full shadow-[0_0_10px_#dc2626]"></div>

            <p className="text-2xl text-viking-light mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed">
                "Ça, c'est Beurk. À douze jours au nord du Désespoir, et
                quelques degrés au sud d'un Froid-de-canard. Ancré solidement
                sur le Méridien de la Misère. Mon village... En un mot, balaise.
                Et sept générations y ont déjà vu le jour, pourtant, toutes les
                maisons sont neuves. Beurk : sa pêche, sa chasse, et ses
                merveilleux couchers de soleil. La seule fausse note c'est les
                bestioles. Ailleurs, les gens ont des souris ou des moustiques.
                Nous on a des... dragons."
            </p>

            <div className="bg-stone-800 rounded-2xl border-4 border-stone-700 shadow-2xl overflow-hidden mb-12">
                {/* 👇 C'est ici que la magie opère. La hauteur (h-[600px]) est CRUCIALE */}
                <div className="h-[600px] w-full relative bg-black rounded-xl overflow-hidden">
                    <NightFuryScene />

                    <div className="absolute bottom-4 left-0 w-full text-center text-sm text-gray-400 pointer-events-none z-10">
                        Cliquez sur le dragon
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link
                    to="/forum"
                    className="group relative px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                >
                    <span className="relative z-10">Accéder au Forum</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>

                <Link
                    to="/statistique"
                    className="px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-xl rounded-lg transition-all shadow-lg"
                >
=======
            
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
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
                    Voir les Stats
                </Link>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default HomePage;
=======
export default HomePage;
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
