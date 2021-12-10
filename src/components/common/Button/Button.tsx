import React, { ButtonHTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';
import { BlockButton, FullWidthButton, SmallButton } from './Button.style';
import Spinner from '../Spinner/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'default' | 'fullWidth' | 'small';
  color?: 'primary' | 'base';
  cssProps?: CSSProp;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = 'default',
  color = 'primary',
  cssProps,
  isLoading,
  disabled,
  children,
  ...props
}) => {
  const loadingChildren = <Spinner color="#666" size={16} />;

  const button = {
    default: (
      <BlockButton
        $cssProps={cssProps}
        color={color}
        children={isLoading ? loadingChildren : children}
        disabled={isLoading || disabled}
        {...props}
      />
    ),
    fullWidth: (
      <FullWidthButton
        $cssProps={cssProps}
        color={color}
        children={isLoading ? loadingChildren : children}
        disabled={isLoading || disabled}
        {...props}
      />
    ),
    small: (
      <SmallButton
        $cssProps={cssProps}
        color={color}
        children={isLoading ? loadingChildren : children}
        disabled={isLoading || disabled}
        {...props}
      />
    ),
  };

  return button[buttonType];
};

export default Button;
