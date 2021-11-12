import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface TextLinkProps extends LinkProps {
  color?: string;
}

const StyledLink = styled(Link)<TextLinkProps>`
  color: ${(props) =>
    props.color === 'primary'
      ? 'var(--color--primary)'
      : ' var(--color--text-secondary)'};

  &:hover {
    text-decoration: underline;
  }
`;

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  ...linkProps
}) => {
  return <StyledLink {...linkProps}>{children}</StyledLink>;
};
