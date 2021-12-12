import React from 'react';
import ModalPortal from '../ModalPortal/ModalPortal';
import ProfileImage from 'components/common/ProfileImage/ProfileImage';
import ProfileImageInput from 'components/common/ProfileImageInput/ProfileImageInput';
import {
  useEditProfileNameMutation,
  useUserQuery,
} from 'services/queries/user';

import {
  FormField,
  FormWrapper,
  Label,
  ProfileImageDescription,
  ProfileImageInputWrapper,
  ProfileImageWrapper,
  TextInput,
} from './ProfileModal.style';
import Button from 'components/common/Button/Button';
import { FooterWrapper } from 'components/Form/TransactionForm/TransactionForm.style';
import { useForm } from 'react-hook-form';

interface ProfileModalProps {
  onClose: () => void;
}

interface ProfileSchema {
  name: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { data: userData } = useUserQuery();
  const { mutate } = useEditProfileNameMutation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ProfileSchema>({
    mode: 'onChange',
    defaultValues: {
      name: userData?.name,
    },
  });

  const onSubmit = (data: ProfileSchema) => {
    mutate(data.name, {
      onSuccess: () => {
        reset(data);
      },
    });
  };

  return (
    <ModalPortal onClose={onClose} title="내 계정">
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>사진</Label>
          <ProfileImageWrapper>
            <ProfileImage variant="large" cssProps={`margin-right: 1rem;`} />
            <div>
              <ProfileImageInputWrapper>
                <ProfileImageInput
                  inputType="edit"
                  label={userData?.img_url ? '사진 변경' : '사진 업로드'}
                  cssProps={`margin-right: 0.5rem;`}
                />
                {userData?.img_url && (
                  <ProfileImageInput inputType="delete" label="사진 삭제" />
                )}
              </ProfileImageInputWrapper>
              <ProfileImageDescription>
                최대 4MB의 사진을 선택하세요.
              </ProfileImageDescription>
            </div>
          </ProfileImageWrapper>
        </FormField>
        <FormField>
          <Label>이름</Label>
          <TextInput {...register('name')} />
        </FormField>
        <FooterWrapper>
          <Button
            type="submit"
            buttonType="small"
            cssProps={`margin-right: 0.5rem;`}
            disabled={!isValid || !isDirty}
          >
            적용
          </Button>
          <Button
            type="button"
            buttonType="small"
            color="base"
            onClick={onClose}
          >
            취소
          </Button>
        </FooterWrapper>
      </FormWrapper>
    </ModalPortal>
  );
};

export default ProfileModal;
