// MenuContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { MenuItem } from '../types'; // Import types
import { menu_list } from '../dataItem';

// Define type for menu data
interface MenuContextType {
  menuData: MenuItem[];
  loading: boolean;
  error: string | null;
}

// Create MenuContext
export const MenuContext = createContext<MenuContextType>({
  menuData: [],
  loading: false,
  error: null,
});

// Create MenuProvider
export const MenuProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const importImages = async () => {
      setLoading(true);
      const images: Record<string, string> = {};
      for (let i = 0; i < menu_list.length; i++) {
        try {
          // Dynamically import image using Webpack's dynamic import
          const { default: image } = await import(`../Assets/p${i + 1}.png`);
          images[`p${i + 1}`] = image;
        } catch (error) {
          console.error(`Error loading image for menu item ${i + 1}:`, error);
          setError(`Error loading image for menu item ${i + 1}`);
        }
      }
      setLoading(false);
      setMenuData(menu_list.map((item, index) => ({
        ...item,
        image: images[`p${index + 1}`],
      })));
    };

    importImages();
  }, []);

  return (
    <MenuContext.Provider value={{ menuData, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

