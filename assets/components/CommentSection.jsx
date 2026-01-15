import React, { useState, useEffect } from "react";

// Sous-composant pour UN commentaire (récursif)
const CommentItem = ({ comment, onVote, onReply, articleId, canInteract }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState("");

    const handleReplySubmit = (e) => {
        e.preventDefault();
        onReply(replyContent, comment.id); // On répond à CE commentaire (parent)
        setReplyContent("");
        setShowReplyForm(false);
    };

    return (
        <div className="border-l-2 border-stone-700 pl-4 mt-4 mb-2">
            {/* EN-TÊTE : Auteur + Score */}
            <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                <span className="font-bold text-viking-gold">
                    {comment.author?.pseudo || "Viking Anonyme"}
                </span>
                <span>• {comment.score} points</span>
                <span>
                    • {new Date(comment.createdAt).toLocaleDateString()}
                </span>
            </div>

            {/* CONTENU */}
            <p className="text-stone-200 text-sm mb-2">{comment.content}</p>

            {/* 🔒 ACTIONS : Vote & Répondre (Visibles seulement si connecté) */}
            {canInteract && (
                <div className="flex items-center gap-4 text-xs font-bold uppercase text-stone-500">
                    <div className="flex gap-1">
                        <button
                            onClick={() => onVote(comment.id, "up")}
                            className="hover:text-green-500"
                        >
                            ▲ Up
                        </button>
                        <button
                            onClick={() => onVote(comment.id, "down")}
                            className="hover:text-red-500"
                        >
                            ▼ Down
                        </button>
                    </div>
                    <button
                        onClick={() => setShowReplyForm(!showReplyForm)}
                        className="hover:text-white"
                    >
                        Répondre
                    </button>
                </div>
            )}

            {/* FORMULAIRE DE RÉPONSE (Caché par défaut) */}
            {showReplyForm && canInteract && (
                <form onSubmit={handleReplySubmit} className="mt-2 flex gap-2">
                    <input
                        type="text"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="bg-black border border-stone-600 p-2 text-white text-xs w-full"
                        placeholder="Votre réponse..."
                        required
                    />
                    <button
                        type="submit"
                        className="bg-stone-700 text-white px-3 text-xs uppercase"
                    >
                        Envoyer
                    </button>
                </form>
            )}

            {/* RÉCURSIVITÉ : Afficher les enfants (réponses) */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="mt-2">
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            onVote={onVote}
                            onReply={onReply}
                            articleId={articleId}
                            canInteract={canInteract} // 👈 On transmet la permission aux enfants
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Composant Principal
const CommentSection = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(true);
    // 🔒 État pour savoir si l'utilisateur est connecté
    const [canInteract, setCanInteract] = useState(false);

    // Vérification de la connexion au chargement
    useEffect(() => {
        const token = localStorage.getItem("token");
        setCanInteract(!!token); // Si token existe => true, sinon => false
    }, []);

    // Charger les commentaires
    const fetchComments = () => {
        fetch(`/api/comments?article=${articleId}`)
            .then((res) => res.json())
            .then((data) => {
                // 1. On récupère la liste peu importe le nom de la clé
                const commentsData = data["hydra:member"] || data["member"] || [];
                
                // 2. On filtre les racines (ceux qui n'ont pas de parent)
                const rootComments = commentsData.filter(
                    (c) => !c.parent || c.parent === undefined || c.parent === null
                );

                // 3. On met à jour l'état
                setComments(rootComments);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchComments();
    }, [articleId]);

    // Poster un commentaire
    const handlePost = async (content, parentId = null) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Vous devez être connecté pour graver un message !");
            return;
        }

        const body = {
            content: content,
            article: `/api/articles/${articleId}`,
            parent: parentId ? `/api/comments/${parentId}` : null,
        };

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/ld+json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                fetchComments(); // Recharger la liste
                if (!parentId) setNewComment(""); // Vider le champ principal
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Voter
    const handleVote = async (commentId, direction) => {
        const token = localStorage.getItem("token");
        if (!token) return alert("Seuls les guerriers connectés peuvent voter !");

        try {
            await fetch(`/api/custom/comments/${commentId}/vote/${direction}`, {
                method: "POST",
                headers: { 
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
            fetchComments();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-12 pt-8 border-t border-stone-800">
            <h3 className="text-2xl font-dragon text-viking-gold mb-6 uppercase">
                Conseil de Guerre ({comments.length} avis)
            </h3>

            {/* 🔒 Formulaire Principal : Affiché seulement si connecté */}
            {canInteract ? (
                <div className="mb-8 flex gap-2">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-black/50 border border-stone-700 text-stone-300 p-3 h-20 focus:border-viking-gold outline-none"
                        placeholder="Laissez votre marque sur ce récit..."
                    />
                    <button
                        onClick={() => handlePost(newComment)}
                        className="bg-viking-gold text-black font-bold px-6 uppercase hover:bg-white transition"
                    >
                        Graver
                    </button>
                </div>
            ) : (
                <div className="mb-8 p-4 border border-stone-800 bg-stone-900/50 text-center italic text-stone-500 text-sm">
                    Rejoignez le clan (connectez-vous) pour participer au conseil de guerre et voter.
                </div>
            )}

            {/* Liste des commentaires */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onVote={handleVote}
                        onReply={handlePost}
                        articleId={articleId}
                        canInteract={canInteract} // 👈 On passe l'info "connecté" aux items
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;