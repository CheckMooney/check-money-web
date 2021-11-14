import React from 'react';
import {
  IoAddOutline,
  IoCalendarNumberOutline,
  IoCalendarOutline,
} from 'react-icons/io5';
import {
  DashboardSidebarContainer,
  SidebarLink,
  DashboardSidebarList,
  AddAccountButton,
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
              <SidebarLink to={item.to} activeClassName="active-sidebar">
                <item.icon
                  className="item-icon"
                  color={item.iconColor}
                  size={20}
                />
                <span className="item-label">{item.label}</span>
              </SidebarLink>
            </li>
          ))}
        </DashboardSidebarList>
        <DashboardSidebarList>
          <li>
            <AddAccountButton>
              <span>나의 계좌</span>
              <IoAddOutline size={20} />
            </AddAccountButton>
          </li>
        </DashboardSidebarList>
      </div>
    </DashboardSidebarContainer>
  );
};

export default DashboardSidebar;
