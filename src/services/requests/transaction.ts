import { privateClient } from '.';
import { API_URL } from 'constants/urls';
import {
  CreateTransactionVariables,
  EditTransactionVariables,
} from 'types/transaction';
import { dateToString } from 'utils/date';

export const requestGetCategory = async () => {
  const response = await privateClient.get(API_URL.CATEGORY);
  return response.data.category;
};

export const requestGetAllTransactions = async (date: string) => {
  const response = await privateClient.get(API_URL.GET_TRANSACTIONS, {
    params: {
      date,
    },
  });
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
