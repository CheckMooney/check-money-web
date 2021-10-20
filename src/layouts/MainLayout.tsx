import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
