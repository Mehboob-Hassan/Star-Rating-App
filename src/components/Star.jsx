import React from 'react'
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

function StarComponent({ reviews }) {
    const fullStars = Math.floor(reviews);
    const halfStars = reviews % 1 >= 0.5;
    const emptyStar = 5 - fullStars - (halfStars ? 1 : 0);
    return (
        <div>
            {/* Render full stars */}
            {Array.from({ length: fullStars }).map((_, index) => (
                <Star key={`full-${index}`} style={{ color: 'gold' }} />
            ))}
            {/* Render half star if needed */}
            {halfStars && <StarHalf key="half" style={{ color: 'gold' }} />}
            {/* Render empty stars */}
            {Array.from({ length: emptyStar }).map((_, index) => (
                <StarBorder key={`empty-${index}`} style={{ color: 'gold' }} />
            ))}
        </div>
    )
}

export default StarComponent;