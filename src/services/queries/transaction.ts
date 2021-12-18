import { useMutation, useQuery } from 'react-query';
import {
  requestCreateTransaction,
  requestDeleteTransaction,
  requestEditTransaction,
  requestGetAllTransactions,
  requestGetCategory,
  requestGetTransactions,
} from 'services/requests/transaction';
import ResponseError from 'utils/error';
import { ResponseData } from 'types';
import {
  CreateTransactionVariables,
  EditTransactionVariables,
  Transaction,
} from 'types/transaction';

export const useGetTransactionsQuery = (accountId: number, date: string) =>
  useQuery<Transaction[], ResponseError>(
    ['transactions', { accountId, date }],
    () => requestGetTransactions(accountId, date),
  );

export const useGetAllTransactionsQuery = (date: string) =>
  useQuery<Transaction[], ResponseError>(['allTransactions', { date }], () =>
    requestGetAllTransactions(date),
  );

export const useGetCategoryQuery = () =>
  useQuery<string[], ResponseError>('category', requestGetCategory);

export const useCreateTransactionMutation = () =>
  useMutation<ResponseData, ResponseError, CreateTransactionVariables>(
    requestCreateTransaction,
  );

export const useEditTransactionMutation = () =>
  useMutation<ResponseData, ResponseError, EditTransactionVariables>(
    requestEditTransaction,
  );

export const useDeleteTransactionMutation = () =>
  useMutation<ResponseData, ResponseError, number>(requestDeleteTransaction);
