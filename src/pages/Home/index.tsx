import React from 'react';
import styled from 'styled-components';
import welcomeImage from '../../assets/jpg/welcome.jpg';
import { Link } from 'react-router-dom';

const WelcomeContainer = styled.div`
  height: calc(50vh - 4rem);
  background-image: url(${welcomeImage});
  background-color: white;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    height: calc(75vh - 4rem);
  }
  @media screen and (min-width: 1280px) {
    height: calc(100vh - 4rem);
  }

  h1 {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 3rem;
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

const Home = () => {
  return (
    <div className="container">
      <WelcomeContainer>
        <h1>
          하루의 소비를
          <br />
          체크머니와 함께 효율적으로
        </h1>
        <Link to="/auth/login">지금 시작하기</Link>
      </WelcomeContainer>
    </div>
  );
};

export default Home;
