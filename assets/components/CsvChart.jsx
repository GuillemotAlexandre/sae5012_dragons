import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';

const COLORS = ['#d4af37', '#b91c1c', '#1c1917', '#57534e', '#a8a29e']; // Couleurs Viking (Or, Rouge, Noir...)

const CsvChart = ({ csvUrl, vizType = 'bar' }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!csvUrl) return;

        setLoading(true);
        // 1. On va chercher le fichier CSV via son URL
        fetch(csvUrl)
            .then(response => {
                if (!response.ok) throw new Error("Impossible de lire le parchemin de données");
                return response.text();
            })
            .then(csvText => {
                // 2. On le transforme en JSON utilisable
                Papa.parse(csvText, {
                    header: true, // La première ligne contient les titres
                    dynamicTyping: true, // Convertit les "10" en nombres 10
                    skipEmptyLines: true,
                    complete: (results) => {
                        setData(results.data);
                        setLoading(false);
                    },
                    error: (err) => {
                        setError("Le fichier est illisible.");
                        setLoading(false);
                    }
                });
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [csvUrl]);

    if (!csvUrl) return <p className="text-stone-500 italic text-xs">Aucune donnée sélectionnée.</p>;
    if (loading) return <p className="text-viking-gold animate-pulse text-xs">Déchiffrage des runes...</p>;
    if (error) return <p className="text-red-500 text-xs">Erreur : {error}</p>;
    if (data.length === 0) return <p className="text-stone-500 text-xs">Le fichier est vide.</p>;

    // On devine les clés (X = première colonne, Y = deuxième colonne)
    const keys = Object.keys(data[0]);
    const xKey = keys[0]; // Ex: "Année" ou "Dragon"
    const yKey = keys[1]; // Ex: "Population" ou "Vitesse"

    const renderChart = () => {
        switch (vizType) {
            case 'line':
                return (
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey={xKey} stroke="#d4af37" />
                        <YAxis stroke="#d4af37" />
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff' }} />
                        <Legend />
                        <Line type="monotone" dataKey={yKey} stroke="#d4af37" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                    </LineChart>
                );
            case 'pie':
                return (
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey={yKey}
                            nameKey={xKey}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff' }} />
                    </PieChart>
                );
            case 'bar':
            default:
                return (
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey={xKey} stroke="#d4af37" />
                        <YAxis stroke="#d4af37" />
                        <Tooltip cursor={{fill: '#333'}} contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff' }} />
                        <Legend />
                        <Bar dataKey={yKey} fill="#d4af37" radius={[4, 4, 0, 0]} />
                    </BarChart>
                );
        }
    };

    return (
        <div className="h-64 w-full mt-4 bg-black/40 p-4 border border-stone-800 rounded">
            <ResponsiveContainer width="100%" height="100%">
                {renderChart()}
            </ResponsiveContainer>
        </div>
    );
};

export default CsvChart;