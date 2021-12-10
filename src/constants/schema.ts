import { boolean, date, number, object, SchemaOf, string } from 'yup';
import { CONFIRM_CODE_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from './regex';

export interface LoginSchema {
  email: string;
  password: string;
}

export const LOGIN_SCHEMA: SchemaOf<LoginSchema> = object({
  email: string()
    .matches(EMAIL_REGEX, '올바른 이메일 형식이 아닙니다.')
    .required(),
  password: string().required(),
});

export interface ConfirmEmailSchema {
  email: string;
}

export const CONFIRM_EMAIL_SCHEMA: SchemaOf<ConfirmEmailSchema> = object({
  email: string()
    .matches(EMAIL_REGEX, '올바른 이메일 형식이 아닙니다.')
    .required(),
});

export interface ConfirmCodeSchema {
  code: string;
}

export const CONFIRM_CODE_SCHEMA: SchemaOf<ConfirmCodeSchema> = object({
  code: string()
    .matches(CONFIRM_CODE_REGEX, '인증코드는 6자리로 이루어진 숫자입니다.')
    .required(),
});

export interface RegisterSchema {
  name: string;
  password: string;
}

export const REGISTER_SCHEMA: SchemaOf<RegisterSchema> = object({
  name: string()
    .min(2, '이름(닉네임)은 2자 이상이어야합니다.')
    .max(16, '이름(닉네임)은 16자 이하여야합니다')
    .required(),
  password: string()
    .matches(
      PASSWORD_REGEX,
      '비밀번호는 영대,소문자 숫자 특수문자를 포함한 8~16자로 이루어져야합니다.',
    )
    .required(),
});

export interface FindPasswordSchema {
  email: string;
}

export const FIND_PASSWORD_SCHEMA: SchemaOf<FindPasswordSchema> = object({
  email: string()
    .matches(EMAIL_REGEX, '올바른 이메일 형식이 아닙니다.')
    .required(),
});

export interface AccountSchema {
  title: string;
  description: string;
}

export const ACCOUNT_SCHEMA: SchemaOf<AccountSchema> = object({
  title: string()
    .max(10, '이름은 10자 이하이어야합니다.')
    .required('이름은 필수 항목입니다.'),
  description: string().max(40, '설명은 40자 이하이어야합니다.').default(''),
});

export interface TransactionSchema {
  is_consumption: boolean;
  price: number;
  detail: string;
  date: Date;
  category: number;
  account_id: number;
}

export const TRANSACTION_SCHEMA: SchemaOf<TransactionSchema> = object({
  is_consumption: boolean().default(true).required(),
  price: number()
    .min(0, '입력한 금액이 너무 작습니다.')
    .max(999_999_999_999, '입력한 금액이 너무 큽니다.')
    .required(),
  detail: string().max(40, '설명은 40자 이하이어야합니다.').default(''),
  date: date().required(),
  category: number().min(0).required(),
  account_id: number().min(0).required(),
});
