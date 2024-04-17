import React, { useState, useEffect } from 'react';
import './CardComponent.css';

interface CardProps {
    menuName: string;
    image: string;
}

const CardComponent: React.FC<CardProps> = ({ menuName, image }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        const img = new Image();
        img.src = image;
        img.onload = () => setLoading(false);
        img.onerror = () => setError('Error loading image');
    }, [image]);

    const handleCardClick = () => {
        setSelectedImage(image);
    };

    const handleCloseClick = () => {
        setSelectedImage(null);
    };

    return (
        <div className="">
            {selectedImage && (
                <div className="overlay" onClick={handleCloseClick}>
                    <div className="zoomed">
                        <span className="close" onClick={handleCloseClick}>
                            &times;
                        </span>
                        {loading ? (
                            <div className="loading-indicator">Loading...</div>
                        ) : error ? (
                            <div className="error-message">{error}</div>
                        ) : (
                            <img src={selectedImage} alt={menuName} />
                        )}
                    </div>
                </div>
            )}
            <div className="images">
                <div className="card" onClick={handleCardClick}>
                    {loading ? (
                        <div className="loading-indicator">Loading...</div>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        <img src={image} alt={menuName} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
