import React, { useState } from 'react';
import useConfirm from 'hooks/useConfirm';
import EditTransactionModal from 'components/Modal/EditTransactionModal/EditTransactionModal';
import useTransactionMutation from 'hooks/useTransactionMutation';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
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

const categoryImages = [
  { src: '/images/category/food.png', alt: '식비' },
  { src: '/images/category/shopping.png', alt: '쇼핑' },
  { src: '/images/category/house.png', alt: '주거비' },
  { src: '/images/category/medical.png', alt: '의료비' },
  { src: '/images/category/life.png', alt: '생활비' },
  { src: '/images/category/phone.png', alt: '통신비' },
  { src: '/images/category/car.png', alt: '교통비' },
  { src: '/images/category/etc.png', alt: '기타' },
];

const TransactionItem = ({ transaction }: TransactionItemProps) => {
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
        {transaction.category < categoryImages.length ? (
          <img
            src={categoryImages[transaction.category].src}
            alt={categoryImages[transaction.category].alt}
          />
        ) : (
          <img
            src={categoryImages[categoryImages.length - 1].src}
            alt={categoryImages[categoryImages.length - 1].alt}
          />
        )}
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
