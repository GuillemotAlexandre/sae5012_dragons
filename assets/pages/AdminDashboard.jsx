import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Appel à l'API avec le token JWT stocké
        fetch('/api/admin/stats', {
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) throw new Error("Accès refusé par le Grand Conseil");
            return res.json();
        })
        .then(json => setData(json))
        .catch(err => setError(err.message));
    }, []);

    if (error) return <div className="text-viking-fire p-10 text-center font-dragon">{error}</div>;
    if (!data) return <div className="text-viking-gold p-10 font-dragon animate-pulse text-center">Appel au Grand Conseil...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 text-white">
            <h1 className="text-5xl font-dragon text-viking-parchment mb-10 border-b border-viking-gold/30 pb-4 uppercase">
                Salle de Commandement
            </h1>

            {/* Cartes de Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-stone-900 border-l-4 border-viking-gold p-6 shadow-xl transform hover:scale-105 transition">
                    <h2 className="text-stone-500 uppercase text-xs font-black tracking-widest">Guerriers au village</h2>
                    <p className="text-4xl font-dragon mt-2 text-white">{data.usersCount}</p>
                </div>
                <div className="bg-stone-900 border-l-4 border-viking-fire p-6 shadow-xl transform hover:scale-105 transition">
                    <h2 className="text-stone-500 uppercase text-xs font-black tracking-widest">Chroniques gravées</h2>
                    <p className="text-4xl font-dragon mt-2 text-white">{data.articlesCount}</p>
                </div>
            </div>

            {/* Liste des Membres */}
            <div className="bg-stone-900/50 p-6 rounded border border-stone-800">
                <h3 className="text-viking-gold font-dragon text-xl mb-6 uppercase tracking-wider">Derniers arrivants</h3>
                <div className="space-y-3">
                    {data.recentUsers.map((u, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition">
                            <div className="flex flex-col">
                                <span className="font-bold text-viking-parchment">{u.pseudo}</span>
                                <span className="text-stone-500 text-xs">{u.email}</span>
                            </div>
                            <span className="text-[10px] bg-stone-800 px-3 py-1 rounded text-stone-400 uppercase font-black">
                                {u.roles.includes('ROLE_EDITEUR') ? 'Officier' : 'Guerrier'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;