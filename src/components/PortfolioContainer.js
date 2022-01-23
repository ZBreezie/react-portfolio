import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Home />
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
          {renderPage(currentPage)}
      </div>
      <Footer/>
    </div>
  );
}

export default Portfolio;