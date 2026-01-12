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
                    email: email, // Envoi de la clé "email" attendue par Symfony
                    password: password 
                }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                // Stockage du token JWT
                localStorage.setItem('token', data.token);
                // Redirection vers le forum
                window.location.href = '/forum';
            } else {
                setError('Identifiants incorrects. Les dragons ne vous reconnaissent pas.');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-viking-rock p-10 border-2 border-viking-gold shadow-2xl mt-10">
            <h2 className="text-3xl font-dragon text-viking-gold mb-8 text-center uppercase">Connexion</h2>
            
            {error && <p className="text-viking-red text-sm mb-4 italic text-center font-bold">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment">
                        Email du Guerrier
                    </label>
                    <input 
                        type="email" 
                        className="w-full bg-black/50 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition-all"
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
                        className="w-full bg-black/50 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition-all"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-viking-gold text-black font-black py-4 uppercase hover:bg-yellow-500 transition shadow-lg active:scale-95">
                    Prendre son envol
                </button>
            </form>
        </div>
    );
};

export default LoginPage;