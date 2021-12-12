import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  requestDeleteProfileImage,
  requestEditProfileImage,
  requestEditProfileName,
  requestGetMyProfile,
} from 'services/requests/user';

export const useUserQuery = () => {
  return useQuery('user', requestGetMyProfile);
};

export const useEditProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(requestEditProfileImage, {
    onSuccess: async () => {
      await queryClient.refetchQueries('user');
    },
  });
};

export const useDeleteProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(requestDeleteProfileImage, {
    onSuccess: async () => {
      await queryClient.refetchQueries('user');
    },
  });
};

export const useEditProfileNameMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(requestEditProfileName, {
    onSuccess: async () => {
      await queryClient.refetchQueries('user');
    },
  });
};
