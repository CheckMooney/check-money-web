import React from 'react';
import styled from 'styled-components';

interface SeperatorProps {
  label?: string;
}

const SeperatorWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 0;
  border-top: 1px solid var(--color--border-primary);
  position: relative;
`;

const SeperatorLabel = styled.div`
  position: absolute;
  padding: 0 1rem;
  font-size: 0.875rem;
  color: var(--color--text-secondary);
  background-color: var(--color--bg-primary);
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Seperator: React.FC<SeperatorProps> = ({ label }) => {
  return (
    <SeperatorWrapper>
      {label && <SeperatorLabel>{label}</SeperatorLabel>}
    </SeperatorWrapper>
  );
};
