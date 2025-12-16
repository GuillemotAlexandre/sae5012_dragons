import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                
                <Link to="/" className="text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md">
                    <span className="text-4xl">🐉</span> DragonCMS
                </Link>

                <ul className="flex space-x-8 text-lg font-dragon tracking-wide text-viking-light">
                    <li>
                        <Link to="/" className="hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/statistique" className="hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300">
                            Statistiques
                        </Link>
                    </li>
                    <li>
                        <Link to="/forum" className="hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300">
                            Forum
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;