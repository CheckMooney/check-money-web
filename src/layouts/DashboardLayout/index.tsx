import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import {
  DashboardContainer,
  DashboardMainContainer,
  DashboardOverlay,
} from './styles';

const DashboardLayout: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <DashboardHeader toggleOpen={() => setIsOpenSidebar(!isOpenSidebar)} />
      <DashboardContainer>
        <DashboardOverlay
          isVisible={isOpenSidebar}
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        />
        <DashboardSidebar isOpen={isOpenSidebar} />
        <DashboardMainContainer isOpen={isOpenSidebar}>
          {children}
        </DashboardMainContainer>
      </DashboardContainer>
    </>
  );
};

export default DashboardLayout;
