// CardComponent.tsx
import React from 'react';
import { MenuItem } from '../types'; // Import types

interface CardProps {
    menuName: string;
    image: string;
}

const CardComponent: React.FC<CardProps> = ({ menuName, image }) => {
    return (
        <div className="card">
            <img src={image} alt={menuName} />
            <div className="about_details">
                <div className="about_pod">
                    <i className="fas">🇨🇼</i>
                    <span>{menuName}</span>
                </div>
                <button className='load'></button>
            </div>
        </div>
    );
};

export default CardComponent;
