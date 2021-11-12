import { API_ERROR_MESSAGE } from 'constants/messages';

export type APIErrorCode = keyof typeof API_ERROR_MESSAGE;

export interface ResponseData {
  result: boolean;
  code: number;
  message: string;
}
