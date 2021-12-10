import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { useGetAccountsQuery } from 'services/queries/account';
import AddAccountModal from 'components/Modal/AddAccountModal/AddAccountModal';
import {
  AddAccountItem,
  DashboardSidebarContainer,
  DashboardSidebarList,
  SidebarItem,
} from './styles';
import AccountItem from 'components/common/AccountItem/AccountItem';

interface IDashboardSidebarProps {
  isOpen?: boolean;
}

const DashboardSidebar: React.FC<IDashboardSidebarProps> = ({ isOpen }) => {
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] =
    useState<boolean>(false);
  const { data: accountsData } = useGetAccountsQuery();

  return (
    <DashboardSidebarContainer isOpen={isOpen}>
      <div>
        <DashboardSidebarList>
          <SidebarItem>
            <AddAccountItem>
              <span>나의 계좌</span>
              <button onClick={() => setIsAddAccountModalOpen(true)}>
                <IoAddOutline size={20} />
              </button>
            </AddAccountItem>
          </SidebarItem>
          {accountsData?.rows.map((account) => (
            <SidebarItem key={account.id}>
              <AccountItem account={account} />
            </SidebarItem>
          ))}
        </DashboardSidebarList>
      </div>
      {isAddAccountModalOpen && (
        <AddAccountModal onClose={() => setIsAddAccountModalOpen(false)} />
      )}
    </DashboardSidebarContainer>
  );
};

export default DashboardSidebar;
