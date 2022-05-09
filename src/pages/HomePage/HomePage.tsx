import React from 'react';
import ResponsiveContainer from 'components/common/ResponsiveContainer/ResponsiveContainer';
import mockupImage from 'assets/png/mockup.png';
import introListImage from 'assets/png/intro-list.png';
import introGraphImage from 'assets/png/intro-graph.png';
import {
  WelcomeButton,
  WelcomeWrapper,
  WelcomeHeader,
  HeaderWrapper,
  WelcomeDescription,
  IntroduceSection,
  MockUpImage,
  TwoColumnWrapper,
  TwoColumnTextWrapper,
  TwoColumnImageWrapper,
  GetStartedWrapper,
  IntroduceWrapper,
} from './HomePage.style';

const HomePage = () => {
  return (
    <div>
      <ResponsiveContainer>
        <WelcomeWrapper>
          <HeaderWrapper>
            <WelcomeHeader>
              하루의 소비를
              <br />
              체크머니와 함께 효율적으로
            </WelcomeHeader>
            <WelcomeDescription>
              나의 내역을 <strong>한 눈에 조회</strong>하고{' '}
              <strong>한 곳에서 관리</strong>하세요.
              <br /> <strong>체크머니</strong>를 통해 좋은 소비습관을
              길러보세요.
            </WelcomeDescription>
            <WelcomeButton to="/auth/login">지금 시작하기</WelcomeButton>
          </HeaderWrapper>
        </WelcomeWrapper>
        <MockUpImage src={mockupImage} alt="체크머니 목업 이미지" />
      </ResponsiveContainer>
      <IntroduceSection>
        <IntroduceWrapper>
          <TwoColumnWrapper>
            <TwoColumnTextWrapper>
              <span>지출 · 소비</span>
              <h2>
                수입과 지출
                <br />
                고정지출을
                <br />
                간편하게
              </h2>
            </TwoColumnTextWrapper>
            <TwoColumnImageWrapper>
              <img src={introListImage} alt="지출 리스트 이미지" />
            </TwoColumnImageWrapper>
          </TwoColumnWrapper>
        </IntroduceWrapper>
      </IntroduceSection>
      <IntroduceSection>
        <IntroduceWrapper>
          <TwoColumnWrapper $isRightAlign={true}>
            <TwoColumnImageWrapper>
              <img src={introGraphImage} alt="막대 그래프 이미지" />
            </TwoColumnImageWrapper>
            <TwoColumnTextWrapper>
              <span>통계</span>
              <h2>
                일자별 월별
                <br />
                소비그래프를
                <br />한 눈에
              </h2>
            </TwoColumnTextWrapper>
          </TwoColumnWrapper>
        </IntroduceWrapper>
      </IntroduceSection>
      <IntroduceSection>
        <IntroduceWrapper>
          <GetStartedWrapper>
            <h2>지금 체크머니와 함께 시작하세요.</h2>
            <WelcomeButton to="/auth/login">지금 시작하기</WelcomeButton>
          </GetStartedWrapper>
        </IntroduceWrapper>
      </IntroduceSection>
    </div>
  );
};

export default HomePage;
