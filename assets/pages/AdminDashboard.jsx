import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import DataProviderSpace from '../components/DataProviderSpace'; // On l'importera juste après
import { Link } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('stats'); // Système d'onglets
    const [editingId, setEditingId] = useState(null);

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


    const handleDeleteArticle = async (id) => {
        if (!window.confirm("Êtes-vous sûr de vouloir brûler ce parchemin définitivement ?")) return;

        try {
            const res = await fetch(`/api/articles/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.ok) {
                // On met à jour l'affichage localement sans recharger toute la page
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
        setEditingId(null); // On quitte le mode édition
        loadStats(); // On recharge les données pour voir les changements (titre, etc.)
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
        <div className="max-w-6xl mx-auto p-6 text-white">
            <h1 className="text-5xl font-dragon text-viking-parchment mb-10 border-b border-viking-gold/30 pb-4 uppercase">
                Palais d'Administration
            </h1>

            {/* Navigation par Onglets */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4">
                <button onClick={() => setActiveTab('stats')} className={`px-4 py-2 text-xs font-black uppercase transition ${activeTab === 'stats' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500'}`}>Vue d'ensemble</button>
                
                {isFullAdmin && (
                    <button onClick={() => setActiveTab('users')} className={`px-4 py-2 text-xs font-black uppercase transition ${activeTab === 'users' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500'}`}>Population</button>
                )}
                
                {isEditor && (
                    <button onClick={() => setActiveTab('articles')} className={`px-4 py-2 text-xs font-black uppercase transition ${activeTab === 'articles' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500'}`}>Chroniques</button>
                )}

                {isProvider && (
                    <button onClick={() => setActiveTab('data')} className={`px-4 py-2 text-xs font-black uppercase transition ${activeTab === 'data' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500'}`}>Données (CSV)</button>
                )}

                {isDesigner && (
                    <button onClick={() => setActiveTab('design')} className={`px-4 py-2 text-xs font-black uppercase transition ${activeTab === 'design' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500'}`}>Apparence</button>
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
                            className="bg-black/40 border border-viking-gold/20 p-2 rounded text-sm w-full outline-none"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {data.allUsers?.filter(u => u.pseudo.toLowerCase().includes(searchTerm.toLowerCase())).map(u => (
                            <div key={u.id} className="flex justify-between items-center p-3 bg-stone-900/50 border border-stone-800">
                                <div>
                                    <p className="font-bold text-viking-parchment">{u.pseudo}</p>
                                    <p className="text-[10px] text-stone-500">{u.roles.join(' | ')}</p>
                                </div>
                                <button onClick={() => handlePromote(u.id)} className="text-[10px] border border-viking-gold/40 px-3 py-1 hover:bg-viking-gold hover:text-black transition uppercase font-black">Changer Rang</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'articles' && (
                    <div className="animate-fadeIn">
                        
                        {/* CAS 1 : MODE ÉDITION ACTIF */}
                        {editingId ? (
                            <div className="bg-stone-900 p-4 border border-viking-gold">
                                <button 
                                    onClick={() => setEditingId(null)}
                                    className="mb-4 text-stone-500 hover:text-white uppercase text-xs font-bold tracking-widest"
                                >
                                    ← Annuler la modification
                                </button>
                                {/* On réutilise ton super formulaire */}
                                <ArticleForm id={editingId} onSuccess={handleEditSuccess} />
                            </div>
                        ) : (
                            /* CAS 2 : LISTE DES ARTICLES */
                            <div className="grid gap-2">
                                {data.managementArticles?.map(art => (
                                    <div key={art.id} className="p-4 bg-stone-900 border border-stone-800 flex justify-between items-center hover:border-stone-600 transition-colors group">
                                        
                                        <div className="flex-1">
                                            <Link 
                                                to={`/article/${art.id}`} 
                                                className="font-bold text-viking-parchment group-hover:text-viking-gold transition-colors text-lg"
                                            >
                                                {art.title}
                                            </Link>
                                            <div className="text-stone-500 text-xs mt-1">
                                                Par <span className="text-stone-400">{art.author}</span> • Le {new Date(art.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                        
                                        {/* 👇 LES NOUVEAUX BOUTONS D'ACTION */}
                                        <div className="flex items-center gap-3 ml-4">
                                            {/* BOUTON MODIFIER */}
                                            <button 
                                                onClick={() => setEditingId(art.id)}
                                                className="px-3 py-2 bg-stone-800 text-stone-300 border border-stone-600 hover:border-viking-gold hover:text-white text-[10px] uppercase font-bold tracking-widest transition"
                                            >
                                                Modifier
                                            </button>

                                            {/* BOUTON SUPPRIMER */}
                                            <button 
                                                onClick={() => handleDeleteArticle(art.id)}
                                                className="px-3 py-2 bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900 hover:text-white text-[10px] uppercase font-bold tracking-widest transition"
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                
                                {(!data.managementArticles || data.managementArticles.length === 0) && (
                                    <p className="text-stone-500 italic text-center">Aucune chronique à gérer.</p>
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