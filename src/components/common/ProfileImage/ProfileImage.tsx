import React, { useMemo } from 'react';
import { useUserQuery } from 'services/queries/user';
import { CSSProp } from 'styled-components';
import { ProfileImageWrapper } from './ProfileImage.style';

interface ProfileImageProps {
  variant?: 'small' | 'large';
  cssProps?: CSSProp;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  variant = 'small',
  cssProps,
}) => {
  const { data: userData } = useUserQuery();

  const getImageURL = () =>
    userData?.img_url
      ? userData?.img_url
      : `https://avatars.doist.com/?fullName=${userData?.name}&email=${userData?.email}&size=195&bg=ffffff`;

  const profileImageSrc = useMemo(getImageURL, [userData]);

  return (
    <ProfileImageWrapper variant={variant} $cssProps={cssProps}>
      <img src={profileImageSrc} alt="사용자 프로필 이미지" />
    </ProfileImageWrapper>
  );
};

export default ProfileImage;
