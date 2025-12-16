import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ForumPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/articles', { headers: { 'Accept': 'application/ld+json' } })
            .then(res => {
                if (!res.ok) throw new Error('Erreur réseau');
                return res.json();
            })
            .then(data => {
                const items = data['hydra:member'] || [];
                setArticles(items);
                setLoading(false);
            })
            .catch(err => {
                setError("Les archives sont inaccessibles.");
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center text-viking-gold font-dragon text-2xl py-20 animate-pulse">Consultation des archives...</div>;
    if (error) return <div className="text-center text-viking-fire font-bold py-10">{error}</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-8 border-b border-viking-gold/30 pb-4">
                <h1 className="text-4xl font-dragon text-viking-parchment">
                    Chroniques des Chasseurs
                </h1>
                <span className="bg-viking-red px-3 py-1 rounded text-white font-bold text-sm border border-viking-gold">
                    {articles.length} Récits
                </span>
            </div>
            
            {articles.length === 0 ? (
                <p className="text-viking-light text-center italic">Les parchemins sont vierges...</p>
            ) : (
                <div className="grid gap-6">
                    {articles.map(article => (
                        <div key={article.id} className="group bg-viking-rock p-6 rounded-sm border border-stone-600 border-l-4 border-l-viking-gold hover:border-l-viking-fire hover:bg-stone-800 transition duration-300 shadow-lg relative overflow-hidden">
                            
                            {/* Titre */}
                            <h2 className="text-2xl font-dragon text-viking-gold mb-2 group-hover:text-white transition">
                                {article.title}
                            </h2>
                            
                            {/* Résumé */}
                            <p className="text-viking-light mb-6 line-clamp-2 font-serif leading-relaxed">
                                {article.summary}
                            </p>
                            
                            <div className="flex justify-between items-end mt-4">
                                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                                    {new Date(article.createdAt).toLocaleDateString()}
                                </span>
                                
                                <Link to={`/forum/article/${article.id}`} className="text-viking-fire hover:text-viking-gold font-bold uppercase text-sm tracking-wider flex items-center gap-1 transition">
                                    Lire le parchemin <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ForumPage;