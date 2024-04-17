import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MenuProvider } from './context/MenuContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <MenuProvider> {/* Remove the props */}
    <App />
  </MenuProvider>
</React.StrictMode>,
);

