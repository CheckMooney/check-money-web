import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  margin-bottom: 5rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  a {
    font-size: 1.25rem;
  }
`;

export const NotFoundImage = styled.img`
  max-width: 30rem;
  margin: 0 auto;
`;
