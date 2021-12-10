import React from 'react';
import {
  Introduce,
  IntroduceWrapper,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeImage,
} from './HomePage.style';
import welcomeImage from 'assets/jpg/welcome.jpg';
import Button from 'components/common/Button/Button';

const HomePage = () => {
  return (
    <section>
      <WelcomeContainer>
        <WelcomeHeader>
          하루의 소비를
          <br />
          체크머니와 함께 효율적으로
        </WelcomeHeader>
        <Button>지금 시작하기</Button>
        <WelcomeImage src={welcomeImage} alt="" />
      </WelcomeContainer>
      <IntroduceWrapper>
        <Introduce>
          나의 내역을 한 눈에 조회하고 한 곳에서 관리하세요.
          <br /> 체크머니를 통해 좋은 소비습관을 길러보세요.
        </Introduce>
      </IntroduceWrapper>
    </section>
  );
};

export default HomePage;
