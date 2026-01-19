import React from "react";
import { Link } from "react-router-dom";
import NightFuryScene from "../components/NightFury";

const HomePage = () => {
    return (
        // AJOUT : px-4 pour éviter que le contenu touche les bords sur mobile
        // MODIF : py-8 sur mobile, py-16 sur ordinateur
        <div className="text-center py-8 md:py-16 px-4 animate-fade-in-up">
            
            {/* MODIF : Taille du texte progressive (4xl -> 6xl -> 8xl) */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-6 md:mb-8 drop-shadow-sm leading-tight">
                Bienvenue dans l'Antre
            </h1>

            <div className="w-16 md:w-24 h-1 bg-viking-red mx-auto mb-6 md:mb-8 rounded-full shadow-[0_0_10px_#dc2626]"></div>

            {/* MODIF : Taille du texte plus lisible sur mobile (text-base -> text-2xl) */}
            <p className="text-base sm:text-lg md:text-2xl text-viking-light mb-8 md:mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed px-2">
                "Ça, c'est Beurk. À douze jours au nord du Désespoir, et
                quelques degrés au sud d'un Froid-de-canard. Ancré solidement
                sur le Méridien de la Misère. Mon village... En un mot, balaise.
                Et sept générations y ont déjà vu le jour, pourtant, toutes les
                maisons sont neuves. Beurk : sa pêche, sa chasse, et ses
                merveilleux couchers de soleil. La seule fausse note c'est les
                bestioles. Ailleurs, les gens ont des souris ou des moustiques.
                Nous on a des... dragons."
            </p>

            <div className="bg-stone-800 rounded-2xl border-4 border-stone-700 shadow-2xl overflow-hidden mb-8 md:mb-12">
                {/* MODIF : Hauteur adaptative ! 
                    300px sur mobile (h-[300px])
                    400px sur tablette (sm:h-[400px])
                    600px sur ordinateur (lg:h-[600px]) 
                */}
                <div className="h-[300px] sm:h-[400px] lg:h-[600px] w-full relative bg-black rounded-xl overflow-hidden">
                    <NightFuryScene />

                    <div className="absolute bottom-4 left-0 w-full text-center text-xs md:text-sm text-gray-400 pointer-events-none z-10 px-4">
                        Cliquez sur le dragon (ou touchez-le)
                    </div>
                </div>
            </div>

            {/* MODIF : flex-col pour empiler les boutons sur mobile, flex-row sur ordi */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none mx-auto">
                <Link
                    to="/forum"
                    // MODIF : w-full sur mobile pour faciliter le clic, w-auto sur ordi
                    className="group relative w-full md:w-auto px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-lg md:text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] active:scale-95"
                >
                    <span className="relative z-10">Accéder au Forum</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>

                <Link
                    to="/statistique"
                    // MODIF : w-full sur mobile
                    className="w-full md:w-auto px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-lg md:text-xl rounded-lg transition-all shadow-lg active:scale-95"
                >
                    Voir les Stats
                </Link>
            </div>
        </div>
    );
};

export default HomePage;