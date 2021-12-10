import { privateClient } from '.';
import { API_URL } from 'constants/urls';
import {
  CreateAccountVariables,
  EditAccountVariables,
  GetAccountsData,
} from 'types/account';

export const requestGetAccounts = async () => {
  const response = await privateClient.get<GetAccountsData>(API_URL.ACCOUNTS);
  return response.data;
};

export const requestCreateAccount = async ({
  title,
  description,
}: CreateAccountVariables) => {
  const response = await privateClient.post(API_URL.ACCOUNTS, {
    title,
    description,
  });
  return response.data;
};

export const requestEditAccount = async ({
  id,
  title,
  description,
}: EditAccountVariables) => {
  const response = await privateClient.put(`${API_URL.ACCOUNTS}/${id}`, {
    title,
    description,
  });
  return response.data;
};

export const requestDeleteAccount = async (accountId: number) => {
  const response = await privateClient.delete(
    `${API_URL.ACCOUNTS}/${accountId}`,
  );
  return response.data;
};
