
import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AboutSection from './AboutSection';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <motion.main 
        className="flex-grow px-4 py-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Layout;
