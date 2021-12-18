import { useQueryClient } from 'react-query';
import { useSnackbarContext } from 'contexts/SnackbarContext';
import {
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useEditTransactionMutation,
} from 'services/queries/transaction';
import {
  CreateTransactionVariables,
  EditTransactionVariables,
} from 'types/transaction';
import { dateToString } from 'utils/date';

const useTransactionMutation = () => {
  const queryClient = useQueryClient();
  const { pushSnackbarMessage } = useSnackbarContext();

  const {
    mutateAsync: mutateCreateTransaction,
    isLoading: isCreateTransactionLoading,
  } = useCreateTransactionMutation();
  const {
    mutateAsync: mutateEditTransaction,
    isLoading: isEditTransactionLoading,
  } = useEditTransactionMutation();
  const { mutate: mutateDeleteTransaction } = useDeleteTransactionMutation();

  const createTransaction = async (variables: CreateTransactionVariables) => {
    await mutateCreateTransaction(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries([
          'transactions',
          { date: dateToString(variables.date, 'yyyy-mm') },
        ]);
        await queryClient.refetchQueries([
          'allTransactions',
          { date: dateToString(variables.date, 'yyyy-mm-dd') },
        ]);
        pushSnackbarMessage('새로운 내역이 추가되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const editTransaction = async (variables: EditTransactionVariables) => {
    await mutateEditTransaction(variables, {
      onSuccess: async () => {
        await queryClient.refetchQueries([
          'transactions',
          { date: dateToString(variables.date, 'yyyy-mm') },
        ]);
        await queryClient.refetchQueries([
          'allTransactions',
          { date: dateToString(variables.date, 'yyyy-mm-dd') },
        ]);
        pushSnackbarMessage(
          `${variables.is_consumption ? '지출' : '수입'}내역이 수정되었습니다.`,
        );
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  const deleteTransaction = (transactionId: number) => {
    mutateDeleteTransaction(transactionId, {
      onSuccess: async () => {
        await queryClient.refetchQueries(['transactions']);
        pushSnackbarMessage('기존 내역이 삭제되었습니다.');
      },
      onError: (error) => pushSnackbarMessage(error.message),
    });
  };

  return {
    createTransaction,
    editTransaction,
    deleteTransaction,
    isCreateTransactionLoading,
    isEditTransactionLoading,
  };
};

export default useTransactionMutation;
