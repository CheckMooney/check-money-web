import { useMutation, useQuery } from 'react-query';
import {
  requestCreateSubscription,
  requestDeleteSubscription,
  requestEditSubscription,
  requestGetSubscriptions,
} from 'services/requests/subscription';
import { ResponseData } from 'types';
import {
  CreateSubscriptionVariables,
  DeleteSubscriptionVariables,
  EditSubscriptionVariables,
} from 'types/subscription';
import { Transaction } from 'types/transaction';
import ResponseError from 'utils/error';

export const useGetSubscriptionsQuery = (accountId: number) =>
  useQuery<Transaction[], ResponseError>(['subscriptions', { accountId }], () =>
    requestGetSubscriptions(accountId),
  );

export const useCreateSubscriptionMutation = () =>
  useMutation<ResponseData, ResponseError, CreateSubscriptionVariables>(
    requestCreateSubscription,
  );

export const useEditSubscriptionMutation = () =>
  useMutation<ResponseData, ResponseError, EditSubscriptionVariables>(
    requestEditSubscription,
  );

export const useDeleteSubscriptionMutation = () =>
  useMutation<ResponseData, ResponseError, DeleteSubscriptionVariables>(
    requestDeleteSubscription,
  );
