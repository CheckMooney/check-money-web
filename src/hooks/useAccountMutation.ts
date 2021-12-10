import { useQueryClient } from 'react-query';
import { useSnackbarContext } from 'contexts/SnackbarContext';
import { CreateAccountVariables, EditAccountVariables } from 'types/account';
import {
  useCreateAccountMutation,
  useDeleteAccountMutation,
  useEditAccountMutation,
} from 'services/queries/account';

const useAccountMutation = () => {
  const queryClient = useQueryClient();
  const { pushSnackbarMessage } = useSnackbarContext();

  const {
    mutateAsync: mutateCreateAccount,
    isLoading: isCreateAccountLoading,
  } = useCreateAccountMutation();
  const { mutateAsync: mutateEditAccount, isLoading: isEditAccountLoading } =
    useEditAccountMutation();
  const { mutate: mutateDeleteAccount } = useDeleteAccountMutation();

  const createAccount = async (variables: CreateAccountVariables) => {
    await mutateCreateAccount(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['accounts'], { active: true });
        pushSnackbarMessage('새로운 계좌가 추가되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const editAccount = async (variables: EditAccountVariables) => {
    await mutateEditAccount(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['accounts'], { active: true });
        pushSnackbarMessage('새로운 계좌가 수정되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const deleteAccount = (accountId: number) => {
    mutateDeleteAccount(accountId, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['accounts'], { active: true });
        pushSnackbarMessage('계좌가 삭제되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  return {
    createAccount,
    editAccount,
    deleteAccount,
    isCreateAccountLoading,
    isEditAccountLoading,
  };
};

export default useAccountMutation;
