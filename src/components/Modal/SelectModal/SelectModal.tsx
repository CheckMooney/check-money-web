import React from 'react';
import ModalPortal from '../ModalPortal/ModalPortal';
import { SelectModalButton } from './SelectModal.style';

interface SelectModalItem {
  label: string;
  onClick?: () => void;
}

interface SelectModalProps {
  selectModalitems: SelectModalItem[];
  onClose: () => void;
}

const SelectModal: React.FC<SelectModalProps> = ({
  selectModalitems,
  onClose,
}) => {
  return (
    <ModalPortal onClose={onClose} width="15rem">
      <ul>
        {selectModalitems.map(({ label, onClick }) => (
          <li key={label}>
            <SelectModalButton
              onClick={() => {
                onClose();
                onClick && onClick();
              }}
            >
              {label}
            </SelectModalButton>
          </li>
        ))}
      </ul>
    </ModalPortal>
  );
};

export default SelectModal;
