import React from 'react';
import styled from 'styled-components';
import welcomeImage from '../../assets/jpg/welcome.jpg';

const WelcomeContainer = styled.div`
  height: calc(100vh - 4rem);
  background-image: url(${welcomeImage});
  background-color: white;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1 {
    text-align: center;
    width: 50%;
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    color: black;
  }
  a {
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: var(--color--primary);

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const HomePage = () => {
  return (
    <div>
      <WelcomeContainer>
        <h1>
          하루의 소비를
          <br />
          체크머니와 함께 효율적으로
        </h1>
      </WelcomeContainer>
    </div>
  );
};
