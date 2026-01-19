import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import DataProviderSpace from '../components/DataProviderSpace';
import { Link } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('stats');
    const [editingId, setEditingId] = useState(null);

    const token = localStorage.getItem('token');
    let currentUser = null;
    try {
        currentUser = token ? jwtDecode(token) : null;
    } catch (e) {
        console.error("Erreur de décodage du token");
    }

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

    const handleDeleteArticle = async (id) => {
        if (!window.confirm("Êtes-vous sûr de vouloir brûler ce parchemin définitivement ?")) return;

        try {
            const res = await fetch(`/api/articles/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.ok) {
                setData(prev => ({
                    ...prev,
                    managementArticles: prev.managementArticles.filter(art => art.id !== id)
                }));
            } else {
                alert("Erreur : Impossible de supprimer (Droits insuffisants ?)");
            }
        } catch (err) {
            console.error(err);
            alert("Erreur serveur.");
        }
    };

    const handleEditSuccess = () => {
        setEditingId(null);
        loadStats();
    }

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
        } catch (err) { alert("Erreur lors du changement de rang"); }
    };

    if (error) return <div className="text-viking-fire p-10 text-center font-dragon">{error}</div>;
    if (!data) return <div className="text-viking-gold p-10 font-dragon animate-pulse text-center">Appel au Grand Conseil...</div>;

    return (
        // MODIF : p-4 sur mobile, p-6 sur desktop
        <div className="max-w-6xl mx-auto p-4 md:p-6 text-white pb-20">
            {/* MODIF : Taille du titre réduite sur mobile */}
            <h1 className="text-3xl md:text-5xl font-dragon text-viking-parchment mb-6 md:mb-10 border-b border-viking-gold/30 pb-4 uppercase text-center md:text-left">
                Palais d'Administration
            </h1>

            {/* Navigation par Onglets responsive */}
            {/* MODIF : flex-wrap permet aux boutons de passer à la ligne sur mobile */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4 justify-center md:justify-start">
                <button onClick={() => setActiveTab('stats')} className={`flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ${activeTab === 'stats' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800'}`}>Vue d'ensemble</button>
                
                {isFullAdmin && (
                    <button onClick={() => setActiveTab('users')} className={`flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ${activeTab === 'users' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800'}`}>Population</button>
                )}
                
                {isEditor && (
                    <button onClick={() => setActiveTab('articles')} className={`flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ${activeTab === 'articles' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800'}`}>Chroniques</button>
                )}

                {isProvider && (
                    <button onClick={() => setActiveTab('data')} className={`flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ${activeTab === 'data' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800'}`}>Données (CSV)</button>
                )}

                {isDesigner && (
                    <button onClick={() => setActiveTab('design')} className={`flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ${activeTab === 'design' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800'}`}>Apparence</button>
                )}
            </div>

            {/* CONTENU DYNAMIQUE */}
            <div className="min-h-[400px]">
                
                {activeTab === 'stats' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                        <div className="bg-stone-900 border-l-4 border-viking-gold p-6 shadow-xl">
                            <h2 className="text-stone-500 uppercase text-xs font-black">Habitants</h2>
                            <p className="text-4xl font-dragon mt-2 text-white">{data.usersCount}</p>
                        </div>
                        <div className="bg-stone-900 border-l-4 border-viking-fire p-6 shadow-xl">
                            <h2 className="text-stone-500 uppercase text-xs font-black">Articles</h2>
                            <p className="text-4xl font-dragon mt-2 text-white">{data.articlesCount}</p>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && isFullAdmin && (
                    <div className="space-y-4 animate-fadeIn">
                        <input 
                            type="text" 
                            placeholder="Chercher un guerrier..." 
                            className="bg-black/40 border border-viking-gold/20 p-3 rounded text-sm w-full outline-none focus:border-viking-gold"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {data.allUsers?.filter(u => u.pseudo.toLowerCase().includes(searchTerm.toLowerCase())).map(u => (
                            // MODIF : flex-col sur mobile pour empiler pseudo et bouton
                            <div key={u.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-stone-900/50 border border-stone-800 gap-3">
                                <div>
                                    <p className="font-bold text-viking-parchment text-lg">{u.pseudo}</p>
                                    <p className="text-[10px] text-stone-500 mt-1">{u.roles.join(' | ')}</p>
                                </div>
                                <button onClick={() => handlePromote(u.id)} className="w-full sm:w-auto text-xs border border-viking-gold/40 px-4 py-2 hover:bg-viking-gold hover:text-black transition uppercase font-black rounded">
                                    Changer Rang
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'articles' && (
                    <div className="animate-fadeIn">
                        
                        {editingId ? (
                            <div className="bg-stone-900 p-4 border border-viking-gold">
                                <button 
                                    onClick={() => setEditingId(null)}
                                    className="mb-4 text-stone-500 hover:text-white uppercase text-xs font-bold tracking-widest flex items-center gap-2"
                                >
                                    <span>←</span> Annuler la modification
                                </button>
                                <ArticleForm id={editingId} onSuccess={handleEditSuccess} />
                            </div>
                        ) : (
                            <div className="grid gap-3">
                                {data.managementArticles?.map(art => (
                                    // MODIF : flex-col sur mobile pour empiler titre et boutons
                                    <div key={art.id} className="p-4 bg-stone-900 border border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-stone-600 transition-colors group gap-4">
                                        
                                        <div className="flex-1 w-full">
                                            <Link 
                                                to={`/article/${art.id}`} 
                                                className="font-bold text-viking-parchment group-hover:text-viking-gold transition-colors text-lg block truncate"
                                            >
                                                {art.title}
                                            </Link>
                                            <div className="text-stone-500 text-xs mt-1">
                                                Par <span className="text-stone-400">{art.author}</span> • {new Date(art.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                        
                                        {/* MODIF : w-full sur mobile, boutons en pleine largeur */}
                                        <div className="flex items-center gap-3 w-full sm:w-auto">
                                            <button 
                                                onClick={() => setEditingId(art.id)}
                                                className="flex-1 sm:flex-none px-3 py-3 sm:py-2 bg-stone-800 text-stone-300 border border-stone-600 hover:border-viking-gold hover:text-white text-[10px] uppercase font-bold tracking-widest transition text-center rounded"
                                            >
                                                Modifier
                                            </button>

                                            <button 
                                                onClick={() => handleDeleteArticle(art.id)}
                                                className="flex-1 sm:flex-none px-3 py-3 sm:py-2 bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900 hover:text-white text-[10px] uppercase font-bold tracking-widest transition text-center rounded"
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                
                                {(!data.managementArticles || data.managementArticles.length === 0) && (
                                    <p className="text-stone-500 italic text-center py-10">Aucune chronique à gérer.</p>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'data' && isProvider && (
                    <DataProviderSpace datasets={data.datasets} />
                )}

                {activeTab === 'design' && isDesigner && (
                    <div className="p-10 text-center border-2 border-dashed border-stone-800 text-stone-600 uppercase font-black text-sm">
                        Forge de Design (En construction)
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;