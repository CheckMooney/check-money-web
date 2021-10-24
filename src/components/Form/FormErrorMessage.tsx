import React from 'react';
import styled from 'styled-components';
import { IoAlertCircleSharp } from 'react-icons/io5';

const FormErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--color--danger);

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.25rem;
  }
`;

interface IErrorMessageProps {
  errorMsg: string;
}

export const FormErrorMessage: React.FC<IErrorMessageProps> = ({
  errorMsg,
}) => {
  return (
    <FormErrorMessageContainer>
      <IoAlertCircleSharp />
      <span>{errorMsg}</span>
    </FormErrorMessageContainer>
  );
};
