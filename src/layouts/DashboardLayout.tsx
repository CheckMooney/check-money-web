import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <main>
      <DashboardHeader />
      {children}
    </main>
  );
};
