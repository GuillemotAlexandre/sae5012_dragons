import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateArticlePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [music, setMusic] = useState('');
    const [blocks, setBlocks] = useState([]);

    const musicOptions = [
        { label: 'Aucune', value: '' },
        { label: 'This is Berk', value: 'film1/this_is_berk.mp3' },
        { label: 'Test Drive', value: 'film1/test_drive.mp3' },
        { label: 'Romantic Flight', value: 'film1/romantic_flight.mp3' },
        { label: 'Where No One Goes', value: 'film2/where_no_one_goes.mp3' },
        { label: 'Hidden World', value: 'film3/hidden_world.mp3' },
    ];

    const addBlock = (type) => {
        setBlocks([...blocks, { type, content: '', title: '', file: null, vizType: 'bar', position: blocks.length + 1 }]);
    };

    const updateBlock = (index, field, value) => {
        const newBlocks = [...blocks];
        newBlocks[index][field] = value;
        setBlocks(newBlocks);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('music', music);

        blocks.forEach((block, index) => {
            formData.append(`blocks[${index}][type]`, block.type);
            formData.append(`blocks[${index}][position]`, block.position);
            formData.append(`blocks[${index}][title]`, block.title || '');
            formData.append(`blocks[${index}][content]`, block.content || '');
            
            if (block.file) {
                formData.append(`blocks[${index}][file]`, block.file);
            }
            if (block.type === 'viz') {
                formData.append(`blocks[${index}][vizType]`, block.vizType);
            }
        });

        try {
            const res = await fetch('/api/custom/articles/create', {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                navigate('/forum');
            } else {
                alert("Erreur lors de la création");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // MODIF : Ajout de p-4 pour les marges mobiles, pb-20 pour scroller jusqu'en bas
        <div className="max-w-3xl mx-auto animate-fade-in p-4 pb-20">
            {/* MODIF : Taille titre réduite sur mobile (2xl) */}
            <h1 className="text-2xl md:text-4xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase tracking-wider">
                Écrire une Nouvelle Chronique
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* MODIF : p-4 sur mobile, p-6 sur desktop */}
                <div className="bg-viking-rock p-4 md:p-6 rounded border-2 border-stone-600 shadow-xl">
                    <label className="block text-viking-light mb-2 font-bold text-sm uppercase">Titre du Récit</label>
                    {/* MODIF : p-3 pour agrandir la zone de touche */}
                    <input type="text" className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white focus:border-viking-gold outline-none transition-colors" 
                           value={title} onChange={e => setTitle(e.target.value)} required placeholder="Ex: La légende du Furie Nocturne..." />
                    
                    <label className="block text-viking-light mt-4 mb-2 font-bold text-sm uppercase">Résumé</label>
                    <textarea className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white h-24 focus:border-viking-gold outline-none transition-colors" 
                              value={summary} onChange={e => setSummary(e.target.value)} required placeholder="Une courte introduction..." />

                    <label className="block text-viking-light mt-4 mb-2 font-bold text-sm uppercase">Musique d'ambiance</label>
                    {/* MODIF : appearance-none ou p-3 pour standardiser */}
                    <select className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white focus:border-viking-gold outline-none"
                            value={music} onChange={e => setMusic(e.target.value)}>
                        {musicOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                </div>

                <div className="space-y-4">
                    {blocks.map((block, index) => (
                        <div key={index} className="bg-stone-800 p-4 rounded border border-stone-600 relative animate-fade-in">
                            {/* MODIF : Bouton supprimer plus gros et plus accessible */}
                            <button type="button" onClick={() => {
                                const newB = [...blocks]; newB.splice(index, 1); setBlocks(newB);
                            }} className="absolute top-2 right-2 text-stone-500 hover:text-red-500 w-8 h-8 flex items-center justify-center bg-black/20 rounded-full transition-colors">✖</button>
                            
                            <h4 className="text-viking-gold font-bold mb-3 uppercase text-sm tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-viking-gold rounded-full"></span>
                                {block.type}
                            </h4>
                            
                            <input type="text" placeholder="Titre du bloc (optionnel)" 
                                   className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white mb-3 text-sm focus:border-viking-gold outline-none"
                                   value={block.title} onChange={e => updateBlock(index, 'title', e.target.value)} />

                            {block.type === 'text' && (
                                <textarea className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white h-32 focus:border-viking-gold outline-none"
                                          placeholder="Contenu du texte..."
                                          value={block.content} onChange={e => updateBlock(index, 'content', e.target.value)} />
                            )}

                            {block.type === 'image' && (
                                <div className="border-2 border-dashed border-stone-600 p-4 rounded text-center hover:border-viking-gold transition-colors">
                                    <input type="file" accept="image/*" className="text-white text-sm w-full"
                                           onChange={e => updateBlock(index, 'file', e.target.files[0])} />
                                </div>
                            )}

                            {block.type === 'viz' && (
                                <div>
                                    <select className="w-full bg-stone-900 border border-stone-600 p-3 rounded text-white mb-3 focus:border-viking-gold outline-none"
                                            value={block.vizType} onChange={e => updateBlock(index, 'vizType', e.target.value)}>
                                        <option value="bar">Barres</option>
                                        <option value="pie">Camembert</option>
                                        <option value="line">Courbe</option>
                                    </select>
                                    <div className="border-2 border-dashed border-stone-600 p-4 rounded text-center hover:border-viking-gold transition-colors">
                                        <input type="file" accept=".csv" className="text-white text-sm w-full"
                                               onChange={e => updateBlock(index, 'file', e.target.files[0])} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* MODIF : flex-wrap pour que les boutons passent à la ligne sur mobile */}
                <div className="flex flex-wrap gap-2 justify-center py-4">
                    {/* MODIF : flex-grow pour remplir l'espace, text-sm pour la taille */}
                    <ToolButton label="Texte" onClick={() => addBlock('text')} />
                    <ToolButton label="Titre" onClick={() => addBlock('title_h2')} />
                    <ToolButton label="Image" onClick={() => addBlock('image')} />
                    <ToolButton label="Graphique" onClick={() => addBlock('viz')} />
                </div>

                <button type="submit" className="w-full bg-viking-red hover:bg-red-800 text-white font-dragon text-xl py-4 rounded shadow-lg border-2 border-viking-gold active:scale-95 transition-transform uppercase tracking-widest">
                    Publier le Parchemin
                </button>
            </form>
        </div>
    );
};

// MODIF : Composant bouton extrait pour uniformiser
const ToolButton = ({ label, onClick }) => (
    <button type="button" onClick={onClick} className="bg-stone-700 hover:bg-stone-600 text-stone-200 border border-stone-600 hover:text-white px-4 py-3 rounded flex-grow md:flex-grow-0 text-sm font-bold uppercase tracking-wider transition-colors active:bg-stone-500">
        + {label}
    </button>
);

export default CreateArticlePage;