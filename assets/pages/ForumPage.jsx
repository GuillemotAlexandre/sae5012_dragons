import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { jwtDecode } from 'jwt-decode';
import ArticleForm from '../components/ArticleForm';
=======
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad

const ForumPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
<<<<<<< HEAD
    const [user, setUser] = useState(null);
    
    // Gestion de la navigation interne
    const [view, setView] = useState('list'); // 'list', 'create', 'edit'
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        // 1. Récupération et décodage du Token
        const token = localStorage.getItem('token');
        if (token) {
            try { 
                const decoded = jwtDecode(token);
                console.log("Guerrier connecté :", decoded);
                setUser(decoded); 
            } catch (e) {
                console.error("Badge (Token) invalide ou expiré");
            }
        }
        // 2. Chargement des chroniques
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/articles', { 
                headers: { 'Accept': 'application/ld+json' } 
            });
            const data = await res.json();
            setArticles(data['hydra:member'] || data['member'] || []);
        } catch (err) {
            console.error("Erreur de liaison avec le Grand Conseil", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Voulez-vous vraiment effacer ce récit de la pierre ?")) return;

        try {
            const res = await fetch(`/api/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (res.ok) {
                // Suppression locale immédiate pour l'interface
                setArticles(articles.filter(a => {
                    const aId = (a.id || a['@id']).toString().split('/').pop();
                    return aId !== id.toString();
                }));
            } else {
                alert("Les dragons protègent ce parchemin (Erreur de permissions).");
            }
        } catch (err) {
            alert("Le serveur est injoignable.");
        }
    };

    const handleSuccess = () => {
        setView('list');
        setSelectedId(null);
        fetchArticles(); 
    };

    // --- LOGIQUE DES RÔLES ---
    const hasRole = (role) => user?.roles?.includes(role);
    
    // Autorise la création pour Admin, Auteur ET Éditeur
    const canCreate = hasRole('ROLE_ADMIN') || hasRole('ROLE_AUTEUR') || hasRole('ROLE_EDITEUR');

    if (loading && view === 'list') {
        return (
            <div className="flex flex-col items-center justify-center py-40">
                <div className="w-12 h-12 border-4 border-viking-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-viking-gold font-dragon text-xl animate-pulse uppercase">Ouverture des parchemins...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 pb-20">
            
            {/* --- HEADER --- */}
            <div className="flex justify-between items-end mb-12 border-b border-viking-gold/20 pb-8">
                <div>
                    <h1 className="text-6xl font-dragon text-viking-parchment uppercase tracking-tighter">Chroniques</h1>
                    <p className="text-stone-500 italic text-sm mt-2">Le savoir du village de Berk, gravé pour l'éternité.</p>
                </div>
                
                {view === 'list' && canCreate && (
                    <button 
                        onClick={() => setView('create')}
                        className="bg-viking-gold text-black px-8 py-3 font-black hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.2)] uppercase text-xs tracking-widest"
                    >
                        + Graver un récit
                    </button>
                )}
            </div>

            {/* --- VUES FORMULAIRES --- */}
            {(view === 'create' || view === 'edit') ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <button 
                        onClick={() => { setView('list'); setSelectedId(null); }}
                        className="mb-8 text-stone-500 hover:text-viking-gold flex items-center gap-2 transition uppercase text-[10px] font-bold tracking-widest"
                    >
                        ← Retour au mur des légendes
                    </button>
                    <ArticleForm id={selectedId} onSuccess={handleSuccess} />
                </div>
            ) : (
                /* --- VUE LISTE DES ARTICLES --- */
                <div className="grid gap-6">
                    {articles.length === 0 ? (
                        <p className="text-center py-20 text-stone-600 italic">Le silence règne sur le mur... Aucune chronique n'a été trouvée.</p>
                    ) : (
                        articles.map((article) => {
                            const cleanId = (article.id || article['@id']).toString().split('/').pop();
                            
                            // Vérification de propriété (L'auteur du post OU un rôle de modération)
                            const isOwner = user?.id === article.author?.id || hasRole('ROLE_ADMIN') || hasRole('ROLE_EDITEUR');

                            return (
                                <article key={cleanId} className="group bg-stone-900/40 border-l-4 border-stone-800 hover:border-viking-gold transition-all duration-300 p-8 relative">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-3xl font-dragon text-viking-gold group-hover:text-white transition-colors uppercase">
                                            {article.title}
                                        </h2>
                                        
                                        {isOwner && (
                                            <div className="flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => { setSelectedId(cleanId); setView('edit'); }}
                                                    className="text-[9px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-1 border border-stone-700 hover:text-white hover:border-viking-gold transition"
                                                >
                                                    Modifier
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(cleanId)}
                                                    className="text-[9px] uppercase font-black bg-red-900/10 text-red-500/70 px-3 py-1 border border-red-900/30 hover:bg-red-900 hover:text-white transition"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-stone-400 font-serif italic text-lg leading-relaxed mb-8 max-w-3xl">
                                        "{article.summary}"
                                    </p>

                                    <div className="flex justify-between items-center pt-6 border-t border-stone-800/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-[1px] bg-viking-gold/40"></div>
                                            <span className="text-[10px] text-stone-500 uppercase tracking-widest font-black">
                                                Par {article.author?.pseudo || article.author?.username || "Guerrier de l'ombre"}
                                            </span>
                                        </div>
                                        <Link 
                                            to={`/forum/article/${cleanId}`} 
                                            className="text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2"
                                        >
                                            Consulter le parchemin <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })
                    )}
=======
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/articles', { headers: { 'Accept': 'application/ld+json' } })
            .then(res => {
                if (!res.ok) throw new Error('Erreur réseau');
                return res.json();
            })
            .then(data => {
                setArticles(data['hydra:member'] || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur API:", err);
                setError("Impossible d'accéder aux archives.");
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center text-viking-gold font-dragon text-3xl py-20 animate-pulse">Déroulement des parchemins...</div>;
    if (error) return <div className="text-center text-viking-fire font-bold py-10 text-xl border border-viking-red bg-viking-red/10 rounded">{error}</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-8 border-b border-viking-gold/30 pb-4">
                <h1 className="text-4xl font-dragon text-viking-parchment">
                    Chroniques des Chasseurs
                </h1>
                <span className="bg-viking-red px-3 py-1 rounded text-white font-bold text-sm border border-viking-gold shadow-md">
                    {articles.length} Récits
                </span>
            </div>
            
            {articles.length === 0 ? (
                <div className="text-center py-10 bg-viking-rock/50 rounded-lg border border-dashed border-viking-light">
                    <p className="text-viking-light italic text-lg">Les archives sont vides pour le moment.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {articles.map(article => (
                        <div key={article.id} className="group bg-viking-rock p-6 rounded-sm border border-stone-600 border-l-4 border-l-viking-gold hover:border-l-viking-fire hover:bg-stone-800 transition duration-300 shadow-lg relative overflow-hidden">
                            
                            <h2 className="text-2xl font-dragon text-viking-gold mb-2 group-hover:text-white transition">
                                {article.title}
                            </h2>
                            
                            <p className="text-viking-light mb-6 line-clamp-2 font-serif leading-relaxed">
                                {article.summary}
                            </p>
                            
                            <div className="flex justify-between items-end mt-4 pt-4 border-t border-stone-700">
                                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                                    {new Date(article.createdAt).toLocaleDateString()}
                                </span>
                                
                                <Link to={`/forum/article/${article.id}`} className="text-viking-fire hover:text-viking-gold font-bold uppercase text-sm tracking-wider flex items-center gap-1 transition">
                                    Lire le parchemin <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
                </div>
            )}
        </div>
    );
};

export default ForumPage;