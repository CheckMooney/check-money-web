import React, { useState } from 'react';
import { dateToString } from 'utils/date';
import { useGetAllTransactionsQuery } from 'services/queries/transaction';
import { ReactComponent as BillIcon } from 'assets/svg/bills.svg';
import { ReactComponent as AddIcon } from 'assets/svg/add.svg';
import TransactionItem from 'components/TransactionItem/TransactionItem';
import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import {
  AddTransactionButton,
  EmptyWrapper,
  EmptyText,
  HeaderWrapper,
  Wrapper,
  TransactionWrapper,
} from './TodayPage.style';
import AddTransactionModal from 'components/Modal/AddTransactionModal/AddTransactionModal';

const TodayPage = () => {
  const [showAddTransactionModal, setShowAddTransactionModal] =
    useState<boolean>(false);

  const { data: transactions, isLoading } = useGetAllTransactionsQuery(
    dateToString(new Date(), 'yyyy-mm-dd'),
  );

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <ScrollableWrapper>
      <Wrapper>
        <HeaderWrapper>
          <h1>오늘</h1>
          <h2>
            {new Date().getMonth() + 1}월{new Date().getDate()}일
          </h2>
        </HeaderWrapper>

        <TransactionWrapper>
          {transactions?.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
          <AddTransactionButton
            type="button"
            onClick={() => setShowAddTransactionModal(true)}
          >
            <AddIcon width="16" height="16" className="add-icon" />
            <span>소비 내역 추가</span>
          </AddTransactionButton>
        </TransactionWrapper>

        {!transactions?.length && (
          <EmptyWrapper>
            <BillIcon width="240" />
            <EmptyText>오늘은 아무 내역이 없어요</EmptyText>
          </EmptyWrapper>
        )}
      </Wrapper>
      {showAddTransactionModal && (
        <AddTransactionModal
          onClose={() => setShowAddTransactionModal(false)}
        />
      )}
    </ScrollableWrapper>
  );
};

export default TodayPage;
