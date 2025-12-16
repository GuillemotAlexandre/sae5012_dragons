import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
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

    if (loading) return <div className="text-center text-white py-10">Recherche dans les archives...</div>;
    if (!article) return <div className="text-center text-red-500 py-10">Article introuvable !</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/forum" className="text-slate-400 hover:text-white mb-4 inline-block">← Retour</Link>
            
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-8">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-4">
                    {article.title}
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed">
                    {article.summary}
                </p>
                {/* Ici tu pourras ajouter l'affichage des blocs plus tard */}
            </div>
        </div>
    );
};

export default ArticlePage;