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

    if (loading) return <div className="text-center text-viking-gold font-dragon text-xl md:text-2xl py-20 animate-pulse px-4">Recherche dans les archives...</div>;
    if (!article) return <div className="text-center text-viking-fire text-lg md:text-xl py-10 px-4">Article introuvable dans les archives.</div>;

    return (
        // MODIF : px-4 pour les marges latérales sur mobile
        <div className="max-w-4xl mx-auto animate-fade-in px-4 pb-12">
            
            <Link to="/forum" className="text-viking-light hover:text-white mb-4 md:mb-6 inline-flex items-center gap-2 transition text-sm md:text-base">
                <span>←</span> Retour au forum
            </Link>
            
            {/* MODIF : p-5 sur mobile, p-8 sur desktop */}
            <div className="bg-viking-rock p-5 md:p-8 rounded-lg border-2 border-stone-600 shadow-2xl relative overflow-hidden">
                
                {/* Décoration coin : plus petite sur mobile (w-12) */}
                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-viking-gold opacity-10 rounded-bl-full"></div>

                {/* MODIF : text-3xl sur mobile, break-words pour éviter les débordements */}
                <h1 className="text-3xl md:text-5xl font-dragon text-viking-gold mb-4 leading-tight break-words relative z-10 pr-8">
                    {article.title}
                </h1>
                
                {/* MODIF : flex-wrap pour que ça passe à la ligne sur les très petits écrans */}
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-stone-500 mb-6 md:mb-8 border-b border-stone-700 pb-4">
                    <span className="bg-viking-red px-2 py-1 rounded text-white font-bold border border-viking-gold/50">
                        Archive
                    </span>
                    <span>Créé le {new Date(article.createdAt).toLocaleDateString()}</span>
                </div>

                {/* MODIF : text-base (16px) sur mobile, text-lg (18px) sur desktop */}
                <div className="text-viking-parchment text-base md:text-lg leading-relaxed font-serif whitespace-pre-line text-justify md:text-left">
                    {article.summary}
                </div>
                
                {/* Note: Les blocs et commentaires nécessitent une logique plus poussée à implémenter plus tard */}
            </div>
        </div>
    );
};

export default ArticlePage;