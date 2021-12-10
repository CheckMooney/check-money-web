import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown, { DropDownItem } from '../DropDown/DropDown';
import { Account } from 'types/account';
import {
  IoEllipsisHorizontalOutline,
  IoPencilOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { Wrapper } from './AccountItem.style';
import EditAccountModal from 'components/Modal/EditAccountModal/EditAccountModal';
import useConfirm from 'hooks/useConfirm';
import useAccountMutation from 'hooks/useAccountMutation';

interface AccountItemProps {
  account: Account;
}

const AccountItem: React.FC<AccountItemProps> = ({ account }) => {
  const { deleteAccount } = useAccountMutation();
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] =
    useState<boolean>(false);
  const deleteAccountConfirm = useConfirm({
    message: '계좌를 삭제하시겠습니까?',
    onConfirm: () => deleteAccount(account.id),
  });

  const accountDropDownItems: DropDownItem[] = [
    {
      icon: IoPencilOutline,
      onClick: () => {
        setIsEditAccountModalOpen(true);
      },
      text: '계좌 편집',
    },
    {
      onClick: deleteAccountConfirm,
      icon: IoTrashOutline,
      text: '계좌 삭제',
    },
  ];

  return (
    <Wrapper>
      <Link to={`/dashboard/account/${account.id}`}>{account.title}</Link>
      <DropDown items={accountDropDownItems}>
        <IoEllipsisHorizontalOutline size={20} />
      </DropDown>
      {isEditAccountModalOpen && (
        <EditAccountModal
          account={account}
          onClose={() => setIsEditAccountModalOpen(false)}
        />
      )}
    </Wrapper>
  );
};

export default AccountItem;
