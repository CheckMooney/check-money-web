import React, { useState } from 'react';
import { IconType } from 'react-icons';
import {
  DropDownButton,
  DropDownListItem,
  DropDownList,
  DropDownWrapper,
  DropDownBackLayer,
} from './DropDown.style';

export interface DropDownItem {
  icon?: IconType;
  text: string;
  onClick?: () => void;
}

interface DropDownProps {
  items: DropDownItem[];
  direction?: 'left' | 'right';
}

const DropDown: React.FC<DropDownProps> = ({
  direction = 'left',
  items,
  children,
}) => {
  const [isElementShown, setIsElementShown] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setIsElementShown(!isElementShown);
  };

  const handleDropDownListItemClick = (item: DropDownItem) => {
    setIsElementShown(false);
    item.onClick && item.onClick();
  };

  return (
    <DropDownWrapper>
      {isElementShown && (
        <DropDownBackLayer onClick={() => setIsElementShown(false)} />
      )}
      <DropDownButton onClick={handleToggleDropdown}>{children}</DropDownButton>
      <DropDownList isShown={isElementShown} direction={direction}>
        {items.map((item) => (
          <DropDownListItem
            key={item.text}
            onClick={() => handleDropDownListItemClick(item)}
          >
            {item.icon && <item.icon size={16} />}
            {item.text}
          </DropDownListItem>
        ))}
      </DropDownList>
    </DropDownWrapper>
  );
};

export default DropDown;
