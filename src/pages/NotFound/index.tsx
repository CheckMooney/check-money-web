import React from 'react';
import { NotFoundContainer, NotFoundImage } from './styles';
import notFoundImage from '../../assets/jpg/not-found.jpg';
import { TextLink } from '../../components/Link/TextLink';

const NotFound = () => {
  return (
    <div className="container">
      <NotFoundContainer>
        <NotFoundImage src={notFoundImage} alt="찾을 수 없는 페이지" />
        <h2>존재하지 않는 페이지입니다.</h2>
        <TextLink to="/" label="홈페이지로 돌아가기" type="primary" />
      </NotFoundContainer>
    </div>
  );
};

export default NotFound;
