import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg';
import { ReactComponent as AddIcon } from 'assets/svg/add.svg';
import ProfileModal from 'components/Modal/ProfileModal/ProfileModal';
import AddTransactionModal from 'components/Modal/AddTransactionModal/AddTransactionModal';
import {
  TopBarButton,
  TopBarContainer,
  TopBarInnerContainer,
  TopBarLeft,
  TopBarRight,
} from './styles';
import ProfileImage from 'components/common/ProfileImage/ProfileImage';
import DropDown from 'components/common/DropDown/DropDown';
import { useUserContext } from 'contexts/UserContext';

interface IDashboardHeaderProps {
  toggleOpen: () => void;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ toggleOpen }) => {
  const history = useHistory();
  const { logout } = useUserContext();
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);
  const profileDropDownItems = [
    {
      text: '내 계정',
      onClick: () => setProfileModalOpen(true),
    },
    {
      text: '로그아웃',
      onClick: () => logout(),
    },
  ];
  return (
    <TopBarContainer>
      <TopBarInnerContainer>
        <TopBarLeft>
          <TopBarButton onClick={toggleOpen} marginRight="0.5rem">
            <MenuIcon width={24} height={24} />
          </TopBarButton>
          <TopBarButton onClick={() => history.push('/dashboard/today')}>
            <HomeIcon width={24} height={24} />
          </TopBarButton>
        </TopBarLeft>
        <TopBarRight>
          <TopBarButton
            marginRight="1rem"
            onClick={() => setAddModalOpen(true)}
          >
            <AddIcon width={24} height={24} />
          </TopBarButton>
          <DropDown items={profileDropDownItems} direction="right">
            <ProfileImage />
          </DropDown>
        </TopBarRight>
      </TopBarInnerContainer>
      {addModalOpen && (
        <AddTransactionModal onClose={() => setAddModalOpen(false)} />
      )}
      {profileModalOpen && (
        <ProfileModal onClose={() => setProfileModalOpen(false)} />
      )}
    </TopBarContainer>
  );
};

export default DashboardHeader;
