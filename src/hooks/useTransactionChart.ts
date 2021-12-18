import { useMemo } from 'react';
import { useGetAllTransactionsQuery } from 'services/queries/transaction';
import { Transaction } from 'types/transaction';
import { dateToString } from 'utils/date';
import useDate from './useDate';

const getTransactionsPrice = (data: Transaction[]) =>
  data.reduce((prev, cur) => prev + cur.price, 0);

function getPricePerDay(dates: Date[], data?: Transaction[]) {
  if (!data) return [];

  return dates.map((date) => {
    const dateString = dateToString(date, 'yyyy-mm-dd');
    const totalPrice = getTransactionsPrice(
      data.filter((transaction) => transaction.date === dateString),
    );
    return {
      key: dateString,
      value: totalPrice,
    };
  });
}

export default function useTransactionChart() {
  const { currentDate, currentDates } = useDate(new Date());
  const { data: transactionData } = useGetAllTransactionsQuery(
    dateToString(currentDate, 'yyyy-mm'),
  );

  const pricePerDay = useMemo(
    () => getPricePerDay(currentDates, transactionData),
    [currentDates, transactionData],
  );

  return { currentDate, pricePerDay };
}
