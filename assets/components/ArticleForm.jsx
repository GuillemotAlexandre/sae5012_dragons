import React, { useState, useEffect } from 'react';

const ArticleForm = ({ id, onSuccess }) => {
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '' // Assure-toi que ce champ existe dans ton entité Article.php
    });

    useEffect(() => {
        if (isEditMode) {
            fetch(`/api/articles/${id}`, { 
                headers: { 'Accept': 'application/ld+json' } 
            })
            .then(res => res.json())
            .then(data => setFormData({
                title: data.title || '',
                summary: data.summary || '',
                content: data.content || ''
            }));
        }
    }, [id, isEditMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // IMPORTANT : Pour API Platform, le format par défaut est JSON-LD
        // En cas de modification (PUT/PATCH), on utilise souvent PATCH pour éviter les erreurs 415
        const method = isEditMode ? 'PATCH' : 'POST';
        const url = isEditMode ? `/api/articles/${id}` : '/api/articles';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    // Correction de l'erreur 415 : on précise le format LD+JSON
                    'Content-Type': isEditMode ? 'application/merge-patch+json' : 'application/ld+json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/ld+json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                onSuccess(); 
            } else {
                // Si ça échoue encore, on regarde le détail dans la console
                const errorData = await response.json();
                console.error("Détail de l'erreur serveur :", errorData);
                alert("Le Grand Conseil refuse ce parchemin. Vérifiez le format des données.");
            }
        } catch (err) {
            console.error("Erreur réseau :", err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-stone-900 border-2 border-viking-gold shadow-2xl rounded-sm">
            <h2 className="text-3xl font-dragon text-viking-gold mb-6 uppercase tracking-tighter">
                {isEditMode ? "Modifier le parchemin" : "Graver un nouveau récit"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest">Titre de la légende</label>
                    <input 
                        type="text" 
                        className="w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest">Résumé (Apparaît sur le mur)</label>
                    <textarea 
                        className="w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none h-24"
                        value={formData.summary}
                        onChange={(e) => setFormData({...formData, summary: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label className="block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest">Détails de l'aventure</label>
                    <textarea 
                        className="w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none h-48"
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-viking-gold text-black font-black py-4 uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg">
                    {isEditMode ? "Mettre à jour" : "Sceller le récit"}
                </button>
            </form>
        </div>
    );
};

export default ArticleForm;