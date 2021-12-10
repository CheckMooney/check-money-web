import styled from 'styled-components';

export const GoogleLoginButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0;
  font-size: 0.875rem;
  line-height: 0;

  ${({ theme: { color, radius } }) => `
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    color: ${color.text.base};
    background-color: ${color.background.base};
    
    &:disabled{
      background-color: ${color.disabled};
      cursor: not-allowed;
    }
    &:hover {
      background-color: rgba(22, 10, 209, 0.1);
      border-color: ${color.primary.base};
    }
  `}

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;
