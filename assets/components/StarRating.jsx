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
                    className={`text-2xl transition-colors ${
                        star <= (hover || rating) ? "text-viking-gold" : "text-stone-600"
                    }`}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default StarRating;