import React from 'react';
import { createPortal } from 'react-dom';
import {
  BackLayer,
  BodyWrapper,
  FrontLayer,
  HeaderWrapper,
  Heading,
  ModalTemplateWrapper,
} from './ModalPortal.style';

interface ModalTemplateProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalTemplate = ({ title, onClose, children }: ModalTemplateProps) => {
  return (
    <ModalTemplateWrapper>
      <BackLayer onClick={onClose} />
      <FrontLayer>
        {title && (
          <HeaderWrapper>
            <Heading>{title}</Heading>
          </HeaderWrapper>
        )}
        <BodyWrapper>{children}</BodyWrapper>
      </FrontLayer>
    </ModalTemplateWrapper>
  );
};

const ModalPortal = (props: ModalTemplateProps) => {
  const modalElement = document.getElementById('modal');
  if (!modalElement) {
    throw new Error('Could not find modalElement');
  }
  return createPortal(<ModalTemplate {...props} />, modalElement);
};

export default ModalPortal;
