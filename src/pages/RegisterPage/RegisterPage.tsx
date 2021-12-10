import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { useRegisterContext } from 'contexts/RegisterContext';
import Button from 'components/common/Button/Button';
import TextLink from 'components/common/TextLink/TextLink';
import AuthFormTemplate from 'components/common/AuthFormTemplate/AuthFormTemplate';
import AuthFormInput from 'components/common/AuthFormInput/AuthFormInput';
import {
  ConfirmCodeSchema,
  ConfirmEmailSchema,
  CONFIRM_CODE_SCHEMA,
  CONFIRM_EMAIL_SCHEMA,
  RegisterSchema,
  REGISTER_SCHEMA,
} from 'constants/schema';
import { ValidationItem, ValidationWrapper } from './RegisterPage.style';
import {
  useConfirmCodeMutation,
  useConfirmEmailMutation,
  useRegisterMutation,
} from 'services/queries/auth';

interface FormProps<T> {
  onSubmit: (data: T) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

const ConfirmEmailForm = ({
  onSubmit,
  isLoading,
  errorMessage,
}: FormProps<ConfirmEmailSchema>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CONFIRM_EMAIL_SCHEMA),
  });

  const ConfirmEmailFooter = () => (
    <>
      이미 가입하셨나요?{' '}
      <TextLink to="/auth/login" color="primary">
        로그인
      </TextLink>
    </>
  );

  return (
    <AuthFormTemplate
      title="회원가입"
      footerComponent={<ConfirmEmailFooter />}
      errorMessage={errorMessage}
      enableOAuth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="email"
          label="이메일"
          type="email"
          errorMessage={errors.email?.message}
          autoFocus
          {...register('email')}
        />
        <Button
          buttonType="fullWidth"
          type="submit"
          isLoading={isLoading}
          disabled={!isValid || !isDirty}
        >
          이메일로 가입
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

const ConfirmCodeForm = ({
  onSubmit,
  isLoading,
  errorMessage,
}: FormProps<ConfirmCodeSchema>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CONFIRM_CODE_SCHEMA),
  });

  const ConfirmCodeFooter = () => (
    <TextLink to="/auth/resend-email" color="primary">
      인증코드 재전송
    </TextLink>
  );

  return (
    <AuthFormTemplate
      title="인증코드 입력"
      subtitle="이메일로 전송된 인증코드를 입력하세요"
      errorMessage={errorMessage}
      footerComponent={<ConfirmCodeFooter />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="code"
          label="인증코드"
          type="number"
          pattern="\d+"
          errorMessage={errors.code?.message}
          autoFocus
          {...register('code')}
        />
        <Button
          buttonType="fullWidth"
          type="submit"
          isLoading={isLoading}
          disabled={!isValid || !isDirty}
        >
          인증코드 제출
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

const RegisterForm = ({
  onSubmit,
  isLoading,
  errorMessage,
}: FormProps<RegisterSchema>) => {
  const { currentEmail } = useRegisterContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(REGISTER_SCHEMA),
  });

  const passwordValidations = [
    {
      regex: /[A-Za-z]/,
      label: '영 대,소문자 포함',
    },
    {
      regex: /[0-9]/,
      label: '숫자(0-9) 포함',
    },
    {
      regex: /[$@$!%*#?&]/,
      label: '특수문자($@$!%*#?&) 포함',
    },
    {
      regex: /^.{8,16}$/,
      label: '길이 8-16자',
    },
  ];

  const validatePassword = (regex: RegExp) => {
    return Boolean(watch('password', '').match(regex));
  };

  return (
    <AuthFormTemplate
      title="거의 마쳤습니다."
      subtitle="가입에 필요한 나머지 정보를 입력해주세요."
      errorMessage={errorMessage}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="email"
          label="이메일"
          type="email"
          defaultValue={currentEmail ?? ''}
          readOnly
          disabled
        />
        <AuthFormInput
          id="name"
          label="이름 (닉네임)"
          type="text"
          errorMessage={errors.name?.message}
          autoFocus
          {...register('name')}
        />
        <AuthFormInput
          id="password"
          label="비밀번호"
          type="password"
          {...register('password')}
        />
        <ValidationWrapper>
          <ul>
            {passwordValidations.map(({ label, regex }) => (
              <ValidationItem key={label} isValid={validatePassword(regex)}>
                <IoCheckmarkOutline size={14} />
                {label}
              </ValidationItem>
            ))}
          </ul>
        </ValidationWrapper>
        <Button
          buttonType="fullWidth"
          type="submit"
          isLoading={isLoading}
          disabled={!isValid || !isDirty}
        >
          회원 가입
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

const RegisterPage = () => {
  const {
    currentEmail,
    isEmailConfirmed,
    isCodeConfirmed,
    setInitialState,
    confirmEmail,
    confirmCode,
  } = useRegisterContext();
  const {
    mutate: confirmEmailMutate,
    isLoading: confirmEmailLoading,
    error: confirmEmailError,
  } = useConfirmEmailMutation();
  const {
    mutate: confirmCodeMutate,
    isLoading: confirmCodeLoading,
    error: confirmCodeError,
  } = useConfirmCodeMutation();
  const {
    mutate: registerMutate,
    isLoading: registerLoading,
    error: registerError,
  } = useRegisterMutation();

  useEffect(() => {
    return () => {
      setInitialState();
    };
  }, [setInitialState]);

  const onConfirmEmail = ({ email }: ConfirmEmailSchema) => {
    confirmEmailMutate(
      { email },
      {
        onSuccess: () => confirmEmail(email),
      },
    );
  };

  const onConfirmCode = ({ code }: ConfirmCodeSchema) => {
    confirmCodeMutate(
      { email: currentEmail, code },
      {
        onSuccess: () => confirmCode(),
      },
    );
  };

  const onRegister = ({ name, password }: RegisterSchema) => {
    registerMutate(
      { email: currentEmail, name, password },
      {
        onSuccess: () => setInitialState(),
      },
    );
  };

  if (isEmailConfirmed && isCodeConfirmed) {
    return (
      <RegisterForm
        onSubmit={onRegister}
        isLoading={registerLoading}
        errorMessage={registerError?.message}
      />
    );
  }
  if (isEmailConfirmed) {
    return (
      <ConfirmCodeForm
        onSubmit={onConfirmCode}
        isLoading={confirmCodeLoading}
        errorMessage={confirmCodeError?.message}
      />
    );
  }
  return (
    <ConfirmEmailForm
      onSubmit={onConfirmEmail}
      isLoading={confirmEmailLoading}
      errorMessage={confirmEmailError?.message}
    />
  );
};

export default RegisterPage;
