import React, { useRef } from 'react';
import { CSSProp } from 'styled-components';
import {
  useDeleteProfileImageMutation,
  useEditProfileImageMutation,
} from 'services/queries/user';
import { ProfileImageButton } from './ProfileImageInput.style';

interface ProfileImageInputProps {
  inputType?: 'edit' | 'delete';
  label?: string;
  cssProps?: CSSProp;
}

const ProfileImageInput: React.FC<ProfileImageInputProps> = ({
  inputType = 'edit',
  label,
  cssProps,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: editProfileImageMutation, isLoading: isEditLoading } =
    useEditProfileImageMutation();
  const {
    mutateAsync: deleteProfileImageMutation,
    isLoading: isDeleteLoading,
  } = useDeleteProfileImageMutation();

  const handleEditProfileImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files) {
      const imageFile: File = e.target.files[0];
      await editProfileImageMutation(imageFile);
    }
  };

  const onImageInputButtonClick = async () => {
    if (inputType === 'edit') {
      inputRef.current?.click();
    } else {
      await deleteProfileImageMutation();
    }
  };

  return (
    <ProfileImageButton
      type="button"
      buttonType="small"
      color="base"
      isLoading={isEditLoading || isDeleteLoading}
      onClick={onImageInputButtonClick}
      inputType={inputType}
      cssProps={cssProps}
    >
      {inputType === 'edit' && (
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          style={{ display: 'none' }}
          onChange={handleEditProfileImage}
          ref={inputRef}
        />
      )}
      {label}
    </ProfileImageButton>
  );
};

export default ProfileImageInput;
