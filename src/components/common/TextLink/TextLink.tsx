import React from 'react';
import { LinkProps } from 'react-router-dom';
import { CSSProp } from 'styled-components';
import { InlineLink, BlockLink } from './TextLink.style';

interface TextLinkProps extends LinkProps {
  to: string;
  linkType?: 'inline' | 'block';
  color?: 'default' | 'primary' | 'secondary';
  cssProps?: CSSProp;
}

const TextLink: React.FC<TextLinkProps> = ({
  linkType = 'inline',
  color = 'default',
  cssProps,
  ...props
}) => {
  const link = {
    inline: <InlineLink color={color} $cssProps={cssProps} {...props} />,
    block: <BlockLink color={color} $cssProps={cssProps} {...props} />,
  };
  return link[linkType];
};

export default TextLink;
