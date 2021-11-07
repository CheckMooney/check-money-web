import React from 'react';
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoFileTray,
} from 'react-icons/io5';
import {
  DashboardSidebarContainer,
  DashboardSidebarItem,
  DashboardSidebarList,
} from './styles';

interface IDashboardSidebarProps {
  isOpen?: boolean;
  toggoleOpen?: () => void;
}

const DashboardSidebar: React.FC<IDashboardSidebarProps> = ({
  isOpen,
  toggoleOpen,
}) => {
  const sidebarItems = [
    {
      to: '/dashboard',
      icon: IoFileTray,
      iconColor: '#88ADE6',
      label: '대시보드',
    },
    {
      to: '/dashboard/today',
      icon: IoCalendarNumberOutline,
      iconColor: '#058527',
      label: '오늘의 소비',
    },
    {
      to: '/dashboard/calendar',
      icon: IoCalendarOutline,
      iconColor: '#692fc2',
      label: '월별 소비',
    },
  ];
  return (
    <DashboardSidebarContainer isOpen={isOpen}>
      <div>
        <DashboardSidebarList>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <DashboardSidebarItem
                to={item.to}
                activeClassName="active-sidebar"
              >
                <item.icon
                  className="item-icon"
                  color={item.iconColor}
                  size={24}
                />
                <span className="item-label">{item.label}</span>
              </DashboardSidebarItem>
            </li>
          ))}
        </DashboardSidebarList>
      </div>
    </DashboardSidebarContainer>
  );
};

export default DashboardSidebar;
