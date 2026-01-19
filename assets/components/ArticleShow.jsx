// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import CsvChart from "./CsvChart";
// import VikingPlayer from "./VikingPlayer"; // 👈 Import du nouveau player
// import CommentSection from "./CommentSection";
// import StarRating from "./StarRating";

// const ArticleShow = () => {
//     const { id } = useParams();
//     const [article, setArticle] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // 1. Vérif Token pour l'interface (User State)
//         const token = localStorage.getItem('token');
//         if (token) {
//             try { setUser(jwtDecode(token)); } catch (e) {}
//         }

//         // 2. Préparation des En-têtes (HEADERS)
//         // On prépare le badge pour entrer dans le donjon
//         const headers = {
//             'Accept': 'application/ld+json'
//         };
//         if (token) {
//             headers['Authorization'] = `Bearer ${token}`;
//         }

//         // 3. Fetch Article AVEC les headers
//         fetch(`/api/articles/${id}`, { headers: headers }) // 👈 AJOUT ICI
//             .then((res) => (res.ok ? res.json() : Promise.reject("Accès refusé ou introuvable")))
//             .then((data) => {
//                 setArticle(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading)
//         return (
//             <div className="text-center text-viking-gold p-10 animate-pulse">
//                 Invocation du récit...
//             </div>
//         );
//     if (!article)
//         return (
//             <div className="text-center text-red-500 p-10">
//                 Parchemin introuvable.
//             </div>
//         );

//     // 🔎 ON CHERCHE LA MUSIQUE ICI
//     const musicBloc = article.blocs?.find((b) => b.type === "music");
//     // On nettoie le chemin (parfois il a /uploads/..., parfois non)
//     const musicSrc = musicBloc ? `/musique/${musicBloc.content}` : null;

//     // On prépare les autres blocs (sans la musique pour éviter les doublons)
//     const contentBlocs =
//         article.blocs
//             ?.filter((b) => b.type !== "music")
//             .sort((a, b) => a.position - b.position) || [];

//     const handleRate = async (score) => {
//         const token = localStorage.getItem("token");
//         if (!token) return alert("Il faut être connecté pour noter !");

//         try {
//             const res = await fetch("/api/ratings", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/ld+json",
//                     Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                     value: score,
//                     article: `/api/articles/${id}`,
//                 }),
//             });
//             if (res.ok) {
//                 alert("Votre note a été gravée !");
//                 // Optionnel : Recharger l'article pour voir la nouvelle moyenne
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl">
//             <div className="flex justify-between items-center mb-6">
//                 <Link
//                     to="/forum"
//                     className="text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest"
//                 >
//                     ← Retour au Hall
//                 </Link>
//                 <div className="flex justify-center items-center gap-4 mb-6">
//                     <StarRating
//                         articleId={id}
//                         currentRating={article.averageRating}
//                         onRate={handleRate}
//                     />
//                     <span className="text-stone-400 text-sm">
//                         Moyenne : {article.averageRating || "0"}/5
//                     </span>
//                 </div>
//             </div>

//             <h1 className="text-5xl font-dragon text-viking-gold mb-6 text-center uppercase tracking-widest drop-shadow-lg">
//                 {article.title}
//             </h1>

//             <div className="bg-stone-800/50 p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner">
//                 {article.summary}
//             </div>

//             {/* 🎵 LE PLAYER EST ICI (Juste sous le résumé) */}
//             {musicSrc && (
//                 <div className="mb-12 animate-fade-in-up">
//                     <VikingPlayer src={musicSrc} autoPlay={true} />
//                 </div>
//             )}

//             {/* Le reste du contenu */}
//             <div className="space-y-12">
//                 {contentBlocs.map((bloc) => {
//                     switch (bloc.type) {
//                         case "h2":
//                             return (
//                                 <h2
//                                     key={bloc.id}
//                                     className="text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8"
//                                 >
//                                     {bloc.content}
//                                 </h2>
//                             );

//                         case "paragraph":
//                             return (
//                                 <p
//                                     key={bloc.id}
//                                     className="text-stone-300 leading-relaxed text-lg whitespace-pre-line text-justify"
//                                 >
//                                     {bloc.content}
//                                 </p>
//                             );

//                         case "image":
//                             return (
//                                 <figure
//                                     key={bloc.id}
//                                     className="text-center my-8"
//                                 >
//                                     <img
//                                         src={bloc.content}
//                                         alt="Illustration"
//                                         className="mx-auto max-h-[500px] border-4 border-stone-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded"
//                                     />
//                                 </figure>
//                             );

//                         case "stats":
//                         case "viz":
//                             const parts = bloc.content
//                                 ? bloc.content.split("::")
//                                 : [];
//                             return (
//                                 <div
//                                     key={bloc.id}
//                                     className="bg-black/40 border border-stone-700 p-6 rounded-lg my-8"
//                                 >
//                                     <h3 className="text-viking-gold font-bold text-sm uppercase mb-4 tracking-widest text-center">
//                                         📊 Données du Clan
//                                     </h3>
//                                     <div className="h-96">
//                                         <CsvChart
//                                             csvUrl={parts[1]}
//                                             vizType={parts[0] || "bar"}
//                                         />
//                                     </div>
//                                 </div>
//                             );
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>

//             <div className="mt-20 pt-10 border-t border-stone-800 text-center text-stone-600 text-xs uppercase tracking-widest">
//                 Gravé par {article.author?.pseudo || "Un inconnu"} •{" "}
//                 {new Date(article.createdAt).toLocaleDateString()}
//             </div>
//             <CommentSection articleId={id} />
//         </div>
//     );
// };

// export default ArticleShow;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CsvChart from "./CsvChart";
import VikingPlayer from "./VikingPlayer";
import CommentSection from "./CommentSection";
import StarRating from "./StarRating";

const ArticleShow = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/articles/${id}`)
            .then((res) => (res.ok ? res.json() : Promise.reject("Erreur")))
            .then((data) => {
                console.log("Données reçues :", data);
                setArticle(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading)
        return (
            <div className="text-center text-viking-gold p-10 animate-pulse">
                Invocation du récit...
            </div>
        );
    if (!article)
        return (
            <div className="text-center text-red-500 p-10">
                Parchemin introuvable.
            </div>
        );

    // --- LOGIQUE D'EXTRACTION ---
    let customStyles = {};
    const rawConfig = article.designConfig;

    if (rawConfig) {
        try {
            customStyles =
                typeof rawConfig === "string"
                    ? JSON.parse(rawConfig)
                    : rawConfig;
        } catch (e) {
            console.error("Erreur de décodage des styles", e);
        }
    }

    // --- DÉFINITION DES COULEURS ---
    // On utilise les valeurs de la BDD, sinon blanc par défaut (sera géré par la classe CSS)
    const finalTitleColor = customStyles.titleColor || "#ffffff";
    const finalContentBg = customStyles.contentBg || "rgba(41, 37, 36, 0.5)";

    const musicBloc = article.blocs?.find((b) => b.type === "music");
    const musicSrc = musicBloc ? `/musique/${musicBloc.content}` : null;

    const contentBlocs = article.blocs
        ? [...article.blocs]
              .filter((b) => b.type !== "music")
              .sort((a, b) => a.position - b.position)
        : [];



        const handleRate = async (score) => {
        const token = localStorage.getItem("token");
        if (!token) return alert("Il faut être connecté pour noter !");

        try {
            const res = await fetch("/api/ratings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/ld+json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    value: score,
                    article: `/api/articles/${id}`,
                }),
            });
            if (res.ok) {
                alert("Votre note a été gravée !");
                // Optionnel : Recharger l'article pour voir la nouvelle moyenne
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // MODIF : p-4 sur mobile, p-8 sur desktop
        <div className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen bg-stone-900 md:border-x border-stone-800 shadow-2xl">
            
            {/* EN-TÊTE : Bouton Retour et Notation */}
            {/* MODIF : flex-col-reverse sur mobile pour mettre le retour en bas ou flex-col classique */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <Link
                    to="/forum"
                    className="text-stone-500 hover:text-viking-gold inline-block text-xs md:text-sm uppercase tracking-widest order-2 md:order-1"
                >
                    ← Retour au Hall
                </Link>
                
                {/* MODIF : w-full sur mobile pour centrer la notation */}
                <div className="flex justify-between md:justify-center items-center gap-4 w-full md:w-auto order-1 md:order-2 bg-stone-800/50 p-3 rounded md:bg-transparent md:p-0">
                    <StarRating
                        articleId={id}
                        currentRating={article.averageRating}
                        onRate={handleRate}
                    />
                    <span className="text-stone-400 text-xs md:text-sm">
                        Moyenne : {article.averageRating || "0"}/5
                    </span>
                </div>
            </div>

            {/* TITRE */}
            <h1
                style={{ "--article-title-color": finalTitleColor }}
                // MODIF : text-3xl mobile, break-words pour éviter débordement
                className="article-dynamic-title text-3xl md:text-5xl font-dragon mb-6 text-center uppercase tracking-widest drop-shadow-lg transition-all duration-500 break-words leading-tight"
            >
                {article.title}
            </h1>

            {/* RÉSUMÉ */}
            <div
                style={{ backgroundColor: finalContentBg }}
                // MODIF : p-5 sur mobile, text-base
                className="p-5 md:p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-base md:text-lg leading-relaxed shadow-inner transition-all duration-500 text-justify"
            >
                {article.summary}
            </div>

            {musicSrc && (
                <div className="mb-12">
                    <VikingPlayer src={musicSrc} autoPlay={true} />
                </div>
            )}

            <div className="space-y-8 md:space-y-12">
                {contentBlocs.map((bloc) => {
                    switch (bloc.type) {
                        case "h2":
                            return (
                                <h2
                                    key={bloc.id}
                                    // MODIF : text-2xl mobile
                                    className="text-2xl md:text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8 break-words"
                                >
                                    {bloc.content}
                                </h2>
                            );
                        case "paragraph":
                            return (
                                <p
                                    key={bloc.id}
                                    // MODIF : text-base mobile
                                    className="text-stone-300 leading-relaxed text-base md:text-lg whitespace-pre-line text-justify"
                                >
                                    {bloc.content}
                                </p>
                            );
                        case "image":
                            return (
                                <figure
                                    key={bloc.id}
                                    className="text-center my-8"
                                >
                                    <img
                                        src={bloc.content}
                                        alt="Illustration"
                                        // MODIF : max-w-full pour ne pas dépasser
                                        className="mx-auto max-w-full md:max-h-[500px] border-4 border-stone-800 shadow-xl rounded"
                                    />
                                </figure>
                            );
                        case "stats":
                        case "viz":
                            const parts = bloc.content
                                ? bloc.content.split("::")
                                : [];
                            return (
                                <div
                                    key={bloc.id}
                                    className="bg-black/40 border border-stone-700 p-4 md:p-6 rounded-lg my-8 shadow-inner"
                                >
                                    <h3 className="text-viking-gold font-bold text-xs md:text-sm uppercase mb-4 tracking-widest text-center">
                                        📊 Données du Clan
                                    </h3>
                                    {/* MODIF : h-64 sur mobile */}
                                    <div className="h-64 md:h-96 relative">
                                        <CsvChart
                                            csvUrl={parts[1]}
                                            vizType={parts[0] || "bar"}
                                        />
                                    </div>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>

            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-stone-800 text-center text-stone-500 text-[10px] md:text-xs uppercase tracking-widest">
                Gravé par {article.author?.pseudo || "Un éclaireur"} •{" "}
                {new Date(article.createdAt).toLocaleDateString()}
            </div>

            <CommentSection articleId={id} />
        </div>
    );
};


export default ArticleShow;
