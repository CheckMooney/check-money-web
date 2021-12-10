import { useMutation, useQuery } from 'react-query';
import {
  requestCreateAccount,
  requestDeleteAccount,
  requestEditAccount,
  requestGetAccounts,
} from 'services/requests/account';
import { ResponseData } from 'types';
import { CreateAccountVariables, EditAccountVariables } from 'types/account';
import ResponseError from 'utils/error';

export const useGetAccountsQuery = () =>
  useQuery('accounts', requestGetAccounts);

export const useCreateAccountMutation = () =>
  useMutation<ResponseData, ResponseError, CreateAccountVariables>(
    (variables: CreateAccountVariables) => requestCreateAccount(variables),
  );

export const useEditAccountMutation = () =>
  useMutation<ResponseData, ResponseError, EditAccountVariables>(
    (variables: EditAccountVariables) => requestEditAccount(variables),
  );

export const useDeleteAccountMutation = () =>
  useMutation<ResponseData, ResponseError, number>((accountId: number) =>
    requestDeleteAccount(accountId),
  );
