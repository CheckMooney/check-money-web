import styled from 'styled-components';
import { rotate360 } from 'components/styled/keyframes';
import { ImSpinner2 } from 'react-icons/im';

export const SpinnerIcon = styled(ImSpinner2)`
  animation: 1s ${rotate360} 0s linear infinite;
`;
