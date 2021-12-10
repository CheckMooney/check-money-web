import React from 'react';
import useDate from 'hooks/useDate';
import { dateToString } from 'utils/date';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import DatePicker from 'components/common/DatePicker/DatePicker';

import {
  Wrapper,
  HeaderWrapper,
  CalendarHeader,
  CalendarActionButton,
  CalendarActionWrapper,
  TransactionDate,
  TransactionSection,
  CalendarWrapper,
  CaleandarHeaderWrapper,
  Title,
  Description,
  BodyWrapper,
  PrevMonthButton,
  PrevMonthWrapper,
} from './TransactionList.style';

import { useGetTransactionsQuery } from 'services/queries/transaction';
import TransactionItem from 'components/TransactionItem/TransactionItem';

interface TransactionListProps {
  accountId: string;
  title: string;
  description: string;
}

const TransactionList = ({
  accountId,
  title,
  description,
}: TransactionListProps) => {
  const {
    currentDates,
    currentDate,
    setNextMonth,
    setPrevMonth,
    setCurrentDate,
  } = useDate(new Date());

  const { data: transactionsData } = useGetTransactionsQuery(
    +accountId,
    dateToString(currentDate, 'yyyy-mm'),
  );

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <CalendarWrapper>
          <CaleandarHeaderWrapper>
            <DatePicker
              id="transaction-date"
              handleChange={(date: Date) => setCurrentDate(date)}
            >
              <CalendarHeader>
                {dateToString(currentDate, 'yyyy년 mm월')}
              </CalendarHeader>
            </DatePicker>
            <CalendarActionWrapper>
              <CalendarActionButton onClick={setPrevMonth}>
                <IoChevronBackOutline size={12} />
              </CalendarActionButton>
              <CalendarActionButton
                onClick={() => {
                  setCurrentDate(new Date());
                }}
              >
                오늘
              </CalendarActionButton>
              <CalendarActionButton onClick={setNextMonth}>
                <IoChevronForwardOutline size={12} />
              </CalendarActionButton>
            </CalendarActionWrapper>
          </CaleandarHeaderWrapper>
        </CalendarWrapper>
      </HeaderWrapper>

      <BodyWrapper>
        {currentDates.reverse().map((date) => {
          const currentDateString = dateToString(date, 'yyyy-mm-dd');
          const currentTransactions = transactionsData?.filter(
            (transaction) => transaction.date === currentDateString,
          );
          if (!currentTransactions?.length) return null;
          return (
            <TransactionSection key={currentDateString}>
              <TransactionDate>
                {dateToString(date, 'dd일 D요일')}
              </TransactionDate>
              {currentTransactions.map((transaction) => (
                <TransactionItem
                  transaction={transaction}
                  key={transaction.id}
                />
              ))}
            </TransactionSection>
          );
        })}
      </BodyWrapper>
      <PrevMonthWrapper>
        <PrevMonthButton type="button" onClick={setPrevMonth}>
          {!currentDate.getMonth() ? 12 : currentDate.getMonth()}월 내역 보기
        </PrevMonthButton>
      </PrevMonthWrapper>
    </Wrapper>
  );
};

export default TransactionList;
