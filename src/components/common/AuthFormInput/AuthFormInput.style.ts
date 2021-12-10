import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;

  ${({ theme: { color, radius, shadow } }) => `
    border: 1px solid ${color.border.base};
    border-radius:${radius.md};
    background-color: ${color.background.base};
    &:focus {
      border: 1px solid ${color.primary.base};
      box-shadow: ${shadow.focus};
    }
  `};
`;

export const InputError = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  ${({ theme: { color } }) => `
    color: ${color.danger};
  `};
`;
