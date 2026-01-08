import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import ArticleForm from './ArticleForm'; // Import direct ici

const ForumPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    // Nouveaux états pour gérer la vue interne
    const [view, setView] = useState('list'); // 'list', 'create', 'edit'
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try { setUser(jwtDecode(token)); } catch (e) {}
        }
        fetchArticles();
    }, []);

    const fetchArticles = () => {
        setLoading(true);
        fetch('/api/articles', { headers: { 'Accept': 'application/ld+json' } })
            .then(res => res.json())
            .then(data => {
                setArticles(data['hydra:member'] || data['member'] || []);
                setLoading(false);
            });
    };

    const handleSuccess = () => {
        setView('list');
        setSelectedId(null);
        fetchArticles(); // On rafraîchit la liste pour voir les changements
    };

    const hasRole = (role) => user?.roles?.includes(role);
    const canCreate = hasRole('ROLE_ADMIN') || hasRole('ROLE_AUTEUR');

    if (loading && view === 'list') return <div className="text-center py-20 text-viking-gold font-dragon text-2xl animate-pulse">Lecture des registres...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4">
            
            {/* --- VUE FORMULAIRE --- */}
            {(view === 'create' || view === 'edit') ? (
                <div className="animate-fade-in-up">
                    <button 
                        onClick={() => setView('list')}
                        className="mb-8 text-viking-light hover:text-viking-gold flex items-center gap-2 transition uppercase text-xs font-bold"
                    >
                        ← Retour aux Chroniques
                    </button>
                    <ArticleForm id={selectedId} onSuccess={handleSuccess} />
                </div>
            ) : (
                /* --- VUE LISTE --- */
                <>
                    <div className="flex justify-between items-center mb-12 border-b border-viking-gold/20 pb-8">
                        <div>
                            <h1 className="text-5xl font-dragon text-viking-parchment uppercase tracking-tighter">Chroniques</h1>
                            <p className="text-stone-500 italic text-sm mt-1">Les exploits de la guilde gravés à jamais.</p>
                        </div>
                        {canCreate && (
                            <button 
                                onClick={() => setView('create')}
                                className="bg-viking-gold text-black px-6 py-2 font-black hover:bg-yellow-500 transition shadow-lg uppercase text-xs"
                            >
                                + Graver un récit
                            </button>
                        )}
                    </div>

                    <div className="grid gap-8">
                        {articles.map((article) => {
                            const cleanId = (article.id || article['@id']).toString().split('/').pop();
                            const isOwner = user?.id === article.author?.id || hasRole('ROLE_ADMIN');

                            return (
                                <div key={cleanId} className="group bg-viking-rock/40 p-8 border-l-4 border-viking-gold hover:border-viking-fire transition relative">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-3xl font-dragon text-viking-gold group-hover:text-white transition">
                                            {article.title}
                                        </h2>
                                        {isOwner && (
                                            <button 
                                                onClick={() => { setSelectedId(cleanId); setView('edit'); }}
                                                className="text-[10px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-1 border border-stone-700 hover:text-white transition"
                                            >
                                                Modifier
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-stone-300 my-6 font-serif italic text-lg line-clamp-2">"{article.summary}"</p>
                                    <div className="flex justify-between items-center pt-6 border-t border-stone-800/50">
                                        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-black">Par {article.author?.username || "Chasseur de Berk"}</span>
                                        <Link to={`/forum/article/${cleanId}`} className="text-viking-fire font-black text-xs hover:text-viking-gold transition">LIRE LE PARCHEMIN →</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default ForumPage;