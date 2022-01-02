import { useQueryClient } from 'react-query';
import { useSnackbarContext } from 'contexts/SnackbarContext';
import {
  useCreateSubscriptionMutation,
  useDeleteSubscriptionMutation,
  useEditSubscriptionMutation,
} from 'services/queries/subscription';
import {
  CreateSubscriptionVariables,
  DeleteSubscriptionVariables,
  EditSubscriptionVariables,
} from 'types/subscription';

const useSubscriptionMutation = () => {
  const queryClient = useQueryClient();
  const { pushSnackbarMessage } = useSnackbarContext();

  const {
    mutateAsync: mutateCreateSubscription,
    isLoading: isCreateSubscriptionLoading,
  } = useCreateSubscriptionMutation();
  const {
    mutateAsync: mutateEditSubscription,
    isLoading: isEditSubscriptionLoading,
  } = useEditSubscriptionMutation();
  const { mutate: mutateDeleteSubscription } = useDeleteSubscriptionMutation();

  const createSubscription = async (variables: CreateSubscriptionVariables) => {
    await mutateCreateSubscription(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['subscriptions']);
        pushSnackbarMessage('새로운 고정 내역이 추가되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const editSubscription = async (variables: EditSubscriptionVariables) => {
    await mutateEditSubscription(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['subscriptions']);
        pushSnackbarMessage(
          `고정 ${
            variables.is_consumption ? '지출' : '수입'
          } 내역이 수정되었습니다.`,
        );
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const deleteSubscription = (variables: DeleteSubscriptionVariables) => {
    mutateDeleteSubscription(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['subscriptions']);
        pushSnackbarMessage('고정 내역이 삭제되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  return {
    createSubscription,
    editSubscription,
    deleteSubscription,
    isCreateSubscriptionLoading,
    isEditSubscriptionLoading,
  };
};

export default useSubscriptionMutation;
