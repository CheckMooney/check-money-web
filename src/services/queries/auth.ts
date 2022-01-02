import { useMutation } from 'react-query';
import {
  requestConfirmCode,
  requestConfirmEmail,
  requestFindPassword,
  requestLogin,
  requestRegister,
  requestResetPassword,
} from 'services/requests';
import {
  ConfirmCodeVariables,
  ConfirmEmailVariables,
  LoginData,
  LoginVariables,
  RegisterVariables,
  ResetPasswordVariables,
} from 'types/auth';
import { ResponseData } from 'types';
import ResponseError from 'utils/error';

export const useLoginMutation = () => {
  return useMutation<LoginData, ResponseError, LoginVariables>((variables) =>
    requestLogin(variables),
  );
};

export const useConfirmEmailMutation = () => {
  return useMutation<ResponseData, ResponseError, ConfirmEmailVariables>(
    (variables) => requestConfirmEmail(variables),
  );
};

export const useConfirmCodeMutation = () => {
  return useMutation<ResponseData, ResponseError, ConfirmCodeVariables>(
    (variables) => requestConfirmCode(variables),
  );
};

export const useRegisterMutation = () => {
  return useMutation<ResponseData, ResponseError, RegisterVariables>(
    (variables) => requestRegister(variables),
  );
};

export const useFindPasswordMutation = () => {
  return useMutation<ResponseData, ResponseError, string>((email) =>
    requestFindPassword(email),
  );
};

export const useResetPasswordMutation = () => {
  return useMutation<ResponseData, ResponseError, ResetPasswordVariables>(
    (variables) => requestResetPassword(variables),
  );
};
