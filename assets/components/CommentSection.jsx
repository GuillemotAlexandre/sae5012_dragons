import React, { useState, useEffect } from "react";

// Sous-composant pour UN commentaire (récursif)
const CommentItem = ({ comment, onVote, onReply, articleId, canInteract }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState("");

    const handleReplySubmit = (e) => {
        e.preventDefault();
        onReply(replyContent, comment.id);
        setReplyContent("");
        setShowReplyForm(false);
    };

    return (
        <div className="border-l-2 border-stone-700 pl-3 md:pl-4 mt-4 mb-2">

            <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-stone-400 mb-1">
                <span className="font-bold text-viking-gold text-sm md:text-base">
                    {comment.author?.pseudo || "Viking Anonyme"}
                </span>
                <span>• {comment.score} points</span>
                <span>
                    • {new Date(comment.createdAt).toLocaleDateString()}
                </span>
            </div>


            <p className="text-stone-200 text-sm md:text-base mb-2 break-words">
                {comment.content}
            </p>

 
            {canInteract && (
                <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase text-stone-500 select-none">
                    <div className="flex gap-3 md:gap-1">
                        <button
                            onClick={() => onVote(comment.id, "up")}
                            className="hover:text-green-500 p-1 md:p-0"
                        >
                            ▲ Up
                        </button>
                        <button
                            onClick={() => onVote(comment.id, "down")}
                            className="hover:text-red-500 p-1 md:p-0"
                        >
                            ▼ Down
                        </button>
                    </div>
                    <button
                        onClick={() => setShowReplyForm(!showReplyForm)}
                        className="hover:text-white p-1 md:p-0"
                    >
                        Répondre
                    </button>
                </div>
            )}


            {showReplyForm && canInteract && (

                <form
                    onSubmit={handleReplySubmit}
                    className="mt-2 flex flex-col md:flex-row gap-2"
                >
                    <input
                        type="text"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="bg-black border border-stone-600 p-2 text-white text-sm w-full outline-none focus:border-viking-gold"
                        placeholder="Votre réponse..."
                        required
                    />
                    <button
                        type="submit"
                        className="bg-stone-700 text-white px-4 py-2 md:py-0 text-xs uppercase font-bold hover:bg-stone-600 transition"
                    >
                        Envoyer
                    </button>
                </form>
            )}


            {comment.replies && comment.replies.length > 0 && (
                <div className="mt-2">
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            onVote={onVote}
                            onReply={onReply}
                            articleId={articleId}
                            canInteract={canInteract}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};


const CommentSection = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [canInteract, setCanInteract] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setCanInteract(!!token);
    }, []);

    const fetchComments = () => {
        fetch(`/api/comments?article=${articleId}&parent[exists]=false`)
            .then((res) => res.json())
            .then((data) => {
                const commentsData =
                    data["hydra:member"] || data["member"] || [];
                const rootComments = commentsData.filter(
                    (c) =>
                        !c.parent ||
                        c.parent === undefined ||
                        c.parent === null,
                );
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
                fetchComments();
                if (!parentId) setNewComment("");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleVote = async (commentId, direction) => {
        const token = localStorage.getItem("token");
        if (!token)
            return alert("Seuls les guerriers connectés peuvent voter !");

        try {
            await fetch(`/api/custom/comments/${commentId}/vote/${direction}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
            fetchComments();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-stone-800">
            <h3 className="text-xl md:text-2xl font-dragon text-viking-gold mb-4 md:mb-6 uppercase">
                Conseil de Guerre ({comments.length} avis)
            </h3>


            {canInteract ? (

                <div className="mb-8 flex flex-col md:flex-row gap-2">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-black/50 border border-stone-700 text-stone-300 p-3 h-24 md:h-20 focus:border-viking-gold outline-none resize-none md:resize-y"
                        placeholder="Laissez votre marque sur ce récit..."
                    />
                    <button
                        onClick={() => handlePost(newComment)}

                        className="bg-viking-gold text-black font-bold px-6 py-3 md:py-0 uppercase hover:bg-white transition w-full md:w-auto shadow-lg active:scale-95"
                    >
                        Graver
                    </button>
                </div>
            ) : (
                <div className="mb-8 p-4 border border-stone-800 bg-stone-900/50 text-center italic text-stone-500 text-xs md:text-sm">
                    Rejoignez le clan (connectez-vous) pour participer au
                    conseil de guerre et voter.
                </div>
            )}

            <div className="space-y-4 md:space-y-6">
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onVote={handleVote}
                        onReply={handlePost}
                        articleId={articleId}
                        canInteract={canInteract}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
