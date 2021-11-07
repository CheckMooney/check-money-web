import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ITextLinkProps {
  to: string;
  label: string;
  type?: string;
}

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const TextLink: React.FC<ITextLinkProps> = ({ to, label, type }) => {
  const textColor =
    type === 'primary'
      ? 'var(--color--primary)'
      : ' var(--color--text-secondary)';

  return (
    <StyledLink
      style={{
        color: `${textColor}`,
      }}
      to={to}
    >
      {label}
    </StyledLink>
  );
};
