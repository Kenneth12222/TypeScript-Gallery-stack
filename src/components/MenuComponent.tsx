// MenuComponent.tsx
import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import CardComponent from './CardComponent';
import { MenuItem } from '../types'; // Import types

const MenuComponent: React.FC = () => {
    const { menuData } = useContext(MenuContext);

    return (
        <div>
            <h2>Menu</h2>
            <div className="card-container">
                {menuData.map((item: MenuItem, index: number) => (
                    <CardComponent key={index} menuName={item.menu_name} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default MenuComponent;
