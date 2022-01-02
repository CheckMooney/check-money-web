import { ResponseData } from 'types';

export interface User {
  id: number;
  email: string;
  name: string;
  img_url: string;
  provider: string;
}

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

export interface GetSelfProfileData extends ResponseData, User {}

export interface ResetPasswordVariables {
  email: string;
  newPassword: string;
}
