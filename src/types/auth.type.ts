import { CommonData } from './common.type';

export interface LoginVariables {
  email: string;
  password: string;
}

export interface RegisterVariables {
  name: string;
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

export interface LoginData extends CommonData {
  token: string;
  refresh_token: string;
}
