import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'constants/urls';
import {
  getAccessToken,
  getAccessTokenExpiredAt,
  getRefreshToken,
  setAccessToken,
  setAccessTokenExpiredAt,
  setRefreshToken,
} from 'storages';
import { SilentRefreshData } from 'types/auth';
import ResponseError from 'utils/error';

export const publicClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const errorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    throw new ResponseError(error.response?.data?.code);
  } else {
    throw new ResponseError();
  }
};

publicClient.interceptors.response.use(
  (response) => response,
  (error) => {
    errorHandler(error);
  },
);

export const privateClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

privateClient.interceptors.response.use(
  (response) => response,
  (error) => {
    errorHandler(error);
  },
);

privateClient.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();
    const accessTokenExpiredAt = getAccessTokenExpiredAt();
    const isAccessTokenExpired = accessTokenExpiredAt
      ? new Date().getTime() > parseInt(accessTokenExpiredAt)
      : true;

    if (!isAccessTokenExpired && accessToken) {
      // accessToken이 유효한 경우
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    } else if (isAccessTokenExpired && accessToken && refreshToken) {
      // accessToken이 유효하지 않은 경우
      const {
        data: { access_token: newAccessToken, refresh_token: newRefreshToken },
      } = await publicClient.post<SilentRefreshData>(API_URL.SILENT_REFRESH, {
        refresh_token: refreshToken,
      });
      setRefreshToken(newRefreshToken);
      setAccessToken(newAccessToken);
      setAccessTokenExpiredAt();
      config.headers = {
        Authorization: `Bearer ${newAccessToken}`,
      };
    }
    return config;
  },
  function (error) {
    setAccessToken('');
    setAccessTokenExpiredAt('');
  },
);

export * from './auth';
