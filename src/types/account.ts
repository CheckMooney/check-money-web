import { ResponseData } from 'types';

export interface Account {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

export interface GetAccountsData extends ResponseData {
  rows: Account[];
  count: number;
}

export type CreateAccountVariables = Pick<Account, 'title' | 'description'>;
export type EditAccountVariables = Pick<
  Account,
  'id' | 'title' | 'description'
>;
