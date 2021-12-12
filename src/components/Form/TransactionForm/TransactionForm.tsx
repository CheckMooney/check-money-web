import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { dateToString } from 'utils/date';
import { TransactionSchema, TRANSACTION_SCHEMA } from 'constants/schema';
import Button from 'components/common/Button/Button';
import DatePicker from 'components/common/DatePicker/DatePicker';

import {
  FormWrapper,
  FooterWrapper,
  FormLabel,
  TextInput,
  FormField,
  ToggleButtonWrapper,
  ToggleIndicator,
  ToggleButton,
  FormSelect,
  DatePickerInput,
} from './TransactionForm.style';
import { useGetAccountsQuery } from 'services/queries/account';
import { useGetCategoryQuery } from 'services/queries/transaction';
import Spinner from 'components/common/Spinner/Spinner';

interface TransactionFormProps {
  defaultValues?: TransactionSchema;
  isLoading?: boolean;
  onSubmit: (data: TransactionSchema) => void;
  onCancel: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  defaultValues,
  isLoading,
  onSubmit,
  onCancel,
}) => {
  const { data: accountsData, isLoading: isGetAccountLoading } =
    useGetAccountsQuery();
  const { data: categoriesData, isLoading: isGetCategoryLoading } =
    useGetCategoryQuery();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, isDirty },
  } = useForm<TransactionSchema>({
    mode: 'onChange',
    resolver: yupResolver(TRANSACTION_SCHEMA),
    defaultValues,
  });

  const watchIsConsumption = watch('is_consumption');

  if (isGetAccountLoading || isGetCategoryLoading) {
    <div>
      <Spinner />
    </div>;
  }

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ToggleButtonWrapper>
          <ToggleIndicator isRight={!watchIsConsumption} />
          <ToggleButton
            type="button"
            isActive={watchIsConsumption}
            onClick={() => setValue('is_consumption', true)}
          >
            지출
          </ToggleButton>
          <ToggleButton
            type="button"
            isActive={!watchIsConsumption}
            onClick={() => setValue('is_consumption', false)}
          >
            수입
          </ToggleButton>
        </ToggleButtonWrapper>
        <FormField>
          <FormLabel>금액을 입력하세요</FormLabel>
          <TextInput
            id="price"
            type="number"
            pattern="\d*"
            {...register('price', { valueAsNumber: true })}
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="date">
            {watchIsConsumption ? '지출' : '수입'} 일시
          </FormLabel>
          <DatePicker id="date" {...register('date', { valueAsDate: true })}>
            <DatePickerInput>
              {dateToString(watch('date'), 'yyyy년 mm월 dd일')}
            </DatePickerInput>
          </DatePicker>
        </FormField>
        <FormField>
          <FormLabel htmlFor="category">카테고리</FormLabel>
          <FormSelect id="category" {...register('category')}>
            <option value={-1}>카테고리를 선택하세요.</option>
            {categoriesData?.map((category, index) => (
              <option key={index} value={index}>
                {category}
              </option>
            ))}
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel htmlFor="account-id">계좌 선택</FormLabel>
          <FormSelect id="account-id" {...register('account_id')}>
            <option value={-1}>계좌 선택하세요.</option>
            {accountsData?.rows.map((account) => (
              <option key={account.id} value={account.id}>
                {account.title}
              </option>
            ))}
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel htmlFor="detail">설명</FormLabel>
          <TextInput type="text" id="detail" {...register('detail')} />
        </FormField>
        <FooterWrapper>
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
        </FooterWrapper>
      </FormWrapper>
    </div>
  );
};

export default TransactionForm;
