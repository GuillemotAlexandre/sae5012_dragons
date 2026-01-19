import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/login_check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: email, 
                    password: password 
                }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = '/forum';
            } else {
                setError('Identifiants incorrects. Les dragons ne vous reconnaissent pas.');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur.');
        }
    };

    return (
        // MODIF : px-4 pour éviter que ça touche les bords sur mobile
        <div className="px-4 w-full">
            {/* MODIF : p-6 et mt-4 sur mobile, p-10 et mt-10 sur desktop */}
            <div className="max-w-md mx-auto bg-viking-rock p-6 md:p-10 border-2 border-viking-gold shadow-2xl mt-4 md:mt-10">
                {/* MODIF : text-2xl sur mobile */}
                <h2 className="text-2xl md:text-3xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase">Connexion</h2>
                
                {error && <p className="text-viking-red text-sm mb-4 italic text-center font-bold animate-pulse">{error}</p>}

                {/* MODIF : space-y-4 sur mobile (plus compact) */}
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment">
                            Email du Guerrier
                        </label>
                        {/* MODIF : text-base pour éviter le zoom iOS automatique */}
                        <input 
                            type="email" 
                            className="w-full bg-black/50 border border-stone-700 p-3 md:p-4 text-base text-white focus:border-viking-gold outline-none transition-all"
                            placeholder="exemple@berk.fr"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment">
                            Mot de passe
                        </label>
                        <input 
                            type="password" 
                            className="w-full bg-black/50 border border-stone-700 p-3 md:p-4 text-base text-white focus:border-viking-gold outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    {/* MODIF : py-3 sur mobile pour gagner de la place, py-4 sur desktop */}
                    <button type="submit" className="w-full bg-viking-gold text-black font-black py-3 md:py-4 uppercase hover:bg-yellow-500 transition shadow-lg active:scale-95 text-sm md:text-base tracking-widest">
                        Prendre son envol
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;