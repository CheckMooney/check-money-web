import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  margin-bottom: 5rem;
`;

export const NotFoundImage = styled.img`
  max-width: 25rem;
  margin: 0 auto;
`;

export const NotFoundHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
`;

export const GoHomeLink = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  background-color: var(--color--primary);
`;
