import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import {
  requestConfirmCode,
  requestConfirmEmail,
  requestLogin,
  requestRegister,
} from 'services/requests';
import { ResponseData } from 'types';
import {
  ConfirmCodeVariables,
  ConfirmEmailVariables,
  LoginData,
  LoginVariables,
  RegisterVariables,
} from 'types/auth';

export const useLoginMutation = () => {
  return useMutation<LoginData, AxiosError, LoginVariables>((variables) =>
    requestLogin(variables),
  );
};

export const useConfirmEmailMutation = () => {
  return useMutation<ResponseData, AxiosError, ConfirmEmailVariables>(
    (variables) => requestConfirmEmail(variables),
  );
};

export const useConfirmCodeMutation = () => {
  return useMutation<ResponseData, AxiosError, ConfirmCodeVariables>(
    (variables) => requestConfirmCode(variables),
  );
};

export const useRegisterMutation = () => {
  return useMutation<ResponseData, AxiosError, RegisterVariables>((variables) =>
    requestRegister(variables),
  );
};
