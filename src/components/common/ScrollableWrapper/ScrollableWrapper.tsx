import React from 'react';
import { Wrapper } from './ScrollableWrapper.style';

interface ScrollableWrapperProps {
  direction?: 'vertical' | 'horizontal';
  showScrollBar?: boolean;
}

const ScrollableWrapper: React.FC<ScrollableWrapperProps> = ({
  direction = 'vertical',
  showScrollBar = false,
  children,
}) => {
  return (
    <Wrapper direction={direction} showScrollBar={showScrollBar}>
      {children}
    </Wrapper>
  );
};

export default ScrollableWrapper;
