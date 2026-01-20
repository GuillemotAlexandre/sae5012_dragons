import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let user = null;

    if (token) {
        try {
            user = jwtDecode(token);
        } catch (e) {
            console.error("Token invalide");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        setIsMenuOpen(false);
    };

    const canSeeDashboard = user?.roles?.includes('ROLE_EDITEUR') || user?.roles?.includes('ROLE_ADMIN');
    const closeMenu = () => setIsMenuOpen(false);

    return (
        // La barre de navigation principale (le bandeau du haut)
        <nav className="bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center relative">
                
                {/* LOGO (Z-50 pour rester au-dessus du menu plein écran) */}
                <Link to="/" className="text-xl md:text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md group z-50 relative" onClick={closeMenu}>
                    <span className="text-2xl md:text-4xl group-hover:scale-110 transition-transform uppercase">Riders of Berk</span> 
                </Link>

                {/* BOUTON BURGER */}
                <button 
                    className="md:hidden text-viking-gold z-50 focus:outline-none relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <span className="text-3xl font-bold">✕</span>
                    ) : (
                        <span className="text-3xl font-bold">☰</span>
                    )}
                </button>

                {/* MENU PRINCIPAL / MOBILE OVERLAY 
                    - fixed inset-0 : Prend TOUT l'écran
                    - bg-stone-900 : Fond NOIR/GRIS OPAQUE (Pas de transparence)
                    - z-40 : Juste sous le logo et le burger
                    - flex-col justify-center : Centre le contenu verticalement sur mobile
                */}
                <div className={`
                    fixed inset-0 z-40 bg-stone-900 
                    flex flex-col justify-center items-center gap-8 
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    
                    md:static md:transform-none md:bg-transparent md:flex-row md:justify-end md:h-auto md:p-0
                `}>
                    
                    {/* LIENS DE NAVIGATION */}
                    <ul className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-6 text-3xl md:text-lg font-dragon tracking-wide text-viking-light uppercase">
                        <li>
                            <Link to="/" className="hover:text-viking-gold transition-all duration-300" onClick={closeMenu}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/forum" className="hover:text-viking-gold transition-all duration-300" onClick={closeMenu}>Forum</Link>
                        </li>
                        
                        {canSeeDashboard && (
                            <li>
                                <Link to="/admin" className="text-viking-gold border border-viking-gold/50 px-4 py-2 md:px-2 md:py-0.5 hover:bg-viking-gold hover:text-black transition-all duration-300" onClick={closeMenu}>
                                    Conseil
                                </Link>
                            </li>
                        )}
                    </ul>

                    {/* Connexion / Déconnexion */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 md:border-l border-stone-700 md:pl-6 mt-8 md:mt-0">
                        {!token ? (
                            <>
                                <Link to="/login" className="text-2xl md:text-sm font-black uppercase tracking-tighter hover:text-viking-gold transition" onClick={closeMenu}>
                                    Connexion
                                </Link>
                                <Link to="/register" className="bg-viking-gold text-black px-8 py-3 md:px-4 md:py-1.5 text-xl md:text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg" onClick={closeMenu}>
                                    Rejoindre
                                </Link>
                            </>
                        ) : (
                            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                                <span className="text-xl md:text-[10px] text-stone-500 uppercase font-black italic">
                                    {user?.pseudo || "Guerrier"}
                                </span>
                                <button 
                                    onClick={handleLogout}
                                    className="text-lg md:text-[10px] text-viking-fire uppercase font-black border border-viking-fire/30 px-6 py-2 md:px-3 md:py-1 hover:bg-viking-fire hover:text-white transition"
                                >
                                    Quitter
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;