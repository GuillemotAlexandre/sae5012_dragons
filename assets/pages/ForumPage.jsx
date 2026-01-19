import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ArticleForm from "../components/ArticleForm";

const ForumPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // État pour le tri
    const [sortOrder, setSortOrder] = useState("newest");

    // Gestion de la navigation interne
    const [view, setView] = useState("list"); // 'list', 'create', 'edit'
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        // 1. Récupération et décodage du Token
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (e) {
                console.error("Badge (Token) invalide ou expiré");
            }
        }
    }, []);

    // Recharger quand le tri change
    useEffect(() => {
        fetchArticles();
    }, [sortOrder]);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            let url = "/api/articles";
            // Logique de tri API Platform
            switch (sortOrder) {
                case "best_rating":
                    url += "?order[averageRating]=desc";
                    break;
                case "worst_rating":
                    url += "?order[averageRating]=asc";
                    break;
                case "oldest":
                    url += "?order[createdAt]=asc";
                    break;
                case "newest":
                default:
                    url += "?order[createdAt]=desc";
                    break;
            }

            const res = await fetch(url, {
                headers: { Accept: "application/ld+json" },
            });
            const data = await res.json();
            setArticles(data["hydra:member"] || data["member"] || []);
        } catch (err) {
            console.error("Erreur de liaison avec le Grand Conseil", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (
            !window.confirm(
                "Voulez-vous vraiment effacer ce récit de la pierre ?",
            )
        )
            return;

        try {
            const res = await fetch(`/api/articles/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (res.ok) {
                setArticles(
                    articles.filter((a) => {
                        const aId = (a.id || a["@id"])
                            .toString()
                            .split("/")
                            .pop();
                        return aId !== id.toString();
                    }),
                );
            } else {
                alert(
                    "Les dragons protègent ce parchemin (Erreur de permissions).",
                );
            }
        } catch (err) {
            alert("Le serveur est injoignable.");
        }
    };

    const handleSuccess = () => {
        setView("list");
        setSelectedId(null);
        fetchArticles();
    };

    // 🛡️ --- LOGIQUE DES RÔLES ---
    const userRoles = user?.roles || [];
    const superEditors = [
        "ROLE_EDITEUR",
        "ROLE_ADMIN",
        "ROLE_DESIGNER",
        "ROLE_FOURNISSEUR",
    ];
    const isSuperEditor = superEditors.some((r) => userRoles.includes(r));
    const isAuthor = userRoles.includes("ROLE_AUTEUR");
    const canCreate = isSuperEditor || isAuthor;

    if (loading && view === "list") {
        return (
            <div className="flex flex-col items-center justify-center py-40">
                <div className="w-12 h-12 border-4 border-viking-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-viking-gold font-dragon text-xl animate-pulse uppercase">
                    Ouverture des parchemins...
                </p>
            </div>
        );
    }

    return (
        // MODIF : px-4 pour les marges mobiles
        <div className="max-w-6xl mx-auto px-4 pb-20">
            {/* --- HEADER --- */}
            {/* MODIF : flex-col pour empiler titre et filtres sur mobile, items-start par défaut */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-viking-gold/20 pb-8 gap-6 md:gap-4">
                <div>
                    {/* MODIF : Taille titre adaptée */}
                    <h1 className="text-4xl md:text-6xl font-dragon text-viking-parchment uppercase tracking-tighter">
                        Chroniques
                    </h1>
                    <p className="text-stone-500 italic text-sm mt-2">
                        Le savoir du village de Berk, gravé pour l'éternité.
                    </p>
                </div>

                {view === "list" && (
                    // MODIF : w-full sur mobile pour que les filtres prennent toute la largeur
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        {/* SELECTEUR DE TRI */}
                        {/* MODIF : w-full sur mobile */}
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="w-full sm:w-auto bg-black/50 border border-viking-gold/50 text-viking-gold py-3 px-4 rounded cursor-pointer uppercase text-xs font-bold tracking-widest focus:outline-none focus:border-viking-gold hover:bg-stone-900 transition"
                        >
                            <option value="newest">📅 Plus Récents</option>
                            <option value="oldest">📜 Plus Anciens</option>
                            <option value="best_rating">🌟 Mieux Notés</option>
                            <option value="worst_rating">💀 Moins Notés</option>
                        </select>

                        {/* 🔒 BOUTON CRÉER */}
                        {canCreate && (
                            <button
                                onClick={() => {
                                    setSelectedId(null);
                                    setView("create");
                                }}
                                // MODIF : w-full sur mobile
                                className="w-full sm:w-auto bg-viking-gold text-black px-8 py-3 font-black hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.2)] uppercase text-xs tracking-widest"
                            >
                                + Graver un récit
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* --- VUES FORMULAIRES --- */}
            {view === "create" || view === "edit" ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <button
                        onClick={() => {
                            setView("list");
                            setSelectedId(null);
                        }}
                        className="mb-8 text-stone-500 hover:text-viking-gold flex items-center gap-2 transition uppercase text-[10px] font-bold tracking-widest"
                    >
                        ← Retour au mur des légendes
                    </button>
                    <ArticleForm id={selectedId} onSuccess={handleSuccess} />
                </div>
            ) : (
                /* --- VUE LISTE DES ARTICLES --- */
                <div className="grid gap-6">
                    {articles.length === 0 ? (
                        <p className="text-center py-20 text-stone-600 italic">
                            Le silence règne sur le mur... Aucune chronique n'a
                            été trouvée.
                        </p>
                    ) : (
                        articles.map((article) => {
                            const cleanId = (article.id || article["@id"])
                                .toString()
                                .split("/")
                                .pop();
                            const isOwner = user?.id === article.author?.id;
                            const canEditThis =
                                isSuperEditor || (isAuthor && isOwner);

                            return (
                                <article
                                    key={cleanId}
                                    // MODIF : p-5 sur mobile, p-8 sur desktop
                                    className="group bg-stone-900/40 border-l-4 border-stone-800 hover:border-viking-gold transition-all duration-300 p-5 md:p-8 relative"
                                >
                                    {/* MODIF : flex-col sur mobile pour titre et boutons */}
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4 md:gap-0">
                                        <div className="flex items-center gap-4">
                                            {/* MODIF : Taille titre adaptée */}
                                            <h2 className="text-xl md:text-3xl font-dragon text-viking-gold group-hover:text-white transition-colors uppercase leading-tight">
                                                {article.title}
                                            </h2>
                                            {article.averageRating && (
                                                <span className="text-yellow-500 text-xs md:text-sm font-bold border border-yellow-500/30 px-2 py-0.5 rounded bg-yellow-500/10 whitespace-nowrap">
                                                    ★ {article.averageRating}
                                                </span>
                                            )}
                                        </div>

                                        {/* 🔒 BOUTONS D'ACTION */}
                                        {canEditThis && (
                                            // MODIF : opacity-100 sur mobile (car pas de hover), md:opacity-40 sur ordi
                                            <div className="flex gap-2 opacity-100 md:opacity-40 md:group-hover:opacity-100 transition-opacity w-full md:w-auto">
                                                <button
                                                    onClick={() => {
                                                        setSelectedId(cleanId);
                                                        setView("edit");
                                                    }}
                                                    // MODIF : flex-1 sur mobile pour des boutons larges
                                                    className="flex-1 md:flex-none text-center text-[9px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-2 md:py-1 border border-stone-700 hover:text-white hover:border-viking-gold transition"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(cleanId)
                                                    }
                                                    className="flex-1 md:flex-none text-center text-[9px] uppercase font-black bg-red-900/10 text-red-500/70 px-3 py-2 md:py-1 border border-red-900/30 hover:bg-red-900 hover:text-white transition"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* MODIF : text-base sur mobile, text-lg sur desktop */}
                                    <p className="text-stone-400 font-serif italic text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl text-justify md:text-left">
                                        "{article.summary}"
                                    </p>

                                    {/* MODIF : flex-col sur mobile pour le footer de carte */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-stone-800/50 gap-4 sm:gap-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-[1px] bg-viking-gold/40"></div>
                                            <span className="text-[10px] text-stone-500 uppercase tracking-widest font-black">
                                                Par{" "}
                                                {article.author?.pseudo ||
                                                    article.author?.username ||
                                                    "Guerrier de l'ombre"}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/article/${cleanId}`}
                                            className="text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2 self-end sm:self-auto"
                                        >
                                            Consulter le parchemin{" "}
                                            <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
};

export default ForumPage;
