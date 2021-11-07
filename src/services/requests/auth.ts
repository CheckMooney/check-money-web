import axios from 'axios';
import { API_URL } from 'constants/urls';
import {
  ConfirmCodeVariables,
  ConfirmEmailVariables,
  LoginVariables,
  RegisterVariables,
} from 'types/auth.type';

export const requestGetSelfProfile = async (accessToken: string) => {
  const response = await axios.get<string>(API_URL.GET_SELF_PROFILE, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const requestLogin = async ({ email, password }: LoginVariables) => {
  const response = await axios.post(API_URL.LOGIN, { email, password });
  return response.data;
};

export const requestConfirmEmail = async ({ email }: ConfirmEmailVariables) => {
  const response = await axios.post(API_URL.CONFIRM_EMAIL, { email });
  return response.data;
};

export const requestConfirmCode = async ({
  email,
  code,
}: ConfirmCodeVariables) => {
  const response = await axios.post(API_URL.CONFIRM_CODE, {
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
  const response = await axios.post(API_URL.REGISTER, {
    email,
    name,
    password,
  });
  return response.data;
};

export const reqeustLoginGoogle = async (tokenId: string) => {
  const response = await axios.post(API_URL.LOGIN_GOOGLE, {
    id_token: tokenId,
  });
  return response.data;
};
