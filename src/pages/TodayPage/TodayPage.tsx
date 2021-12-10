import React from 'react';
import { HeaderWrapper, MainWrapper, Wrapper } from './TodayPage.style';

const TodayPage = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>오늘의 소비</h1>
        <h2>
          {new Date().getMonth() + 1}월{new Date().getDate()}일
        </h2>
      </HeaderWrapper>
      <MainWrapper>
        <div>10,000원</div>
      </MainWrapper>
    </Wrapper>
  );
};

export default TodayPage;
