
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Product from './sections/Product';
import Security from './sections/Security';
import DeveloperDocs from './sections/DeveloperDocs';
import Contact from './sections/Contact';
import BuildWithUs from './sections/BuildWithUs';
import Terms from './sections/Terms';
import Privacy from './sections/Privacy';
import ProductPage from './sections/ProductPage';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState<'home' | 'contact' | 'terms' | 'privacy' | 'product'>('home');

  const renderContent = () => {
    switch (page) {
      case 'contact':
        return <Contact />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <Privacy />;
      case 'product':
        return <ProductPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Product onNavigate={setPage} />
            <Security />
            <DeveloperDocs />
            <BuildWithUs />
          </>
        );
    }
  };

  return (
    <div className="w-full bg-background">
      <Navbar onNavigate={(target) => setPage(target)} currentPage={page === 'contact' ? 'contact' : 'home'} />
      
      {renderContent()}
      
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
