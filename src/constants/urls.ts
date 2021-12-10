export const API_URL = {
  CONFIRM_EMAIL: '/auth/request/email',
  CONFIRM_CODE: '/auth/confirm',
  REGISTER: '/auth/join',
  LOGIN: '/auth/login/email',
  LOGIN_GOOGLE: '/auth/login/google',
  SILENT_REFRESH: '/auth/refresh',
  GET_SELF_PROFILE: '',
  ACCOUNTS: '/accounts',
  GET_TRANSACTIONS: (accountId: number) =>
    `/accounts/${accountId}/transactions`,
  CREATE_TRANSACTION: '/transactions',
  TRANSACTION: (transactionId: number) => `/transactions/${transactionId}`,
  CATEGORY: '/category',
};
