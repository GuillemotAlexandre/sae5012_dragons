import React, { useState, useEffect } from 'react';

const DragonForum = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fonction pour récupérer les données de l'API Symfony
    useEffect(() => {
        fetch('/api/articles', {
            headers: {
                'Accept': 'application/ld+json' // On demande du JSON-LD (format API Platform)
            }
        })
        .then(response => response.json())
        .then(data => {
            // API Platform renvoie les données dans 'hydra:member'
            setArticles(data['hydra:member']); 
            setLoading(false);
        })
        .catch(error => {
            console.error('Erreur API:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-10 px-4 animate-pulse">Chargement des parchemins... 🐉</div>;
    }

    return (
        // MODIF : px-4 pour les marges mobiles, py ajusté
        <div className="max-w-4xl mx-auto py-6 md:py-10 px-4">
            {/* MODIF : Taille titre adaptée */}
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-6 md:mb-8">
                Le Forum (Version React ⚛️)
            </h2>

            <div className="space-y-4 md:space-y-6">
                {articles.map(article => (
                    // MODIF : p-4 sur mobile, p-6 sur desktop
                    <div key={article.id} className="bg-slate-800 p-4 md:p-6 rounded-lg border-l-4 border-red-500 shadow-md hover:bg-slate-750 transition">
                        
                        {/* MODIF : flex-col sur mobile pour éviter le chevauchement titre/date */}
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2 sm:gap-0">
                            <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-tight">{article.title}</h3>
                            
                            {/* MODIF : self-start ou self-center selon besoin */}
                            <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700 whitespace-nowrap">
                                {new Date(article.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        
                        <p className="text-slate-400 mb-4 line-clamp-3 text-sm md:text-base">
                            {article.summary}
                        </p>
                        
                        <div className="text-right">
                            {/* Lien vers la page détail */}
                            <a href={`/forum/article/${article.id}`} className="inline-block py-2 px-3 md:p-0 text-sm text-red-400 hover:text-red-300 font-semibold uppercase tracking-wider">
                                Lire la suite →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragonForum;