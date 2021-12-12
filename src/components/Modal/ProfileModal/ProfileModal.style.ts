import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
  padding: 1rem 0;
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.75rem;

  font-weight: 700;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImageInputWrapper = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

export const ProfileImageDescription = styled.p`
  ${({ theme: { color } }) => css`
    font-size: 0.75rem;
    color: ${color.text.light};
  `}
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;

  ${({ theme: { color, radius, shadow } }) => css`
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    background-color: ${color.background.base};
    &:focus {
      border: 1px solid ${color.primary.base};
      box-shadow: ${shadow.focus};
    }
  `}
`;
