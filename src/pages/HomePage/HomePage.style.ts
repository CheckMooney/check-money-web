import styled from 'styled-components';
import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';

export const WelcomeContainer = styled.div`
  padding-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${setTabletMediaQuery`
    padding-top:10rem;
  `}
`;

export const WelcomeHeader = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.25;
  margin-bottom: 2rem;

  ${setTabletMediaQuery`
    font-size:2.5rem;
  `}
  ${setDesktopMediaQuery`
    font-size: 3rem;
  `}
`;

export const WelcomeImage = styled.img`
  width: 100%;
  max-width: 1280px;
`;

export const IntroduceWrapper = styled.div`
  padding: 4rem 0;
  background-color: #eee;
  ${setDesktopMediaQuery`
    padding: 8rem 0;
  `}
`;

export const Introduce = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;

  ${setTabletMediaQuery`
    font-size:1.5rem;
  `}
  ${setDesktopMediaQuery`
    font-size: 2rem;
  `}
`;
