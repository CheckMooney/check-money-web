import styled, { css } from 'styled-components';

export const Form = styled.form`
  padding-top: 1rem;
  font-size: 0.875rem;
`;

export const FormField = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.25rem;
  font-size: 0.875rem;

  ${({ theme: { color, radius } }) => css`
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    background-color: ${color.background.dark};
    &:focus {
      border: 1px solid ${color.primary.base};
    }
  `}
`;

export const InputError = styled.p`
  margin-top: 0.5rem;
  ${({ theme: { color } }) => css`
    color: ${color.danger};
  `}
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0.75rem 0;
`;
