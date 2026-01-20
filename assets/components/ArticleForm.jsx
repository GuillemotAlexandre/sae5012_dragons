import React, { useState, useEffect } from 'react';

import CsvChart from './CsvChart'; 

const ArticleForm = ({ id = null, onSuccess }) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [blocs, setBlocs] = useState([]);
    
    
    const [musicLibrary, setMusicLibrary] = useState([]);
    const [datasetLibrary, setDatasetLibrary] = useState([]); 

    const [loading, setLoading] = useState(false);

   
    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`/api/articles/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setSummary(data.summary);
                    
                  
                    const formattedBlocs = (data.blocs || [])
                        .sort((a, b) => a.position - b.position)
                        .map(b => {
                            let vizType = 'bar';
                            let content = b.content || '';
                            
                          
                            if (b.type === 'stats' || b.type === 'viz') {
                                const parts = content.split('::');
                                vizType = parts[0] || 'bar';
                                content = parts[1] || ''; 
                            }

                            return {
                                id: b.id, 
                                type: b.type,
                                content: content, 
                                mediaUrl: content, 
                                vizType: vizType,
                                file: null
                            };
                        });
                    
                    setBlocs(formattedBlocs);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Erreur chargement article", err);
                    setLoading(false);
                });
        }
    }, [id]);


    useEffect(() => {
    
        fetch('/api/music/list')
            .then(res => res.ok ? res.json() : [])
            .then(data => {
                if (data) setMusicLibrary(data);
            })
            .catch(err => console.error("Erreur musique", err));

        fetch('/api/list-datasets') 
            .then(res => {
                if (!res.ok) throw new Error("Erreur API Dataset");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setDatasetLibrary(data);
                } else {
                    setDatasetLibrary([]);
                }
            })
            .catch(err => {
                console.error("Impossible de charger les datasets", err);
                setDatasetLibrary([]);
            });
    }, []);

    const addBloc = (type) => {
        setBlocs([...blocs, { 
            type, 
            content: '', 
            mediaUrl: '', 
            vizType: 'bar', 
            file: null,   
            
        }]);
    };

    const removeBloc = (indexToRemove) => {
        setBlocs(blocs.filter((_, index) => index !== indexToRemove));
    };

    const updateBloc = (index, field, value) => {
        const newBlocs = [...blocs];
        newBlocs[index][field] = value;
        setBlocs(newBlocs);
    };

    const handleFileChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            updateBloc(index, 'file', file);
            if (file.type.startsWith('image/')) {
                updateBloc(index, 'mediaUrl', URL.createObjectURL(file));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('token');

        try {
            if (id) {

                const articleData = {
                    title,
                    summary,
                    blocs: blocs.map((bloc, index) => {
                        let finalContent = bloc.content;

                        if (bloc.type === 'stats') {
                          
                            finalContent = `${bloc.vizType}::${bloc.mediaUrl}`;
                        } else if (bloc.type === 'music') {
                            finalContent = bloc.mediaUrl; 
                        } else if (bloc.type === 'image') {
                          
                            finalContent = bloc.mediaUrl; 
                        }

                       
                        const blocPayload = {
                            type: bloc.type,
                            position: index + 1,
                            content: finalContent
                        };

                     
                        if (bloc.id) {
                            blocPayload['@id'] = `/api/blocs/${bloc.id}`;
                        }

                        return blocPayload;
                    })
                };

                const response = await fetch(`/api/articles/${id}`, { 
                    method: 'PATCH',
                    headers: { 
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/merge-patch+json' 
                    },
                    body: JSON.stringify(articleData)
                });

                if (response.ok) {
                    alert("Le récit a été réécrit avec succès !");
                    onSuccess();
                } else {
                    throw new Error("Erreur lors de la modification");
                }

            } else {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('summary', summary);

                blocs.forEach((bloc, index) => {
                    formData.append(`blocs[${index}][type]`, bloc.type);
                    formData.append(`blocs[${index}][position]`, index + 1);

                    if (['h2', 'paragraph'].includes(bloc.type)) {
                        formData.append(`blocs[${index}][content]`, bloc.content);
                    }
                    
                    if (bloc.type === 'image' && bloc.file) {
                        formData.append(`blocs[${index}][imageFile]`, bloc.file);
                    }

                    if (bloc.type === 'stats') {
                        formData.append(`blocs[${index}][vizType]`, bloc.vizType);
                        formData.append(`blocs[${index}][csvPath]`, bloc.mediaUrl);
                    }

                    if (bloc.type === 'music') {
                        formData.append(`blocs[${index}][musicFileName]`, bloc.mediaUrl);
                    }
                });

                const response = await fetch('/api/custom/articles/create', { 
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData
                });

                if (response.ok) {
                    alert("Votre récit a été gravé avec succès !");
                    onSuccess(); 
                } else {
                    const errorData = await response.json();
                    alert("Erreur : " + (errorData.message || "Problème serveur"));
                }
            }

        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-stone-900 p-4 md:p-8 border border-stone-800 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase">
                {id ? 'Modifier la Chronique' : 'Nouvelle Chronique'}
            </h2>

            <div className="mb-6">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-black/50 border border-stone-700 text-white p-3 md:p-4 text-xl md:text-2xl outline-none focus:border-viking-gold" placeholder="Titre..." required />
            </div>
            <div className="mb-8">
                <textarea value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full bg-black/50 border border-stone-700 text-stone-300 p-3 md:p-4 h-24 outline-none focus:border-viking-gold" placeholder="Résumé..." required />
            </div>

            <div className="space-y-6 mb-8">
                {blocs.map((bloc, index) => (
                    <div key={bloc.id || index} className="bg-stone-800/50 p-4 md:p-6 border-l-4 border-viking-gold relative">
                        <button type="button" onClick={() => removeBloc(index)} className="absolute top-2 right-2 text-stone-500 hover:text-red-500 text-xs font-bold uppercase transition p-2">Supprimer</button>
                        <p className="text-viking-gold text-xs uppercase font-bold mb-4 tracking-widest">Bloc {index + 1} : {bloc.type}</p>

                        {/* H2 & Paragraph */}
                        {bloc.type === 'h2' && <input type="text" value={bloc.content} onChange={(e) => updateBloc(index, 'content', e.target.value)} className="w-full bg-black border border-stone-600 p-3 text-white font-bold" placeholder="Sous-titre..." />}
                        {bloc.type === 'paragraph' && <textarea value={bloc.content} onChange={(e) => updateBloc(index, 'content', e.target.value)} className="w-full bg-black border border-stone-600 p-3 text-stone-300 h-32" placeholder="Texte..." />}

                        {/* Image */}
                        {bloc.type === 'image' && (
                            <div>
                                {!id && <input type="file" accept="image/*" onChange={(e) => handleFileChange(index, e)} className="text-stone-400 text-sm w-full" />}
                                {bloc.mediaUrl && <img src={bloc.mediaUrl} alt="Preview" className="mt-4 max-h-40 border border-stone-600" />}
                            </div>
                        )}

                        {/* Stats */}
                        {bloc.type === 'stats' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-stone-500 text-xs mb-1 block uppercase font-bold">Données (CSV)</label>
                                        <select 
                                            onChange={(e) => updateBloc(index, 'mediaUrl', e.target.value)}
                                            className="w-full bg-black border border-stone-600 p-3 text-white focus:border-viking-gold outline-none"
                                            value={bloc.mediaUrl || ""}
                                        >
                                            <option value="">-- Choisir un jeu de données --</option>
                                            {Array.isArray(datasetLibrary) && datasetLibrary.map(d => (
                                                <option key={d.id} value={d.source}>{d.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-stone-500 text-xs mb-1 block uppercase font-bold">Type de Graphique</label>
                                        <div className="flex gap-2">
                                            {['bar', 'line', 'pie'].map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => updateBloc(index, 'vizType', type)}
                                                    className={`px-3 py-2 text-xs font-bold uppercase border transition flex-1 md:flex-none ${bloc.vizType === type ? 'bg-viking-gold text-black border-viking-gold' : 'bg-black text-stone-500 border-stone-700 hover:text-white'}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/20 border border-stone-800 flex items-center justify-center min-h-[200px] rounded p-2 overflow-hidden">
                                    {bloc.mediaUrl ? (
                                        <div className="w-full h-full min-h-[200px]">
                                             <CsvChart csvUrl={bloc.mediaUrl} vizType={bloc.vizType || 'bar'} />
                                        </div>
                                    ) : (
                                        <p className="text-stone-600 text-xs italic">Sélectionnez un fichier...</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Musique */}
                        {bloc.type === 'music' && (
                            <select 
                                onChange={(e) => updateBloc(index, 'mediaUrl', e.target.value)} 
                                className="w-full bg-black border border-stone-600 p-3 text-white"
                                value={bloc.mediaUrl || ""}
                            >
                                <option value="">-- Choisir une mélodie --</option>
                                {musicLibrary && Object.entries(musicLibrary).map(([folder, files]) => (
                                    <optgroup key={folder} label={folder.toUpperCase()}>
                                        {Array.isArray(files) && files.map(file => <option key={file} value={`${folder}/${file}`}>{file}</option>)}
                                    </optgroup>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
            </div>

           
            <div className="flex flex-wrap gap-2 justify-center mb-10 pb-10 border-b border-stone-800">
                <ToolBtn label="Titre H2" onClick={() => addBloc('h2')} />
                <ToolBtn label="Paragraphe" onClick={() => addBloc('paragraph')} />
                <ToolBtn label="Image" onClick={() => addBloc('image')} />
                <ToolBtn label="Graphique" onClick={() => addBloc('stats')} />
                <ToolBtn label="Musique" onClick={() => addBloc('music')} />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-viking-gold text-black font-black uppercase py-4 hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 text-sm md:text-base tracking-widest">
                {loading ? (id ? 'Réécriture...' : 'Gravure en cours...') : (id ? 'Mettre à jour le Récit' : 'Publier la Chronique')}
            </button>
        </form>
    );
};

// MODIF : Bouton responsive 
const ToolBtn = ({ label, onClick }) => (
    <button type="button" onClick={onClick} className="px-4 py-3 md:py-2 bg-stone-800 text-stone-300 border border-stone-700 hover:border-viking-gold hover:text-white transition text-xs uppercase font-bold tracking-wider flex-grow md:flex-grow-0 rounded">
        + {label}
    </button>
);

export default ArticleForm;