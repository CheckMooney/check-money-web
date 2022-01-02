import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import React from 'react';
import { createPortal } from 'react-dom';
import {
  BackLayer,
  BodyWrapper,
  FrontLayer,
  FrontWrapper,
  HeaderWrapper,
  Heading,
  ModalTemplateWrapper,
} from './ModalPortal.style';

interface ModalTemplateProps {
  title?: string;
  width?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalTemplate = ({
  title,
  width,
  onClose,
  children,
}: ModalTemplateProps) => {
  return (
    <ModalTemplateWrapper>
      <BackLayer onClick={onClose} />
      <FrontLayer>
        <FrontWrapper width={width}>
          <ScrollableWrapper>
            {title && (
              <HeaderWrapper>
                <Heading>{title}</Heading>
              </HeaderWrapper>
            )}
            <BodyWrapper>{children}</BodyWrapper>
          </ScrollableWrapper>
        </FrontWrapper>
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
