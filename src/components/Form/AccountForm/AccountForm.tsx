import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountSchema, ACCOUNT_SCHEMA } from 'constants/schema';
import {
  ActionWrapper,
  Form,
  FormField,
  Label,
  TextInput,
  InputError,
} from './AccountForm.style';
import Button from 'components/common/Button/Button';

interface AccountFormProps {
  defaultValues?: AccountSchema;
  isLoading?: boolean;
  onSubmit: (data: AccountSchema) => void;
  onCancel: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({
  defaultValues,
  isLoading,
  onSubmit,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<AccountSchema>({
    mode: 'onChange',
    resolver: yupResolver(ACCOUNT_SCHEMA),
    defaultValues,
  });

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>이름</Label>
          <TextInput type="text" {...register('title')} />
          <InputError>{errors.title?.message}</InputError>
        </FormField>
        <FormField>
          <Label>설명</Label>
          <TextInput type="text" {...register('description')} />
          <InputError>{errors.description?.message}</InputError>
        </FormField>

        <ActionWrapper>
          <Button
            type="submit"
            buttonType="small"
            isLoading={isLoading}
            disabled={!isValid || !isDirty}
          >
            확인
          </Button>
          <Button
            type="button"
            buttonType="small"
            color="base"
            onClick={onCancel}
            cssProps={`
            margin-left: 0.5rem;
          `}
          >
            취소
          </Button>
        </ActionWrapper>
      </Form>
    </div>
  );
};

export default AccountForm;
