import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';
import { MAIN_HEADER_HEIGHT_REM } from 'constants/layout';
import { boundUp, fadeIn, lateFadeIn } from 'components/styled/keyframes';

export const WelcomeWrapper = styled.div`
  position: relative;
  height: calc(100vh - ${MAIN_HEADER_HEIGHT_REM});

  ${setTabletMediaQuery`
    height: calc(75vh - ${MAIN_HEADER_HEIGHT_REM});
  `}

  ${setDesktopMediaQuery`
    height: calc(100vh - ${MAIN_HEADER_HEIGHT_REM});
  `}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  text-align: center;

  ${setDesktopMediaQuery`
    padding-top: 12rem;
    text-align: left;
    align-items: flex-start;
  `}
`;

export const WelcomeHeader = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  animation: 0.5s ${fadeIn} ease-in-out;

  ${setDesktopMediaQuery`
    font-size: 3rem;
  `}
`;

export const WelcomeButton = styled(Link)`
  margin-top: 1.5rem;
  padding: 1rem 2.25rem;
  border-radius: 9999px;

  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.color.primary.base};
  animation: 1s ${lateFadeIn} ease-in-out;

  ${setDesktopMediaQuery`
    margin-top: 2rem;
    margin-left: 0.25rem;
    padding: 1.25rem 2rem;
    font-size: 1rem;
  `};
`;

export const MainImage = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 50%;
  transform: translateX(50%);

  max-width: 100vw;
  animation: 0.5s ${boundUp} ease;

  ${setTabletMediaQuery`
    max-height: 40vh;
  `}

  ${setDesktopMediaQuery`
    width: 50vw;
    right:0;   
    max-height: 100vh;
    transform: translateX(0);
  `};

  z-index: -1;
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
