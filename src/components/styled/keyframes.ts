import { keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const lateFadeIn = keyframes`
  from {
    opacity: 0;
  }

  50%{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const boundUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  
  75%{
    opacity:1;
  }

  to {
    transform: translateY(0);
  }
`;
