import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem;
  background-color: var(--color--bg-primary);

  @media screen and (min-width: 768px) {
    margin: 4rem 0;
    border-radius: 0.5rem;
    border: 1px solid var(--color--border-primary);
  }
`;

export const FormLogo = styled.div`
  margin-bottom: 1rem;
`;

export const FormHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    font-size: 0.75rem;
    padding: 1rem 0;
  }
  text-align: left;
  margin-bottom: 1.5rem;
`;

export const FormBody = styled.div`
  font-size: 0.875rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color--border-primary);
  background-color: var(--color--bg-primary);
  font-size: 0.875rem;
  &:focus {
    outline: none;
    border: 1px solid var(--color--primary);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`;

export const FormSubmitInput = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  border-radius: 0.25rem;
  background-color: var(--color--primary);
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin-bottom: 1rem;
  &:hover {
    opacity: 0.75;
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  font-size: 0.875rem;
`;

export const Seperator = styled.div`
  height: 0;
  margin: 1.5rem 0;
  border-bottom: 1px solid var(--color--border-primary);
`;
