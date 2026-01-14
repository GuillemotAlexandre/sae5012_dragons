import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import DataProviderSpace from '../components/DataProviderSpace';
import DesignerSpace from '../components/DesignerSpace';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('stats');

    const token = localStorage.getItem('token');
    let currentUser = null;
    
    try {
        currentUser = token ? jwtDecode(token) : null;
    } catch (e) {
        console.error("Erreur de décodage du token");
    }

    // Définition des accès selon les rôles
    const roles = currentUser?.roles || [];
    const isFullAdmin = roles.includes('ROLE_ADMIN');
    const isProvider = roles.includes('ROLE_FOURNISSEUR') || isFullAdmin;
    const isDesigner = roles.includes('ROLE_DESIGNER') || isFullAdmin;
    const isEditor = roles.includes('ROLE_EDITEUR') || isFullAdmin;

    const loadStats = () => {
        fetch('/api/admin/stats', {
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) throw new Error("Accès refusé par le Grand Conseil");
            return res.json();
        })
        .then(json => setData(json))
        .catch(err => setError(err.message));
    };

    useEffect(() => {
        loadStats();
    }, []);

    const handlePromote = async (userId) => {
        try {
            const response = await fetch(`/api/admin/user/${userId}/promote`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const updatedData = await response.json();
                setData({
                    ...data,
                    allUsers: data.allUsers.map(u => 
                        u.id === userId ? { ...u, roles: updatedData.newRoles } : u
                    )
                });
            }
        } catch (err) { 
            alert("Erreur lors du changement de rang"); 
        }
    };

    if (error) return <div className="text-red-500 p-10 text-center font-dragon">{error}</div>;
    if (!data) return <div className="text-yellow-500 p-10 font-dragon animate-pulse text-center">Appel au Grand Conseil...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 text-white min-h-screen">
            <h1 className="text-5xl font-dragon text-stone-200 mb-10 border-b border-yellow-700/30 pb-4 uppercase tracking-tighter">
                Palais d'Administration
            </h1>

            {/* Navigation par Onglets */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4">
                <button 
                    onClick={() => setActiveTab('stats')} 
                    className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === 'stats' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800'}`}>
                    Vue d'ensemble
                </button>
                
                {isFullAdmin && (
                    <button onClick={() => setActiveTab('users')} className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === 'users' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800'}`}>Population</button>
                )}
                
                {isEditor && (
                    <button onClick={() => setActiveTab('articles')} className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === 'articles' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800'}`}>Chroniques</button>
                )}

                {isProvider && (
                    <button onClick={() => setActiveTab('data')} className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === 'data' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800'}`}>Données (CSV)</button>
                )}

                {isDesigner && (
                    <button onClick={() => setActiveTab('design')} className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === 'design' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800'}`}>Apparence</button>
                )}
            </div>

            {/* CONTENU DYNAMIQUE */}
            <div className="min-h-[500px]">
                
                {/* ONGLET STATS */}
                {activeTab === 'stats' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                        <div className="bg-stone-900 border-l-4 border-yellow-600 p-8 shadow-2xl rounded-r-lg">
                            <h2 className="text-stone-500 uppercase text-xs font-black tracking-widest">Guerriers de Berk</h2>
                            <p className="text-5xl font-dragon mt-2 text-white">{data.usersCount}</p>
                        </div>
                        <div className="bg-stone-900 border-l-4 border-orange-700 p-8 shadow-2xl rounded-r-lg">
                            <h2 className="text-stone-500 uppercase text-xs font-black tracking-widest">Chroniques écrites</h2>
                            <p className="text-5xl font-dragon mt-2 text-white">{data.articlesCount}</p>
                        </div>
                    </div>
                )}

                {/* ONGLET USERS */}
                {activeTab === 'users' && isFullAdmin && (
                    <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                        <input 
                            type="text" 
                            placeholder="Chercher un guerrier dans la brume..." 
                            className="bg-black/60 border border-yellow-900/30 p-4 rounded text-sm w-full outline-none focus:border-yellow-600 transition-colors"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="grid gap-3">
                            {data.allUsers?.filter(u => u.pseudo.toLowerCase().includes(searchTerm.toLowerCase())).map(u => (
                                <div key={u.id} className="flex justify-between items-center p-4 bg-stone-900/40 border border-stone-800 rounded hover:border-stone-700 transition-all">
                                    <div>
                                        <p className="font-bold text-stone-200">{u.pseudo}</p>
                                        <p className="text-[10px] text-stone-500 uppercase tracking-tighter">{u.roles.join(' • ')}</p>
                                    </div>
                                    <button onClick={() => handlePromote(u.id)} className="text-[10px] border border-yellow-700/40 px-4 py-2 hover:bg-yellow-600 hover:text-black transition-all font-black uppercase">Changer Rang</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ONGLET ARTICLES */}
                {activeTab === 'articles' && (
                    <div className="grid gap-3 animate-in fade-in duration-500">
                        {data.managementArticles?.map(art => (
                            <div key={art.id} className="p-5 bg-stone-900/80 border border-stone-800 flex justify-between items-center rounded">
                                <div>
                                    <span className="text-lg font-semibold text-stone-200">{art.title}</span>
                                    <p className="text-xs text-stone-500 italic mt-1 font-serif">dicté par {art.author}</p>
                                </div>
                                <span className="text-stone-600 text-xs font-mono bg-black/30 px-2 py-1 rounded">{art.createdAt}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* ONGLET DATA */}
                {activeTab === 'data' && isProvider && (
                    <div className="animate-in zoom-in-95 duration-500">
                        <DataProviderSpace datasets={data.datasets} />
                    </div>
                )}

                {/* ONGLET DESIGN (TON NOUVEL ESPACE) */}
                {activeTab === 'design' && isDesigner && (
                    <div className="animate-in fade-in duration-700">
                        <DesignerSpace />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;