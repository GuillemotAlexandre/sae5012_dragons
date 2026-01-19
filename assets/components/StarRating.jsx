import React, { useState } from 'react';

const StarRating = ({ articleId, currentRating, onRate }) => {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(currentRating || 0);

    const handleRating = (score) => {
        setRating(score);
        onRate(score);
    };

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    // MODIF : text-3xl sur mobile pour faciliter le clic, md:text-2xl sur desktop
                    // Ajout de active:scale-125 pour un effet "pop" au toucher
                    className={`text-3xl md:text-2xl transition-all duration-200 focus:outline-none active:scale-125 ${
                        star <= (hover || rating) ? "text-viking-gold drop-shadow-md" : "text-stone-600"
                    }`}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                    title={`Donner ${star} étoile(s)`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default StarRating;