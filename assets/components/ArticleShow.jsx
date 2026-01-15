import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CsvChart from './CsvChart';
import VikingPlayer from './VikingPlayer';

const ArticleShow = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/articles/${id}`)
            .then(res => res.ok ? res.json() : Promise.reject("Erreur"))
            .then(data => { 
                console.log("Données reçues :", data);
                setArticle(data); 
                setLoading(false); 
            })
            .catch(err => { 
                console.error(err); 
                setLoading(false); 
            });
    }, [id]);

    if (loading) return <div className="text-center text-viking-gold p-10 animate-pulse">Invocation du récit...</div>;
    if (!article) return <div className="text-center text-red-500 p-10">Parchemin introuvable.</div>;

    // --- LOGIQUE D'EXTRACTION ---
    let customStyles = {};
    const rawConfig = article.designConfig;

    if (rawConfig) {
        try {
            customStyles = typeof rawConfig === 'string' ? JSON.parse(rawConfig) : rawConfig;
        } catch (e) {
            console.error("Erreur de décodage des styles", e);
        }
    }

    // --- DÉFINITION DES COULEURS ---
    // On utilise les valeurs de la BDD, sinon blanc par défaut (sera géré par la classe CSS)
    const finalTitleColor = customStyles.titleColor || '#ffffff';
    const finalContentBg = customStyles.contentBg || 'rgba(41, 37, 36, 0.5)';

    const musicBloc = article.blocs?.find(b => b.type === 'music');
    const musicSrc = musicBloc ? `/musique/${musicBloc.content}` : null;
    
    const contentBlocs = article.blocs 
        ? [...article.blocs].filter(b => b.type !== 'music').sort((a, b) => a.position - b.position) 
        : [];

    return (
        <div className="max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl">
            <Link to="/forum" className="text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest transition-colors">
                ← Retour au Hall
            </Link>

            {/* TITRE : Utilisation de la variable CSS locale pour passer outre le h1 global du App.css */}
            <h1 
                style={{ "--article-title-color": finalTitleColor }} 
                className="article-dynamic-title text-5xl font-dragon mb-6 text-center uppercase tracking-widest drop-shadow-lg transition-all duration-500"
            >
                {article.title}
            </h1>
            
            {/* RÉSUMÉ : Fond dynamique appliqué en style inline */}
            <div 
                style={{ backgroundColor: finalContentBg }} 
                className="p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner transition-all duration-500"
            >
                {article.summary}
            </div>

            {musicSrc && (
                <div className="mb-12">
                    <VikingPlayer src={musicSrc} autoPlay={true} />
                </div>
            )}

            <div className="space-y-12">
                {contentBlocs.map((bloc) => {
                    switch (bloc.type) {
                        case 'h2':
                            return <h2 key={bloc.id} className="text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8">{bloc.content}</h2>;
                        case 'paragraph':
                            return <p key={bloc.id} className="text-stone-300 leading-relaxed text-lg whitespace-pre-line text-justify">{bloc.content}</p>;
                        case 'image':
                            return (
                                <figure key={bloc.id} className="text-center my-8">
                                    <img src={bloc.content} alt="Illustration" className="mx-auto max-h-[500px] border-4 border-stone-800 shadow-xl rounded" />
                                </figure>
                            );
                        case 'stats': 
                        case 'viz':
                            const parts = bloc.content ? bloc.content.split('::') : [];
                            return (
                                <div key={bloc.id} className="bg-black/40 border border-stone-700 p-6 rounded-lg my-8 shadow-inner">
                                    <h3 className="text-viking-gold font-bold text-sm uppercase mb-4 tracking-widest text-center">📊 Données du Clan</h3>
                                    <div className="h-96">
                                        <CsvChart csvUrl={parts[1]} vizType={parts[0] || 'bar'} />
                                    </div>
                                </div>
                            );
                        default: return null;
                    }
                })}
            </div>

            <div className="mt-20 pt-10 border-t border-stone-800 text-center text-stone-500 text-xs uppercase tracking-widest">
                Gravé par {article.author?.pseudo || "Un éclaireur"} • {new Date(article.createdAt).toLocaleDateString()}
            </div>
        </div>
    );
};

export default ArticleShow;