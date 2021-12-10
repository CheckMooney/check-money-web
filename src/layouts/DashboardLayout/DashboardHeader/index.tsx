import React, { useState } from 'react';
import { RiMenuFill, RiHomeLine } from 'react-icons/ri';
import { IoAddOutline, IoPersonCircle } from 'react-icons/io5';
import { useHistory } from 'react-router';
import {
  TopBarButton,
  TopBarContainer,
  TopBarInnerContainer,
  TopBarLeft,
  TopBarRight,
} from './styles';
import AddTransactionModal from 'components/Modal/AddTransactionModal/AddTransactionModal';

interface IDashboardHeaderProps {
  toggleOpen: () => void;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ toggleOpen }) => {
  const history = useHistory();

  const [addModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <TopBarContainer>
      <TopBarInnerContainer>
        <TopBarLeft>
          <TopBarButton onClick={toggleOpen} marginRight="1rem">
            <RiMenuFill size={24} />
          </TopBarButton>
          <TopBarButton onClick={() => history.push('/dashboard')}>
            <RiHomeLine size={24} />
          </TopBarButton>
        </TopBarLeft>
        <TopBarRight>
          <TopBarButton marginRight="1rem" onClick={() => setModalOpen(true)}>
            <IoAddOutline size={24} />
          </TopBarButton>
          <TopBarButton>
            <IoPersonCircle size={24} />
          </TopBarButton>
        </TopBarRight>
      </TopBarInnerContainer>
      {addModalOpen && (
        <AddTransactionModal onClose={() => setModalOpen(false)} />
      )}
    </TopBarContainer>
  );
};

export default DashboardHeader;
