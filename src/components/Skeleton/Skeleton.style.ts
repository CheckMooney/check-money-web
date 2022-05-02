import styled, { keyframes } from 'styled-components';

export const skeletonAnimation = keyframes`
  to {
    background-position: right -20% top 0;
  }
`;

export const SquareSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #ccc;
  background-size: 20% 100%;
  background-repeat: no-repeat;
  background-position: left -20% top 0;
  animation: ${skeletonAnimation} 1.5s infinite;
`;
