import React, { useState, useEffect } from 'react';

const ArticleForm = ({ id, onSuccess }) => {
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '' 
    });

    useEffect(() => {
        if (isEditMode) {
            fetch(`/api/articles/${id}`, { headers: { 'Accept': 'application/ld+json' } })
                .then(res => res.json())
                .then(data => setFormData({
                    title: data.title,
                    summary: data.summary,
                    content: data.content || ''
                }));
        }
    }, [id, isEditMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = isEditMode ? 'PUT' : 'POST';
        const url = isEditMode ? `/api/articles/${id}` : '/api/articles';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Au lieu de navigate, on appelle la fonction de retour au succès
                onSuccess(); 
            } else {
                alert("Le sceau magique a échoué. Vérifiez vos permissions.");
            }
        } catch (err) {
            console.error("Erreur:", err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-viking-rock border-2 border-viking-gold shadow-2xl rounded-sm">
            <h2 className="text-3xl font-dragon text-viking-gold mb-6 uppercase tracking-tighter">
                {isEditMode ? "Modifier le parchemin" : "Graver un nouveau récit"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-viking-parchment mb-2 font-bold uppercase text-[10px] tracking-[0.2em]">Titre de la légende</label>
                    <input 
                        type="text" 
                        className="w-full bg-black/40 border border-stone-600 p-3 text-white focus:border-viking-gold outline-none transition"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label className="block text-viking-parchment mb-2 font-bold uppercase text-[10px] tracking-[0.2em]">Résumé (Introduction)</label>
                    <textarea 
                        className="w-full bg-black/40 border border-stone-600 p-3 text-white focus:border-viking-gold outline-none h-32"
                        value={formData.summary}
                        onChange={(e) => setFormData({...formData, summary: e.target.value})}
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <button type="submit" className="flex-grow bg-viking-gold text-black font-black py-4 uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg">
                        {isEditMode ? "Mettre à jour" : "Sceller le récit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArticleForm;