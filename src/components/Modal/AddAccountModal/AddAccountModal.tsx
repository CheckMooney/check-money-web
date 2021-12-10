import React from 'react';
import { AccountSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import AccountForm from 'components/Form/AccountForm/AccountForm';
import useAccountMutation from 'hooks/useAccountMutation';

interface AddAccountModalProps {
  onClose: () => void;
}

const AddAccountModal: React.FC<AddAccountModalProps> = ({ onClose }) => {
  const { createAccount, isCreateAccountLoading } = useAccountMutation();
  const onSubmit = async (data: AccountSchema) => {
    await createAccount(data);
    onClose();
  };

  return (
    <ModalPortal onClose={onClose} title="계좌 추가">
      <AccountForm
        onSubmit={onSubmit}
        onCancel={onClose}
        isLoading={isCreateAccountLoading}
      />
    </ModalPortal>
  );
};

export default AddAccountModal;
