import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        plainPassword: '',
        role: 'ROLE_USER'
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Redirige vers l'accueil ou le login après succès
                navigate('/'); 
            } else {
                const data = await response.json();
                setError(data.message || "Erreur lors de l'inscription");
            }
        } catch (err) {
            setError("Impossible de contacter le Grand Scribe (Erreur réseau)");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-viking-rock/90 p-8 rounded-lg border-2 border-viking-gold shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-dragon text-viking-gold mb-8 text-center uppercase tracking-widest">
                Rejoindre la Guilde
            </h2>
            
            {error && (
                <div className="bg-red-900/40 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* NOM D'UTILISATEUR */}
                <div>
                    <label className="block text-viking-light text-sm font-bold mb-2">Nom de code (Pseudo)</label>
                    <input 
                        type="text" 
                        placeholder="Ex: Krokmou"
                        className="w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        required 
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <label className="block text-viking-light text-sm font-bold mb-2">Email de contact</label>
                    <input 
                        type="email" 
                        placeholder="viking@berk.fr"
                        className="w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                    />
                </div>

                {/* RÔLE (Déjà fonctionnel) */}
                <div>
                    <label className="block text-viking-light text-sm font-bold mb-2">Rang au sein de la Guilde</label>
                    <select 
                        className="w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none cursor-pointer"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                        <option value="ROLE_USER">Abonné (Lecteur)</option>
                        <option value="ROLE_AUTEUR">Auteur (Narrateur)</option>
                        <option value="ROLE_EDITEUR">Éditeur (Gardien)</option>
                        <option value="ROLE_DESIGNER">Designeur (Artisan)</option>
                        <option value="ROLE_FOURNISSEUR">Fournisseur de données (Scribe)</option>
                    </select>
                </div>

                {/* MOT DE PASSE */}
                <div>
                    <label className="block text-viking-light text-sm font-bold mb-2">Mot de passe</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition"
                        value={formData.plainPassword}
                        onChange={(e) => setFormData({...formData, plainPassword: e.target.value})}
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-viking-gold text-viking-dark font-extrabold py-4 rounded hover:bg-yellow-500 transition duration-300 shadow-lg uppercase tracking-wider mt-4"
                >
                    Graver mon nom
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;