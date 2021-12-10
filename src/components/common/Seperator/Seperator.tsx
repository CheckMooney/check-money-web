import React from 'react';
import { Label, Wrapper } from './Seperator.style';

interface SeperatorProps {
  label?: string;
}

const Seperator: React.FC<SeperatorProps> = ({ label }) => {
  return <Wrapper>{label && <Label>{label}</Label>}</Wrapper>;
};

export default Seperator;
