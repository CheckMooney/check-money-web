import React, { useState } from 'react';
import { dateToString } from 'utils/date';
import { useGetAllTransactionsQuery } from 'services/queries/transaction';
import { ReactComponent as AddIcon } from 'assets/svg/add.svg';
import TransactionItem from 'components/TransactionItem/TransactionItem';
import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import {
  AddTransactionButton,
  HeaderWrapper,
  Wrapper,
  TransactionWrapper,
} from './TodayPage.style';
import EmptyItem from 'components/common/EmptyItem/EmptyItem';
import AddTransactionModal from 'components/Modal/AddTransactionModal/AddTransactionModal';
import Head from 'components/common/Head/Head';

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
      <Head label="오늘" />
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
          <EmptyItem label="오늘은 아무 내역이 없습니다." />
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
