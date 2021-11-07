import axios from 'axios';

switch (process.env.NODE_ENV) {
  case 'development':
    axios.defaults.baseURL =
      'http://ec2-3-38-105-161.ap-northeast-2.compute.amazonaws.com:3001/api';
    break;
  case 'production':
    axios.defaults.baseURL = '';
    break;
}

export * from './auth';
