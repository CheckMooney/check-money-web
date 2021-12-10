import React from 'react';
import { Wrapper } from './ResponsiveContainer.style';

const ResponsiveContainer: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ResponsiveContainer;
