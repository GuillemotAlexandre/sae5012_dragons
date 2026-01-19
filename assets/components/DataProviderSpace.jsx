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

        const payload = {
            name: datasetName,
            source: file.name,
            metadata: {
                columns: columnMapping,
                uploadedAt: new Date().toISOString(),
                rowCount: preview.length
            }
        };

        try {
            const response = await fetch('/api/datasets', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
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
        // MODIF : space-y-4 sur mobile pour compacter
        <div className="space-y-4 md:space-y-6 animate-fadeIn">
            
            {/* Formulaire d'importation */}
            {/* MODIF : p-4 sur mobile */}
            <div className="bg-black/40 p-4 md:p-6 border border-viking-gold/30 rounded-lg shadow-xl">
                <h3 className="text-viking-gold font-dragon text-lg md:text-xl mb-4 uppercase tracking-widest text-center md:text-left">
                    Nouvelle Archive de Données
                </h3>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <div className="w-full">
                        <label className="block text-stone-500 text-[10px] uppercase font-black mb-2">Fichier CSV uniquement</label>
                        <input 
                            type="file" accept=".csv" onChange={handleFileChange}
                            className="block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-black file:uppercase file:bg-viking-gold file:text-black hover:file:bg-white transition-all cursor-pointer"
                        />
                    </div>
                    {file && (
                        <div className="w-full md:w-auto pt-2 md:pt-6">
                            <button 
                                onClick={handleUpload} disabled={isUploading}
                                className="w-full md:w-auto bg-viking-fire text-white py-3 px-8 font-black uppercase text-xs shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale rounded"
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
                    {/* Le scroll horizontal est géré ici par overflow-x-auto */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/60">
                                    {headers.map(h => (
                                        // MODIF : min-w pour forcer la largeur et activer le scroll
                                        <th key={h} className="p-3 md:p-4 border-r border-white/5 min-w-[140px] align-top">
                                            <div className="text-viking-parchment text-xs font-bold mb-2 truncate" title={h}>{h}</div>
                                            <button 
                                                onClick={() => toggleType(h)}
                                                className={`text-[9px] w-full px-2 py-1 rounded-full font-black uppercase tracking-tighter transition-colors border ${columnMapping[h] === 'numerical' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' : 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30'}`}
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
                                            // MODIF : whitespace-nowrap pour éviter les retours à la ligne moches dans les cellules
                                            <td key={h} className="p-3 md:p-4 text-[10px] md:text-[11px] text-stone-400 border-r border-white/5 italic whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
                                                {row[h]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Archives existantes */}
            <div className="mt-8 md:mt-12">
                <h3 className="text-viking-gold/40 font-dragon text-sm mb-4 md:mb-6 uppercase tracking-widest border-b border-viking-gold/20 pb-2">Registres déjà présents</h3>
                
                {/* MODIF : grid responsive 1 -> 2 -> 3 colonnes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {datasets?.length > 0 ? datasets.map(ds => (
                        <div key={ds.id} className="p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition-all group rounded">
                            <div className="text-viking-parchment font-bold text-sm group-hover:text-viking-gold transition-colors truncate" title={ds.name}>{ds.name}</div>
                            
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[9px] text-stone-600 uppercase font-bold italic truncate max-w-[60%]" title={ds.source}>{ds.source}</span>
                                <span className="text-[9px] bg-stone-800 px-2 py-0.5 rounded text-stone-400 whitespace-nowrap">{ds.rowsCount} lignes</span>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-10 text-center border-2 border-dashed border-stone-800 text-stone-600 text-xs uppercase font-black rounded">
                            Aucune donnée n'a été gravée pour le moment.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DataProviderSpace;