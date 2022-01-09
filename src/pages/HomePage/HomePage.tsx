import React from 'react';
import ResponsiveContainer from 'components/common/ResponsiveContainer/ResponsiveContainer';
import mainImage from 'assets/png/main-image.png';
import {
  Introduce,
  IntroduceWrapper,
  WelcomeButton,
  WelcomeWrapper,
  WelcomeHeader,
  HeaderWrapper,
  MainImage,
} from './HomePage.style';

const HomePage = () => {
  return (
    <div>
      <section>
        <ResponsiveContainer>
          <WelcomeWrapper>
            <HeaderWrapper>
              <WelcomeHeader>
                하루의 소비를
                <br />
                체크머니와 함께 효율적으로
              </WelcomeHeader>
              <WelcomeButton to="/auth/login">지금 시작하기</WelcomeButton>
              <MainImage src={mainImage} />
            </HeaderWrapper>
          </WelcomeWrapper>
        </ResponsiveContainer>
      </section>
      <section>
        <IntroduceWrapper>
          <Introduce>
            나의 내역을 한 눈에 조회하고 한 곳에서 관리하세요.
            <br /> 체크머니를 통해 좋은 소비습관을 길러보세요.
          </Introduce>
        </IntroduceWrapper>
      </section>
    </div>
  );
};

export default HomePage;
