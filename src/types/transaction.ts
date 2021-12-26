import { ResponseData } from 'types';

export interface Transaction {
  id: number;
  is_consumption: number;
  price: number;
  detail: string;
  date: string;
  category: number;
  account_id: number;
}

export interface GetCategoryData extends ResponseData {
  category: string[];
}

export interface GetTransactionsData extends ResponseData {
  rows: Transaction[];
  count: number;
}

export interface CreateTransactionVariables {
  is_consumption: boolean;
  price: number;
  detail: string;
  date: Date;
  category: number;
  account_id: number;
}

export interface EditTransactionVariables extends CreateTransactionVariables {
  id: number;
}
