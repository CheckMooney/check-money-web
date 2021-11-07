import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import {
  requestConfirmCode,
  requestConfirmEmail,
  requestLogin,
  requestRegister,
} from 'services/requests';
import {
  ConfirmCodeVariables,
  ConfirmEmailVariables,
  LoginData,
  LoginVariables,
  RegisterVariables,
} from 'types/auth.type';
import { CommonData } from 'types/common.type';

export const useLoginMutation = () => {
  return useMutation<LoginData, AxiosError, LoginVariables>((variables) =>
    requestLogin(variables),
  );
};

export const useConfirmEmailMutation = () => {
  return useMutation<CommonData, AxiosError, ConfirmEmailVariables>(
    (variables) => requestConfirmEmail(variables),
  );
};

export const useConfirmCodeMutation = () => {
  return useMutation<CommonData, AxiosError, ConfirmCodeVariables>(
    (variables) => requestConfirmCode(variables),
  );
};

export const useRegisterMutation = () => {
  return useMutation<CommonData, AxiosError, RegisterVariables>((variables) =>
    requestRegister(variables),
  );
};
