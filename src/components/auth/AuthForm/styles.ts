import styled from 'styled-components';

export const AuthFormWrapper = styled.div`
  padding: 2rem;
  background-color: var(--color--bg-primary);

  @media screen and (min-width: 768px) {
    margin: 4rem 0;
    border-radius: 0.5rem;
    border: 1px solid var(--color--border-primary);
  }

  hr {
    border: 1px solid var(--color--border-primary);
  }
`;

export const AuthFormHeader = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1rem;
    color: var(--color--text-secondary);
  }
`;

export const AuthFormFooter = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

export const AuthFormInputWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const AuthFormInputLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const AuthFormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color--border-primary);
  border-radius: 0.25rem;
  background-color: var(--color--bg-primary);
  font-size: 0.875rem;
  outline: none;
  &:focus {
    border: 1px solid var(--color--primary);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`;

export const AuthFormInputError = styled.p`
  font-size: 0.875rem;
  color: var(--color--danger);
  margin-top: 0.5rem;
`;

export const FindPasswordLinkWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const AuthFormError = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  color: var(--color--danger);
  svg {
    margin-right: 0.25rem;
  }
`;
