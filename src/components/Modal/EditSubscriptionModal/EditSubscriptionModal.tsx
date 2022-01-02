import React from 'react';
import { Transaction } from 'types/transaction';
import { TransactionSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import TransactionForm from 'components/Form/TransactionForm/TransactionForm';
import useSubscriptionMutation from 'hooks/useSubscriptionMutation';

interface EditSubscriptionModalProps {
  subscription: Transaction;
  onClose: () => void;
}

const EditSubscriptionModal: React.FC<EditSubscriptionModalProps> = ({
  subscription,
  onClose,
}) => {
  const { editSubscription, isEditSubscriptionLoading } =
    useSubscriptionMutation();

  const onSubmit = async (data: TransactionSchema) => {
    console.log(data);
    await editSubscription({ id: subscription.id, ...data });
    onClose();
  };

  const defaultValues: TransactionSchema = {
    ...subscription,
    is_consumption: !!subscription.is_consumption,
    date: new Date(subscription.date),
  };

  return (
    <ModalPortal onClose={onClose} title="고정 내역 수정">
      <TransactionForm
        defaultValues={defaultValues}
        isLoading={isEditSubscriptionLoading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </ModalPortal>
  );
};

export default EditSubscriptionModal;
