import styled, { css } from 'styled-components';

interface ButtonProps {
  fullWidth?: boolean;
  buttonType?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding: 0.75rem 0;
    `}

  background-color: ${(props) =>
    props.buttonType === 'primary'
      ? 'var(--color--primary)'
      : 'var(--color--secondary)'};
  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
