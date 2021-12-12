import { privateClient } from '.';
import { API_URL } from 'constants/urls';
import { GetSelfProfileData } from 'types/auth';

export const requestGetMyProfile = async () => {
  const response = await privateClient.get<GetSelfProfileData>(
    API_URL.MY_PROFILE,
  );
  return response.data;
};

export const requestEditProfileImage = async (imageFile: File) => {
  const formData = new FormData();
  formData.append('img', imageFile);

  const { data } = await privateClient.post(API_URL.UPLOAD_IMAGE, formData);
  await privateClient.put(API_URL.MY_PROFILE, {
    img_url: `${privateClient.defaults.baseURL}${data.url}`,
  });
};

export const requestDeleteProfileImage = async () => {
  await privateClient.put(API_URL.MY_PROFILE, {
    img_url: '',
  });
};

export const requestEditProfileName = async (name: string) => {
  await privateClient.put(API_URL.MY_PROFILE, {
    name,
  });
};
