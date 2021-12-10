import styled from 'styled-components';

export const ValidationWrapper = styled.div`
  padding: 0.5rem 0.75rem;
  margin-bottom: 1.25rem;

  ${({ theme: { radius, color } }) => `
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    background-color: ${color.border.light};
  `}
`;

export const ValidationItem = styled.li<{ isValid: boolean }>`
  display: flex;
  align-items: center;
  line-height: 0;
  margin: 0.75rem 0;
  font-size: 0.875rem;

  ${({ theme: { color }, isValid }) => `
    color: ${isValid ? color.primary.base : color.danger};
  `}

  svg {
    margin-right: 0.25rem;
  }
`;
