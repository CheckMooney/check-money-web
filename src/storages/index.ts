const STORAGES_KEY = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  ACCESS_TOKEN_EXPIRED_AT: 'accessTokenExpiredAt',
  SIDEBAR_OPTIONS: 'sidebarOptions',
};

const ACCESS_TOKEN_EXPIRE_TIME = 59 * 60 * 1000;

export const getAccessToken = () =>
  localStorage.getItem(STORAGES_KEY.ACCESS_TOKEN);

export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(STORAGES_KEY.ACCESS_TOKEN, accessToken);

export const getRefreshToken = () =>
  localStorage.getItem(STORAGES_KEY.REFRESH_TOKEN);

export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem(STORAGES_KEY.REFRESH_TOKEN, refreshToken);

export const setAccessTokenExpiredAt = (expiredAt?: string) =>
  localStorage.setItem(
    STORAGES_KEY.ACCESS_TOKEN_EXPIRED_AT,
    expiredAt ?? new Date().getTime().toString() + ACCESS_TOKEN_EXPIRE_TIME,
  );

export const getAccessTokenExpiredAt = () =>
  localStorage.getItem(STORAGES_KEY.ACCESS_TOKEN_EXPIRED_AT);

export const getSidebarOptions = () => {
  const sidebarOptions = localStorage.getItem(STORAGES_KEY.SIDEBAR_OPTIONS);
  return sidebarOptions ? JSON.parse(sidebarOptions) : null;
};

export const setSidebarOptions = (sidebarOptions: boolean) =>
  localStorage.setItem(
    STORAGES_KEY.SIDEBAR_OPTIONS,
    JSON.stringify(sidebarOptions),
  );
