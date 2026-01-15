import React, { useState, useEffect } from 'react';

const DesignerSpace = () => {
    // --- ÉTATS ---
    const VIKING_ORANGE_DEFAULT = '#e67e22'; 
    
    const [globalColor, setGlobalColor] = useState(VIKING_ORANGE_DEFAULT);
    const [articles, setArticles] = useState([]);
    const [selectedArticleId, setSelectedArticleId] = useState('');
    const [articleStyles, setArticleStyles] = useState({
        titleColor: '#ffffff',
        contentBg: '#1c1917'
    });
    const [isSaving, setIsSaving] = useState(false);

    // --- CHARGEMENT INITIAL ---
    useEffect(() => {
        fetchArticles();
        const currentColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--viking-orange').trim();
        if (currentColor && currentColor.startsWith('#')) {
            setGlobalColor(currentColor);
        }
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch('/api/articles');
            const data = await response.json();
            const items = data['hydra:member'] || data.member || (Array.isArray(data) ? data : []);
            setArticles(items);
        } catch (error) {
            console.error("Erreur chargement articles:", error);
        }
    };

    // --- ACTIONS FORGE GLOBALE ---
    const handleGlobalColorPreview = (newColor) => {
        setGlobalColor(newColor);
        document.documentElement.style.setProperty('--viking-orange', newColor);
    };

    const resetGlobalColor = async () => {
        if (window.confirm("Voulez-vous vraiment restaurer les couleurs d'origine du village ?")) {
            setIsSaving(true);
            try {
                handleGlobalColorPreview(VIKING_ORANGE_DEFAULT);
                const response = await fetch('/api/admin/reset-global-design', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                if (response.ok) alert("🔥 Les couleurs d'origine ont été restaurées !");
            } catch (err) {
                console.error("Erreur reset:", err);
            } finally {
                setIsSaving(false);
            }
        }
    };

    const handleSaveGlobalStyle = async () => {
        setIsSaving(true);
        try {
            const response = await fetch('/api/admin/save-global-design', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ mainColor: globalColor })
            });
            if (response.ok) alert("⚔️ Le thème du village a été gravé dans la pierre !");
        } catch (err) {
            alert("Erreur de connexion à la forge.");
        } finally {
            setIsSaving(false);
        }
    };

    // --- ACTIONS CHRONIQUES ---
    const handleArticleSelect = (e) => {
        const id = e.target.value;
        setSelectedArticleId(id);
        const article = articles.find(a => String(a.id) === String(id));
        
        if (article && article.designConfig) {
            const config = typeof article.designConfig === 'string' 
                ? JSON.parse(article.designConfig) 
                : article.designConfig;
            setArticleStyles({
                titleColor: config.titleColor || '#ffffff',
                contentBg: config.contentBg || '#1c1917'
            });
        } else {
            setArticleStyles({ titleColor: '#ffffff', contentBg: '#1c1917' });
        }
    };

    const handleSaveArticleStyle = async () => {
        if (!selectedArticleId) return;
        setIsSaving(true);
        try {
            const response = await fetch(`/api/admin/article/${selectedArticleId}/style`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    designConfig: {
                        titleColor: articleStyles.titleColor,
                        contentBg: articleStyles.contentBg
                    }
                })
            });
            if (response.ok) {
                alert("✨ Le style de cette chronique a été sauvegardé !");
                fetchArticles(); 
            }
        } catch (err) {
            alert("Erreur réseau.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="space-y-10 p-6 max-w-5xl mx-auto">
            {/* 1. SECTION FORGE GLOBALE */}
            <section className="bg-stone-900 border border-viking-gold/20 p-6 rounded-lg shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-dragon text-viking-gold uppercase tracking-widest">Forge Globale (Site)</h2>
                    <button onClick={resetGlobalColor} disabled={isSaving} className="text-[10px] bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white px-3 py-1 border border-stone-700 uppercase font-bold transition-all disabled:opacity-50">
                        Réinitialiser
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center gap-2">
                        <label className="text-[10px] text-stone-500 font-bold uppercase">Couleur Principale</label>
                        <input type="color" value={globalColor} onChange={(e) => handleGlobalColorPreview(e.target.value)} className="w-20 h-20 cursor-pointer bg-transparent border-2 border-stone-700 rounded-lg" />
                    </div>
                    <div className="flex-1 bg-black/40 p-6 rounded border border-stone-800 flex items-center justify-center">
                        <span style={{ color: globalColor }} className="text-5xl font-dragon uppercase tracking-widest transition-colors duration-300 drop-shadow-lg text-center">
                            RIDERS OF BERK
                        </span>
                    </div>
                </div>
                <button onClick={handleSaveGlobalStyle} disabled={isSaving} className="w-full py-3 bg-viking-gold text-black font-bold uppercase rounded hover:brightness-110 transition-all disabled:opacity-50">
                    {isSaving ? "Gravure..." : "Valider pour tout le village"}
                </button>
            </section>

            {/* 2. SECTION STYLE DES CHRONIQUES (CORRIGÉE POUR L'APERÇU) */}
            <section className="bg-stone-900 border border-blue-500/20 p-6 rounded-lg shadow-xl">
                <h2 className="text-xl font-dragon text-blue-400 mb-6 uppercase tracking-widest">Style des Chroniques (Articles)</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Choisir un récit à modifier</label>
                            <select value={selectedArticleId} onChange={handleArticleSelect} className="w-full bg-stone-800 border border-stone-700 text-white p-3 rounded outline-none focus:border-blue-500 transition-colors">
                                <option value="">-- Sélectionner un Article --</option>
                                {articles.map(art => (
                                    <option key={art.id} value={art.id}>{art.title}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-stone-800 p-3 rounded border border-stone-700">
                                <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Couleur Titre</label>
                                <input type="color" value={articleStyles.titleColor} onChange={(e) => setArticleStyles(prev => ({ ...prev, titleColor: e.target.value }))} className="w-full h-10 bg-transparent cursor-pointer" />
                            </div>
                            <div className="bg-stone-800 p-3 rounded border border-stone-700">
                                <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Fond Contenu</label>
                                <input type="color" value={articleStyles.contentBg} onChange={(e) => setArticleStyles(prev => ({ ...prev, contentBg: e.target.value }))} className="w-full h-10 bg-transparent cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* APERÇU CORRIGÉ : Utilise la classe et la variable CSS de App.css */}
                    <div className="bg-stone-950 p-6 rounded-lg border border-stone-800 flex flex-col justify-center min-h-[180px]">
                        <h3 
                            style={{ "--article-title-color": articleStyles.titleColor }} 
                            className="article-dynamic-title text-3xl font-dragon mb-4 uppercase transition-colors text-center"
                        >
                            {selectedArticleId ? articles.find(a => String(a.id) === String(selectedArticleId))?.title : "Titre de l'Article"}
                        </h3>
                        <div 
                            style={{ backgroundColor: articleStyles.contentBg }} 
                            className="p-4 rounded text-stone-400 text-sm italic transition-all border border-white/5"
                        >
                            "Le dragon survola les falaises de Berk..."
                        </div>
                    </div>
                </div>

                <button onClick={handleSaveArticleStyle} disabled={isSaving || !selectedArticleId} className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase rounded transition-all disabled:opacity-20">
                    {isSaving ? 'Gravure en cours...' : 'Enregistrer le style du récit'}
                </button>
            </section>
        </div>
    );
};

export default DesignerSpace;