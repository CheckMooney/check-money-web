import React from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, OverLayer, UnderLayer } from './Modal.styles';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <ModalWrapper>
      <UnderLayer onClick={onClose} />
      <OverLayer>{children}</OverLayer>
    </ModalWrapper>
  );
};

const ModalPortal = ({ ...props }: ModalProps) => {
  const modalElement = document.getElementById('modal');

  if (!modalElement) throw new Error("Can't find modal element");

  return createPortal(<Modal {...props} />, modalElement);
};

export default ModalPortal;
