import React from 'react';
import DashboardHeader from './DashboardHeader';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
