import React from 'react';
import { Account } from 'types/account';
import { AccountSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import AccountForm from 'components/Form/AccountForm/AccountForm';
import useAccountMutation from 'hooks/useAccountMutation';

interface EditAccountModalProps {
  account: Account;
  onClose: () => void;
}

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  onClose,
  account,
}) => {
  const { editAccount, isEditAccountLoading } = useAccountMutation();
  const onSubmit = async (data: AccountSchema) => {
    await editAccount({
      id: account.id,
      ...data,
    });
    onClose();
  };
  const defaultValues: AccountSchema = {
    title: account.title,
    description: account.description,
  };

  return (
    <ModalPortal title="계좌 수정" onClose={onClose}>
      <AccountForm
        defaultValues={defaultValues}
        isLoading={isEditAccountLoading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </ModalPortal>
  );
};

export default EditAccountModal;
