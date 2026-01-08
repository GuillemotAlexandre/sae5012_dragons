import React, { useState } from 'react';

const CommentItem = ({ comment, articleId, onReply }) => {
    const [showReply, setShowReply] = useState(false);
    const [score, setScore] = useState(comment.score);

    const handleVote = (direction) => {
        fetch(`/api/custom/comments/${comment.id}/vote/${direction}`, { method: 'POST' })
            .then(res => res.json())
            .then(data => setScore(data.score))
            .catch(err => console.error(err));
    };

    return (
        <div className="flex gap-3 mb-4 mt-2">
            <div className="flex flex-col items-center gap-1 min-w-[30px]">
                <button onClick={() => handleVote('up')} className="text-stone-500 hover:text-viking-gold font-bold">▲</button>
                <span className={`font-bold text-sm ${score > 0 ? 'text-viking-gold' : 'text-stone-400'}`}>{score}</span>
                <button onClick={() => handleVote('down')} className="text-stone-500 hover:text-blue-400 font-bold">▼</button>
            </div>
            <div className="flex-1 border-l-2 border-stone-700 pl-4">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-viking-parchment text-sm">{comment.author?.pseudo || 'Anonyme'}</span>
                    <span className="text-xs text-stone-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-stone-300 text-sm mb-2">{comment.content}</p>
                
                <button onClick={() => setShowReply(!showReply)} className="text-xs text-stone-500 hover:text-white font-bold mb-2">
                    💬 Répondre
                </button>

                {showReply && (
                    <ReplyForm parentId={comment.id} articleId={articleId} onSuccess={() => {setShowReply(false); onReply();}} />
                )}

                {/* Réponses imbriquées */}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-2">
                        {comment.replies.map(reply => (
                            <CommentItem key={reply.id} comment={reply} articleId={articleId} onReply={onReply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ReplyForm = ({ parentId, articleId, onSuccess }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            content,
            article: `/api/articles/${articleId}`,
            parent: parentId ? `/api/comments/${parentId}` : undefined
        };

        fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/ld+json' },
            body: JSON.stringify(data)
        }).then(() => {
            setContent('');
            if(onSuccess) onSuccess();
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-stone-800 p-3 rounded border border-stone-600">
            <textarea 
                className="w-full bg-stone-900 border border-stone-600 rounded p-2 text-white text-sm mb-2 focus:border-viking-gold outline-none"
                placeholder="Votre réponse..."
                value={content}
                onChange={e => setContent(e.target.value)}
                required
            />
            <button type="submit" className="bg-viking-red hover:bg-red-800 text-white text-xs px-3 py-1 rounded">Envoyer</button>
        </form>
    );
};

const CommentsSection = ({ articleId, comments, refresh }) => {
    // On ne garde que les commentaires racines (ceux sans parent) pour l'affichage initial
    const rootComments = comments.filter(c => !c.parent);

    return (
        <div className="border-t border-viking-gold/30 pt-10 mt-10">
            <h3 className="text-2xl font-dragon text-viking-gold mb-6">Discussions ({comments.length})</h3>
            
            <div className="bg-stone-800 p-4 rounded mb-8 border-2 border-stone-700">
                <ReplyForm articleId={articleId} onSuccess={refresh} />
            </div>

            {rootComments.map(comment => (
                <CommentItem key={comment.id} comment={comment} articleId={articleId} onReply={refresh} />
            ))}
        </div>
    );
};

export default CommentsSection;