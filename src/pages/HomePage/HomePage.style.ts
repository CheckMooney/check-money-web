import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn, lateFadeIn } from 'components/styled/keyframes';
import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';

export const WelcomeWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${setTabletMediaQuery`
    padding-top: 8rem;
    padding-bottom: 6rem;
  `}

  ${setDesktopMediaQuery`
    padding-top: 10rem;
    padding-bottom: 7.5rem;
  `}
`;

export const WelcomeHeader = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  word-break: keep-all;
  animation: 0.5s ${fadeIn} ease-in-out;

  ${setTabletMediaQuery`
    font-size: 3rem;
  `}

  ${setDesktopMediaQuery`
    font-size: 4rem;
  `}
`;

export const WelcomeDescription = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.375;
  letter-spacing: -0.025em;
  color: #333;

  animation: 0.5s ${fadeIn} ease-in-out;

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary.light};
  }

  ${setTabletMediaQuery`
    margin-top: 1.25rem;
    font-size: 1.25rem;
  `}

  ${setDesktopMediaQuery`
    margin-top: 1.5rem;
    font-size: 1.75rem;
  `}
`;

export const WelcomeButton = styled(Link)`
  display: block;
  margin-top: 2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;

  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: white;

  background-color: ${({ theme }) => theme.color.primary.base};
  animation: 1s ${lateFadeIn} ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  ${setTabletMediaQuery`
    padding: 1rem 2rem;
  `}

  ${setDesktopMediaQuery`
    margin-top: 3rem;
    font-size: 1.5rem;
    padding: 1.5rem 2.5rem;
  `}
`;

export const MockUpImage = styled.img`
  width: 100%;
  animation: 0.5s ${fadeIn} ease-in-out;
`;

export const IntroduceSection = styled.section`
  :nth-child(even) {
    background-color: #fafafa;
  }
`;

export const IntroduceWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 1.5rem;

  ${setTabletMediaQuery`
    padding: 7.5rem 2.5rem;
  `}

  ${setDesktopMediaQuery`
    padding: 10rem 4rem;
  `}
`;

export const TwoColumnWrapper = styled.div<{ $isRightAlign?: boolean }>`
  display: flex;
  flex-direction: ${({ $isRightAlign }) =>
    $isRightAlign ? 'column-reverse' : 'column'};

  ${setTabletMediaQuery`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 4rem;
  `}

  ${setDesktopMediaQuery`
    column-gap: 10rem;
  `}
`;

export const TwoColumnTextWrapper = styled.div`
  margin-bottom: 5rem;

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary.light};
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.375;
  }

  ${setTabletMediaQuery`
    span{
      font-size: 1.25rem;
    }
    h2{
      margin-top: 0.75rem;
      font-size: 2.5rem;
    }
  `}

  ${setDesktopMediaQuery`
    span{
      font-size: 1.5rem;
    }
    h2{
      font-size: 3rem;
    }
  `}
`;

export const TwoColumnImageWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radius.xl};
    box-shadow: ${({ theme }) => theme.shadow.card};
  }

  ${setTabletMediaQuery`
    width: 100%
  `}
`;

export const GetStartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.375;
    letter-spacing: -0.025em;
    word-break: keep-all;
  }

  ${setTabletMediaQuery`
  h2{
    font-size: 2.5rem;
  }
  `}

  ${setDesktopMediaQuery`
    h2 {
      font-size: 3rem;
    }
  `}
`;
