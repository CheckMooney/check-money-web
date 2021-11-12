import { API_ERROR_MESSAGE, UNKNOWN_ERROR_MESSAGE } from 'constants/messages';
import { APIErrorCode } from 'types';

export const getAPIErrorMessage = (errorCode: APIErrorCode) => {
  return API_ERROR_MESSAGE[errorCode] ?? UNKNOWN_ERROR_MESSAGE;
};
