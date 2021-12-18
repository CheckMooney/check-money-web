import React, { useState } from 'react';
import {
  DropDownButton,
  DropDownListItem,
  DropDownList,
  DropDownWrapper,
  DropDownBackLayer,
} from './DropDown.style';

export interface DropDownItem {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
            {item.icon && (
              <span>
                <item.icon width={24} height={24} />
              </span>
            )}
            {item.text}
          </DropDownListItem>
        ))}
      </DropDownList>
    </DropDownWrapper>
  );
};

export default DropDown;
