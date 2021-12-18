import React from 'react';
import { StyledToggleButton, StyledToggleWrapper } from './ToggleButton.style';

export interface ToggleItem {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

interface ToggleButtonProps {
  toggleItems: ToggleItem[];
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleItems }) => {
  return (
    <StyledToggleWrapper>
      {toggleItems.map((item, i) => (
        <StyledToggleButton
          type="button"
          key={i}
          isActive={item.isActive}
          onClick={item.onClick}
        >
          {item.label}
        </StyledToggleButton>
      ))}
    </StyledToggleWrapper>
  );
};

export default ToggleButton;
