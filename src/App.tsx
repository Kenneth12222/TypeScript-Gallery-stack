import React from 'react';
import MenuComponent from './components/MenuComponent'; // Assuming MenuComponent is in a folder named 'components'
import './App.css';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        {/* <Hero /> */}
      </header>
      <main>
        <MenuComponent />
      </main>
    </div>
  );
};

export default App;
