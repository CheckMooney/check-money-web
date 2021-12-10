import React from 'react';
import { TransactionSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import TransactionForm from 'components/Form/TransactionForm/TransactionForm';
import useTransactionMutation from 'hooks/useTransactionMutation';

interface AddTransactionModalProps {
  onClose: () => void;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  onClose,
}) => {
  const { createTransaction, isCreateTransactionLoading } =
    useTransactionMutation();

  const onSubmit = async (data: TransactionSchema) => {
    await createTransaction(data);
    onClose();
  };

  const defaultValues: TransactionSchema = {
    is_consumption: true,
    price: 0,
    detail: '',
    date: new Date(),
    category: -1,
    account_id: -1,
  };

  return (
    <ModalPortal onClose={onClose} title="새로운 내역 추가">
      <TransactionForm
        defaultValues={defaultValues}
        isLoading={isCreateTransactionLoading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </ModalPortal>
  );
};

export default AddTransactionModal;
