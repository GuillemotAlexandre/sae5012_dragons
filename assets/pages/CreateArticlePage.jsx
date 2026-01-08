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
        <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl font-dragon text-viking-gold mb-8 text-center">Écrire une Nouvelle Chronique</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-viking-rock p-6 rounded border-2 border-stone-600">
                    <label className="block text-viking-light mb-2">Titre du Récit</label>
                    <input type="text" className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white focus:border-viking-gold outline-none" 
                           value={title} onChange={e => setTitle(e.target.value)} required />
                    
                    <label className="block text-viking-light mt-4 mb-2">Résumé</label>
                    <textarea className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white h-24 focus:border-viking-gold outline-none" 
                              value={summary} onChange={e => setSummary(e.target.value)} required />

                    <label className="block text-viking-light mt-4 mb-2">Musique d'ambiance</label>
                    <select className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white"
                            value={music} onChange={e => setMusic(e.target.value)}>
                        {musicOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                </div>

                <div className="space-y-4">
                    {blocks.map((block, index) => (
                        <div key={index} className="bg-stone-800 p-4 rounded border border-stone-600 relative">
                            <button type="button" onClick={() => {
                                const newB = [...blocks]; newB.splice(index, 1); setBlocks(newB);
                            }} className="absolute top-2 right-2 text-red-500 hover:text-red-400">✖</button>
                            
                            <h4 className="text-viking-gold font-bold mb-2 uppercase">{block.type}</h4>
                            
                            <input type="text" placeholder="Titre du bloc (optionnel)" 
                                   className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white mb-2"
                                   value={block.title} onChange={e => updateBlock(index, 'title', e.target.value)} />

                            {block.type === 'text' && (
                                <textarea className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white h-32"
                                          placeholder="Contenu..."
                                          value={block.content} onChange={e => updateBlock(index, 'content', e.target.value)} />
                            )}

                            {block.type === 'image' && (
                                <input type="file" accept="image/*" className="text-white"
                                       onChange={e => updateBlock(index, 'file', e.target.files[0])} />
                            )}

                            {block.type === 'viz' && (
                                <div>
                                    <select className="w-full bg-stone-900 border border-stone-600 p-2 rounded text-white mb-2"
                                            value={block.vizType} onChange={e => updateBlock(index, 'vizType', e.target.value)}>
                                        <option value="bar">Barres</option>
                                        <option value="pie">Camembert</option>
                                        <option value="line">Courbe</option>
                                    </select>
                                    <input type="file" accept=".csv" className="text-white"
                                           onChange={e => updateBlock(index, 'file', e.target.files[0])} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 justify-center">
                    <button type="button" onClick={() => addBlock('text')} className="bg-stone-700 hover:bg-stone-600 text-white px-3 py-2 rounded">+ Texte</button>
                    <button type="button" onClick={() => addBlock('title_h2')} className="bg-stone-700 hover:bg-stone-600 text-white px-3 py-2 rounded">+ Titre</button>
                    <button type="button" onClick={() => addBlock('image')} className="bg-stone-700 hover:bg-stone-600 text-white px-3 py-2 rounded">+ Image</button>
                    <button type="button" onClick={() => addBlock('viz')} className="bg-stone-700 hover:bg-stone-600 text-white px-3 py-2 rounded">+ Graphique</button>
                </div>

                <button type="submit" className="w-full bg-viking-red hover:bg-red-800 text-white font-dragon text-xl py-3 rounded shadow-lg border-2 border-viking-gold">
                    Publier le Parchemin
                </button>
            </form>
        </div>
    );
};

export default CreateArticlePage;