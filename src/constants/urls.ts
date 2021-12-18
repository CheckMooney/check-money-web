export const API_URL = {
  CONFIRM_EMAIL: '/auth/request/email',
  CONFIRM_CODE: '/auth/confirm',
  REGISTER: '/auth/join',
  LOGIN: '/auth/login/email',
  LOGIN_GOOGLE: '/auth/login/google',
  SILENT_REFRESH: '/auth/refresh',
  MY_PROFILE: '/users/my-info',
  ACCOUNTS: '/accounts',
  GET_TRANSACTIONS: `/transactions`,
  CREATE_TRANSACTION: '/transactions',
  TRANSACTION: (transactionId: number) => `/transactions/${transactionId}`,
  CATEGORY: '/category',
  UPLOAD_IMAGE: '/users/img',
};
