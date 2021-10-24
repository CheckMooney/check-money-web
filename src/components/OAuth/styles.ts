import styled from 'styled-components';

export const StyledButton = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  margin-bottom: 0.75rem;
  border: 1px solid var(--color--border-primary);
  border-radius: 0.25rem;
  background-color: white;
  font-size: 0.875rem;
  line-height: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;
