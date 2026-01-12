import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let user = null;

    // On décode le token pour connaître l'utilisateur et ses rôles
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
    };

    // Vérification des droits pour le Dashboard
    const canSeeDashboard = user?.roles?.includes('ROLE_EDITEUR') || user?.roles?.includes('ROLE_ADMIN');

    return (
        <nav className="bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                
                <Link to="/" className="text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md group">
                    <span className="text-4xl group-hover:scale-110 transition-transform uppercase">Riders of Berk</span> 
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="flex space-x-6 text-lg font-dragon tracking-wide text-viking-light uppercase">
                        <li>
                            <Link to="/" className="hover:text-viking-gold transition-all duration-300">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/forum" className="hover:text-viking-gold transition-all duration-300">Forum</Link>
                        </li>
                        
                        {/* LIEN DASHBOARD : Visible uniquement pour Éditeur/Admin */}
                        {canSeeDashboard && (
                            <li>
                                <Link to="/admin" className="text-viking-gold border border-viking-gold/50 px-2 py-0.5 hover:bg-viking-gold hover:text-black transition-all duration-300">
                                    Conseil
                                </Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex items-center gap-4 border-l border-stone-700 pl-6">
                        {!token ? (
                            <>
                                <Link to="/login" className="text-sm font-black uppercase tracking-tighter hover:text-viking-gold transition">
                                    Connexion
                                </Link>
                                <Link to="/register" className="bg-viking-gold text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg">
                                    Rejoindre
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] text-stone-500 uppercase font-black italic">
                                    {user?.pseudo || "Guerrier"}
                                </span>
                                <button 
                                    onClick={handleLogout}
                                    className="text-[10px] text-viking-fire uppercase font-black border border-viking-fire/30 px-2 py-1 hover:bg-viking-fire hover:text-white transition"
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