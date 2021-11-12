import { ResponseData } from 'types';

export interface LoginData extends ResponseData {
  access_token: string;
  refresh_token: string;
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface ConfirmEmailVariables {
  email: string;
}

export interface ConfirmCodeVariables {
  email: string;
  code: string;
}

export interface RegisterVariables extends LoginVariables {
  name: string;
}

export interface SilentRefreshData extends ResponseData {
  access_token: string;
  refresh_token: string;
}
