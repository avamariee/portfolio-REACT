import React, { useState } from 'react';
import './assets/styles.css';

import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'

function App() {

  const [navItems] = useState([
    {
      name: 'Portfolio',
      description: 'A list of all of the projects I have contributed to.'
    },
    {
      name: 'Contact',
      description: 'Contact information to reach me.'
    },
    {
      name: 'Resume',
      description: 'A link to download my resume.'
    }
  ]);

  const [currentItem, setCurrentItem] = useState(navItems[0]);

  return (
    <div>
      <Nav
      navItems={navItems}
      setCurrentItem={setCurrentItem}
      currentItem={currentItem}
      ></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
