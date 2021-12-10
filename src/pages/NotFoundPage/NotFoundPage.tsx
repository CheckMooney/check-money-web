import React from 'react';
import notFoundImage from 'assets/jpg/not-found.jpg';
import {
  GoHomeLink,
  NotFoundHeader,
  NotFoundImage,
  NotFoundWrapper,
} from './NotFoundPage.style';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImage src={notFoundImage} alt="찾을 수 없는 페이지" />
      <NotFoundHeader>존재하지 않는 페이지입니다.</NotFoundHeader>
      <GoHomeLink to="/">홈페이지로 돌아가기</GoHomeLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
