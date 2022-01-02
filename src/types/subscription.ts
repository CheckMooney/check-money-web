import {
  CreateTransactionVariables,
  EditTransactionVariables,
} from 'types/transaction';

export interface CreateSubscriptionVariables
  extends CreateTransactionVariables {}

export interface EditSubscriptionVariables extends EditTransactionVariables {}

export interface DeleteSubscriptionVariables {
  accountId: number;
  subscriptionId: number;
}
