import React, { useState } from 'react';
import useConfirm from 'hooks/useConfirm';
import EditTransactionModal from 'components/Modal/EditTransactionModal/EditTransactionModal';
import useTransactionMutation from 'hooks/useTransactionMutation';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { useGetCategoryQuery } from 'services/queries/transaction';
import { Transaction } from 'types/transaction';
import {
  ActionButton,
  ActionWrapper,
  CategoryWrapper,
  ContentWrapper,
  Currency,
  DetailContent,
  PriceContent,
  Wrapper,
} from './TransactionItem.style';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { data: categories } = useGetCategoryQuery();
  const { deleteTransaction } = useTransactionMutation();

  const [isShowActions, setIsShowActions] = useState<boolean>(false);
  const [isShowMdoal, setIsShowModal] = useState<boolean>(false);
  useTransactionMutation();

  const transactionPrice = transaction.is_consumption
    ? `-${transaction.price.toLocaleString()}`
    : `+${transaction.price.toLocaleString()}`;

  const confirmDeleteTransaction = useConfirm({
    message: '정말로 삭제하시겠습니까?',
    onConfirm: () => deleteTransaction(transaction.id),
  });

  return (
    <Wrapper
      onMouseEnter={() => setIsShowActions(true)}
      onMouseLeave={() => setIsShowActions(false)}
    >
      <CategoryWrapper>
        {categories && <div>{categories[transaction.category]}</div>}
      </CategoryWrapper>
      <ContentWrapper>
        <PriceContent isConsumption={!!transaction.is_consumption}>
          {transactionPrice}
          <Currency>원</Currency>
        </PriceContent>
        {transaction.detail && (
          <DetailContent>{transaction.detail}</DetailContent>
        )}
      </ContentWrapper>
      <ActionWrapper isShown={isShowActions}>
        <ActionButton type="button" onClick={() => setIsShowModal(true)}>
          <IoPencilOutline size={20} />
        </ActionButton>
        <ActionButton
          marginLeft="0.5rem"
          type="button"
          onClick={confirmDeleteTransaction}
        >
          <IoTrashOutline size={20} />
        </ActionButton>
      </ActionWrapper>

      {isShowMdoal && (
        <EditTransactionModal
          onClose={() => setIsShowModal(false)}
          transaction={transaction}
        />
      )}
    </Wrapper>
  );
};

export default TransactionItem;
