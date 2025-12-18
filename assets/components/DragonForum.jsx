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
        return <div className="text-white text-center py-10">Chargement des parchemins... 🐉</div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-8">
                Le Forum (Version React ⚛️)
            </h2>

            <div className="space-y-6">
                {articles.map(article => (
                    <div key={article.id} className="bg-slate-800 p-6 rounded-lg border-l-4 border-red-500 shadow-md hover:bg-slate-750 transition">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-slate-100">{article.title}</h3>
                            <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                                {new Date(article.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-slate-400 mb-4 line-clamp-3">
                            {article.summary}
                        </p>
                        
                        <div className="text-right">
                            {/* Lien vers la page détail (qui est encore en Twig pour l'instant) */}
                            <a href={`/forum/article/${article.id}`} className="text-sm text-red-400 hover:text-red-300 font-semibold">
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