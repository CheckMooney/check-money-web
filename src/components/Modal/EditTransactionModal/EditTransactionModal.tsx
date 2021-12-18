import React from 'react';
import { Transaction } from 'types/transaction';
import { TransactionSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import TransactionForm from 'components/Form/TransactionForm/TransactionForm';
import useTransactionMutation from 'hooks/useTransactionMutation';

interface EditTransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
}

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  transaction,
  onClose,
}) => {
  const { editTransaction, isEditTransactionLoading } =
    useTransactionMutation();

  const onSubmit = async (data: TransactionSchema) => {
    console.log(data);
    await editTransaction({ id: transaction.id, ...data });
    onClose();
  };

  const defaultValues: TransactionSchema = {
    ...transaction,
    is_consumption: !!transaction.is_consumption,
    date: new Date(transaction.date),
  };

  return (
    <ModalPortal onClose={onClose} title="기존 내역 수정">
      <TransactionForm
        defaultValues={defaultValues}
        isLoading={isEditTransactionLoading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </ModalPortal>
  );
};

export default EditTransactionModal;
