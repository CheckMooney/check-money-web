import React from 'react';
import { SpinnerIcon } from './Spinner.style';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return <SpinnerIcon size={size} color={color} />;
};

export default Spinner;
