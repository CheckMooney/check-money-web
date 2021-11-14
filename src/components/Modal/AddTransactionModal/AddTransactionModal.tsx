import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DatePicker } from 'components/DatePicker/DatePicker';
import {
  AddModalForm,
  AddModalHeader,
  AddModalWrapper,
  PriceInput,
  Label,
  PriceWrapper,
  ToggleButton,
  ToggleButtonWrapper,
  ToggleIndicator,
  CategoryDateWrapper,
  CategorySelect,
  FooterWrapper,
  SubmitButton,
  CancelButton,
} from './AddTransactionModal.styles';
import ModalPortal from 'components/Portal/Modal/Modal';

export interface AddFormData {
  price: number;
  date: Date;
}

const categories = [
  '식비',
  '쇼핑',
  '주거비',
  '의료비',
  '생활용품비',
  '통신비',
  '교통비',
  '기타',
];

interface AddTransactionModalProps {
  onClose: () => void;
}

export const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  onClose,
}) => {
  const [addType, setAddType] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { register, handleSubmit } = useForm<AddFormData>({
    defaultValues: {
      price: 0,
      date: new Date(),
    },
  });

  const onSubmit = (data: AddFormData) => {
    console.log(data);
  };

  return (
    <ModalPortal onClose={onClose}>
      <AddModalWrapper>
        <AddModalHeader>소비를 추가해주세요.</AddModalHeader>
        <AddModalForm onSubmit={handleSubmit(onSubmit)}>
          <ToggleButtonWrapper>
            <ToggleIndicator isRight={addType} />
            <ToggleButton
              type="button"
              onClick={() => setAddType(false)}
              isActive={!addType}
            >
              지출
            </ToggleButton>
            <ToggleButton
              type="button"
              onClick={() => setAddType(true)}
              isActive={addType}
            >
              수입
            </ToggleButton>
          </ToggleButtonWrapper>
          <PriceWrapper>
            <Label>금액을 입력하세요.</Label>
            <PriceInput
              id="price"
              type="number"
              pattern="\d*"
              placeholder="금액을 입력하세요."
              {...register('price', { min: 0 })}
            />
          </PriceWrapper>
          <CategoryDateWrapper>
            <CategorySelect
              name="category"
              id="category"
              defaultValue={categories[0]}
            >
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </CategorySelect>
            <DatePicker startDate={startDate} onChange={setStartDate} />
          </CategoryDateWrapper>

          <FooterWrapper>
            <SubmitButton type="submit">확인</SubmitButton>
            <CancelButton onClick={onClose}>취소</CancelButton>
          </FooterWrapper>
        </AddModalForm>
      </AddModalWrapper>
    </ModalPortal>
  );
};
