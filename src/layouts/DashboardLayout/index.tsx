import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getSidebarOptions, setSidebarOptions } from 'storages';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import {
  DashboardContainer,
  DashboardMainContainer,
  DashboardOverlay,
} from './styles';

const DashboardLayout: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(
    getSidebarOptions() ?? false,
  );
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
    setSidebarOptions(!isOpenSidebar);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpenSidebar(false);
    }
  }, [location]);

  return (
    <>
      <DashboardHeader toggleOpen={toggleSidebar} />
      <DashboardContainer>
        <DashboardOverlay isVisible={isOpenSidebar} onClick={toggleSidebar} />
        <DashboardSidebar isOpen={isOpenSidebar} />
        <DashboardMainContainer isOpen={isOpenSidebar}>
          {children}
        </DashboardMainContainer>
      </DashboardContainer>
    </>
  );
};

export default DashboardLayout;
