export const API_URL = {
  CONFIRM_EMAIL: '/auth/request/email',
  FIND_PASSWORD: '/auth/request/email-for-pwd',
  RESET_PASSWORD: '/auth/find-pwd',
  CONFIRM_CODE: '/auth/confirm',
  REGISTER: '/auth/join',
  LOGIN: '/auth/login/email',
  LOGIN_GOOGLE: '/auth/login/google',
  SILENT_REFRESH: '/auth/refresh',
  MY_PROFILE: '/users/my-info',
  ACCOUNTS: '/accounts',
  GET_TRANSACTIONS: `/transactions`,
  CREATE_TRANSACTION: '/transactions',
  CATEGORY: '/category',
  UPLOAD_IMAGE: '/users/img',
  TRANSACTION: (transactionId: number) => `/transactions/${transactionId}`,
  SUBSCRIPTION: (accountId: number, subscriptionId?: number) =>
    subscriptionId
      ? `/accounts/${accountId}/subscriptions/${subscriptionId}`
      : `/accounts/${accountId}/subscriptions`,
};
