interface UseConfirmProps {
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const useConfirm = ({ message, onConfirm, onCancel }: UseConfirmProps) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm && onConfirm();
    } else {
      onCancel && onCancel();
    }
  };
  return confirmAction;
};

export default useConfirm;
