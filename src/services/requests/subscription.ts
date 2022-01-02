import { privateClient } from '.';
import { API_URL } from 'constants/urls';
import {
  CreateTransactionVariables,
  EditTransactionVariables,
  GetTransactionsData,
} from 'types/transaction';
import { dateToString } from 'utils/date';
import { DeleteSubscriptionVariables } from 'types/subscription';

export const requestGetSubscriptions = async (accountId: number) => {
  const response = await privateClient.get<GetTransactionsData>(
    API_URL.SUBSCRIPTION(accountId),
    {
      params: {
        limit: 1000,
      },
    },
  );
  return response.data.rows;
};

export const requestCreateSubscription = async ({
  date,
  account_id,
  is_consumption,
  ...variables
}: CreateTransactionVariables) => {
  const response = await privateClient.post(API_URL.SUBSCRIPTION(account_id), {
    is_consumption: +is_consumption,
    date: dateToString(date, 'yyyy-mm-dd'),
    ...variables,
  });
  return response.data;
};

export const requestEditSubscription = async ({
  account_id,
  id,
  date,
  is_consumption,
  ...variables
}: EditTransactionVariables) => {
  const response = await privateClient.put(
    API_URL.SUBSCRIPTION(account_id, id),
    {
      is_consumption: is_consumption ? 1 : 0,
      date: dateToString(date, 'yyyy-mm-dd'),
      ...variables,
    },
  );
  return response.data;
};

export const requestDeleteSubscription = async ({
  accountId,
  subscriptionId,
}: DeleteSubscriptionVariables) => {
  const response = await privateClient.delete(
    API_URL.SUBSCRIPTION(accountId, subscriptionId),
  );
  return response.data;
};
