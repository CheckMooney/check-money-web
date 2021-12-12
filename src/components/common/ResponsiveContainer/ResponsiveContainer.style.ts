import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  ${setTabletMediaQuery`
    max-width: 1280px;
    padding: 0 2rem;
  `}

  ${setDesktopMediaQuery`
      padding: 0 2.5rem;
  `}
`;
