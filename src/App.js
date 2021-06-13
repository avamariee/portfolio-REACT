import React, { useState } from 'react';
import './assets/styles.css';

import About from './components/About';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const [currentItem, setCurrentItem] = useState("about");

  // use possible switch case to render different pages?
  // create function to render page instead of rendering everything at once
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

  const displayPage = () => {
    switch (currentItem) {

      case "about":
        return <About />;

      case "portfolio":
        return <ProjectList />;

      case "Resume":
        return <Resume />;

      case "Contact":
        return <Contact />;


      default:
        return <About />
    }
  }





  return (
    <div>
      {/* nav is my header */}
      <Nav
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      ></Nav>
      <div>
        <main>
          {displayPage()}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
