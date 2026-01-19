import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';

const COLORS = ['#d4af37', '#b91c1c', '#1c1917', '#57534e', '#a8a29e']; // Couleurs Viking

const CsvChart = ({ csvUrl, vizType = 'bar' }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!csvUrl) return;

        setLoading(true);
        fetch(csvUrl)
            .then(response => {
                if (!response.ok) throw new Error("Impossible de lire le parchemin de données");
                return response.text();
            })
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
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

    if (!csvUrl) return <p className="text-stone-500 italic text-xs text-center p-4">Aucune donnée sélectionnée.</p>;
    if (loading) return <div className="flex justify-center items-center h-full"><p className="text-viking-gold animate-pulse text-xs">Déchiffrage des runes...</p></div>;
    if (error) return <p className="text-red-500 text-xs text-center p-4">Erreur : {error}</p>;
    if (data.length === 0) return <p className="text-stone-500 text-xs text-center p-4">Le fichier est vide.</p>;

    const keys = Object.keys(data[0]);
    const xKey = keys[0];
    const yKey = keys[1];

    // MODIF : Style commun pour les axes (police plus petite)
    const axisStyle = { fontSize: '10px', fill: '#a8a29e' };

    const renderChart = () => {
        switch (vizType) {
            case 'line':
                return (
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey={xKey} stroke="#d4af37" tick={axisStyle} />
                        <YAxis stroke="#d4af37" tick={axisStyle} />
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                        <Line type="monotone" dataKey={yKey} stroke="#d4af37" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
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
                            // MODIF : Label simplifié pour mobile
                            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                            outerRadius="70%" 
                            fill="#8884d8"
                            dataKey={yKey}
                            nameKey={xKey}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '10px' }} layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                );
            case 'bar':
            default:
                return (
                    <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey={xKey} stroke="#d4af37" tick={axisStyle} />
                        <YAxis stroke="#d4af37" tick={axisStyle} />
                        <Tooltip cursor={{fill: '#333'}} contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d4af37', color: '#fff', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                        <Bar dataKey={yKey} fill="#d4af37" radius={[4, 4, 0, 0]} />
                    </BarChart>
                );
        }
    };

    return (
        // MODIF : h-full et w-full pour prendre tout l'espace disponible du parent
        // Le padding est géré par le parent (ArticleForm/Show)
        <div className="w-full h-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
                {renderChart()}
            </ResponsiveContainer>
        </div>
    );
};

export default CsvChart;