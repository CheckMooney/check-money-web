import React from 'react';
import { RiMenuFill, RiHomeLine } from 'react-icons/ri';
import { useHistory } from 'react-router';
import {
  TopBarButton,
  TopBarContainer,
  TopBarInnerContainer,
  TopBarLeft,
  TopBarRight,
} from './styles';

interface IDashboardHeaderProps {
  toggleOpen: () => void;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ toggleOpen }) => {
  const history = useHistory();
  return (
    <TopBarContainer>
      <TopBarInnerContainer>
        <TopBarLeft>
          <TopBarButton onClick={toggleOpen}>
            <RiMenuFill size={24} />
          </TopBarButton>
          <TopBarButton onClick={() => history.push('/dashboard')}>
            <RiHomeLine size={24} />
          </TopBarButton>
        </TopBarLeft>
        <TopBarRight>정보</TopBarRight>
      </TopBarInnerContainer>
    </TopBarContainer>
  );
};

export default DashboardHeader;
