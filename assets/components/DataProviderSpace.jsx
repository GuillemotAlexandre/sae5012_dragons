import React, { useState } from 'react';
import Papa from 'papaparse';

const DataProviderSpace = ({ datasets }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [columnMapping, setColumnMapping] = useState({});
    const [datasetName, setDatasetName] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setFile(selectedFile);
        setDatasetName(selectedFile.name.replace('.csv', ''));

        Papa.parse(selectedFile, {
            header: true,
            skipEmptyLines: true,
            preview: 5,
            complete: (results) => {
                if (results.data.length > 0) {
                    const cols = Object.keys(results.data[0]);
                    setHeaders(cols);
                    setPreview(results.data);
                    
                    const initialMapping = {};
                    cols.forEach(h => initialMapping[h] = 'categorical');
                    setColumnMapping(initialMapping);
                }
            }
        });
    };

    const toggleType = (header) => {
        setColumnMapping(prev => ({
            ...prev,
            [header]: prev[header] === 'categorical' ? 'numerical' : 'categorical'
        }));
    };

    const handleUpload = async () => {
        setIsUploading(true);
        const token = localStorage.getItem('token');

        // Préparation du payload conforme à API Platform
        const payload = {
            name: datasetName,
            source: file.name,
            metadata: {
                columns: columnMapping,
                uploadedAt: new Date().toISOString(),
                rowCount: preview.length // Information utile pour ton affichage
            }
        };

        try {
            const response = await fetch('/api/datasets', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // Changement crucial ici pour éviter l'erreur 415
                    'Content-Type': 'application/ld+json',
                    'Accept': 'application/ld+json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Parchemin de données enregistré dans la bibliothèque d'Odin !");
                window.location.reload(); 
            } else {
                const errorData = await response.json();
                console.error("Réponse du serveur :", errorData);
                alert("Erreur : Le Scribe refuse le format du fichier.");
            }
        } catch (error) {
            console.error("Erreur réseau", error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            {/* Formulaire d'importation */}
            <div className="bg-black/40 p-6 border border-viking-gold/30 rounded-lg shadow-xl">
                <h3 className="text-viking-gold font-dragon text-xl mb-4 uppercase tracking-widest">Nouvelle Archive de Données</h3>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full">
                        <label className="block text-stone-500 text-[10px] uppercase font-black mb-2">Fichier CSV uniquement</label>
                        <input 
                            type="file" accept=".csv" onChange={handleFileChange}
                            className="block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-black file:uppercase file:bg-viking-gold file:text-black hover:file:bg-white transition-all cursor-pointer"
                        />
                    </div>
                    {file && (
                        <div className="w-full md:w-auto pt-6">
                            <button 
                                onClick={handleUpload} disabled={isUploading}
                                className="w-full bg-viking-fire text-white py-3 px-8 font-black uppercase text-xs shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                            >
                                {isUploading ? 'Gravure...' : 'Sceller l\'Archive'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Aperçu Technique */}
            {preview.length > 0 && (
                <div className="bg-stone-900/80 border border-viking-gold/10 rounded overflow-hidden">
                    <div className="bg-black/40 p-3 border-b border-white/5">
                        <span className="text-[10px] font-black uppercase text-viking-gold/50">Analyse de la structure</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/60">
                                    {headers.map(h => (
                                        <th key={h} className="p-4 border-r border-white/5 min-w-[150px]">
                                            <div className="text-viking-parchment text-xs font-bold mb-3 truncate">{h}</div>
                                            <button 
                                                onClick={() => toggleType(h)}
                                                className={`text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-tighter transition-colors ${columnMapping[h] === 'numerical' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'}`}
                                            >
                                                {columnMapping[h] === 'numerical' ? '🔢 Numérique' : '🔤 Catégoriel'}
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {preview.map((row, i) => (
                                    <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                                        {headers.map(h => (
                                            <td key={h} className="p-4 text-[11px] text-stone-400 border-r border-white/5 italic">{row[h]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Archives existantes */}
            <div className="mt-12">
                <h3 className="text-viking-gold/40 font-dragon text-sm mb-6 uppercase tracking-widest border-b border-viking-gold/20 pb-2">Registres déjà présents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {datasets?.length > 0 ? datasets.map(ds => (
                        <div key={ds.id} className="p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition-all group">
                            <div className="text-viking-parchment font-bold text-sm group-hover:text-viking-gold transition-colors">{ds.name}</div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[9px] text-stone-600 uppercase font-bold italic">{ds.source}</span>
                                <span className="text-[9px] bg-stone-800 px-2 py-0.5 rounded text-stone-400">{ds.rowsCount} lignes</span>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-10 text-center border-2 border-dashed border-stone-800 text-stone-600 text-xs uppercase font-black">
                            Aucune donnée n'a été gravée pour le moment.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DataProviderSpace;