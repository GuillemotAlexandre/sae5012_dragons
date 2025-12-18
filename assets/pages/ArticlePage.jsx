import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/articles/${id}`, { headers: { 'Accept': 'application/ld+json' } })
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
            .catch(err => setLoading(false));
    }, [id]);

    if (loading) return <div className="text-center text-viking-gold font-dragon text-2xl py-20 animate-pulse">Recherche dans les archives...</div>;
    if (!article) return <div className="text-center text-viking-fire text-xl py-10">Article introuvable dans les archives.</div>;

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <Link to="/forum" className="text-viking-light hover:text-white mb-6 inline-flex items-center gap-2 transition">
                <span>←</span> Retour au forum
            </Link>
            
            <div className="bg-viking-rock p-8 rounded-lg border-2 border-stone-600 shadow-2xl relative overflow-hidden">
                {/* Décoration coin */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-viking-gold opacity-10 rounded-bl-full"></div>

                <h1 className="text-4xl md:text-5xl font-dragon text-viking-gold mb-4 leading-tight">
                    {article.title}
                </h1>
                
                <div className="flex items-center gap-3 text-sm text-stone-500 mb-8 border-b border-stone-700 pb-4">
                    <span className="bg-viking-red px-2 py-1 rounded text-white font-bold border border-viking-gold/50">
                        Archive
                    </span>
                    <span>Créé le {new Date(article.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="text-viking-parchment text-lg leading-relaxed font-serif whitespace-pre-line">
                    {article.summary}
                </div>
                
                {/* Note: Les blocs et commentaires nécessitent une logique plus poussée à implémenter plus tard */}
            </div>
        </div>
    );
};

export default ArticlePage;