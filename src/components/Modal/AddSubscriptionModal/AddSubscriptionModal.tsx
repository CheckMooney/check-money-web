import React from 'react';
import { TransactionSchema } from 'constants/schema';
import ModalPortal from '../ModalPortal/ModalPortal';
import TransactionForm from 'components/Form/TransactionForm/TransactionForm';
import useSubscriptionMutation from 'hooks/useSubscriptionMutation';

interface AddSubscriptionModalProps {
  onClose: () => void;
}

const AddSubscriptionModal: React.FC<AddSubscriptionModalProps> = ({
  onClose,
}) => {
  const { createSubscription, isCreateSubscriptionLoading } =
    useSubscriptionMutation();

  const onSubmit = async (data: TransactionSchema) => {
    await createSubscription(data);
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
    <ModalPortal onClose={onClose} title="고정 내역 추가">
      <TransactionForm
        transactionType="subscription"
        defaultValues={defaultValues}
        isLoading={isCreateSubscriptionLoading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </ModalPortal>
  );
};

export default AddSubscriptionModal;
