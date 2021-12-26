import { privateClient } from '.';
import { API_URL } from 'constants/urls';
import {
  CreateTransactionVariables,
  EditTransactionVariables,
  GetCategoryData,
  GetTransactionsData,
} from 'types/transaction';
import { dateToString, getPrevDays, getPrevMonth } from 'utils/date';

export const requestGetCategory = async () => {
  const response = await privateClient.get<GetCategoryData>(API_URL.CATEGORY);
  return response.data.category;
};

export const requestGetAllTransactions = async (
  date: string,
  is_consumption?: number,
) => {
  const response = await privateClient.get<GetTransactionsData>(
    API_URL.GET_TRANSACTIONS,
    {
      params: {
        limit: 1000,
        date,
        is_consumption,
      },
    },
  );
  return response.data.rows;
};

export const requestGetTransactions = async (
  accountId: number,
  date: string,
) => {
  const response = await privateClient.get(API_URL.GET_TRANSACTIONS, {
    params: {
      account_id: accountId,
      date,
    },
  });
  return response.data.rows;
};

export const requestCreateTransaction = async ({
  date,
  is_consumption,
  ...variables
}: CreateTransactionVariables) => {
  const response = await privateClient.post(API_URL.CREATE_TRANSACTION, {
    is_consumption: +is_consumption,
    date: dateToString(date, 'yyyy-mm-dd'),
    ...variables,
  });
  return response.data;
};

export const requestEditTransaction = async ({
  id,
  date,
  is_consumption,
  ...variables
}: EditTransactionVariables) => {
  const response = await privateClient.put(API_URL.TRANSACTION(id), {
    is_consumption: is_consumption ? 1 : 0,
    date: dateToString(date, 'yyyy-mm-dd'),
    ...variables,
  });
  return response.data;
};

export const requestDeleteTransaction = async (transactionId: number) => {
  const response = await privateClient.delete(
    API_URL.TRANSACTION(transactionId),
  );
  return response.data;
};

export const requestGetTotalConsumption = async (date: string) => {
  const response = await privateClient.get<GetTransactionsData>(
    API_URL.GET_TRANSACTIONS,
    {
      params: {
        date,
        is_consumption: 1,
        limit: 1000,
      },
    },
  );
  const transactions = response.data.rows;
  return transactions.reduce((prev, curr) => prev + curr.price, 0);
};

export const requestGetTotalConsumptionChart = async (
  dateString: string,
  chartType: string,
) => {
  const date = new Date(dateString);
  const axises =
    chartType === 'day' ? getPrevDays(date, 30) : getPrevMonth(date, 6);

  const chartData = [];
  for (const axis of axises) {
    const totalConsumption = await requestGetTotalConsumption(axis);
    chartData.push({
      date: axis,
      totalConsumption,
    });
  }
  const chartAverage =
    chartData.reduce((prev, cur) => prev + cur.totalConsumption, 0) /
    axises.length;

  return { chartData, chartAverage };
};

export const requestGetTotalConsumptionByCategory = async (
  dateString: string,
) => {
  const transactions = await requestGetAllTransactions(dateString, 1);
  const categories = await requestGetCategory();
  const data = categories.map((category, index) => {
    const totalConsumption = transactions
      .filter((transaction) => transaction.category === index)
      .reduce((prev, cur) => prev + cur.price, 0);
    return { category, totalConsumption };
  });
  return data.filter((value) => value.totalConsumption !== 0);
};
