const STORAGES_KEY = {
  ACCESS_TOKEN: 'accessToken',
};

export const getAccessToken = () =>
  localStorage.getItem(STORAGES_KEY.ACCESS_TOKEN);
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(STORAGES_KEY.ACCESS_TOKEN, accessToken);
