import { API_URL } from 'constants/urls';
import { privateClient, publicClient } from '.';
import {
  ConfirmCodeVariables,
  ConfirmEmailVariables,
  LoginVariables,
  RegisterVariables,
} from 'types/auth';

export const requestGetSelfProfile = async () => {
  const response = await privateClient.get(API_URL.GET_SELF_PROFILE);
  return response.data;
};

export const requestLogin = async ({ email, password }: LoginVariables) => {
  const response = await publicClient.post(API_URL.LOGIN, { email, password });
  return response.data;
};

export const requestConfirmEmail = async ({ email }: ConfirmEmailVariables) => {
  const { data } = await publicClient.post(API_URL.CONFIRM_EMAIL, { email });
  return data;
};

export const requestConfirmCode = async ({
  email,
  code,
}: ConfirmCodeVariables) => {
  const response = await publicClient.post(API_URL.CONFIRM_CODE, {
    email,
    auth_num: code,
  });
  return response.data;
};

export const requestRegister = async ({
  email,
  name,
  password,
}: RegisterVariables) => {
  const response = await publicClient.post(API_URL.REGISTER, {
    email,
    name,
    password,
  });
  return response.data;
};

export const reqeustLoginGoogle = async (tokenId: string) => {
  const response = await publicClient.post(API_URL.LOGIN_GOOGLE, {
    id_token: tokenId,
  });
  return response.data;
};
