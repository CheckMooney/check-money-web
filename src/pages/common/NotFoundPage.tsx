import React from 'react';
import styled from 'styled-components';
import { TextLink } from 'components/common';

import notFoundImage from 'assets/jpg/not-found.jpg';

const NotFoundContainer = styled.div`
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

const NotFoundImage = styled.img`
  max-width: 30rem;
  margin: 0 auto;
`;

export const NotFoundPage = () => {
  return (
    <div className="container">
      <NotFoundContainer>
        <NotFoundImage src={notFoundImage} alt="찾을 수 없는 페이지" />
        <h2>존재하지 않는 페이지입니다.</h2>
        <TextLink to="/" color="primary">
          홈페이지로 돌아가기
        </TextLink>
      </NotFoundContainer>
    </div>
  );
};
