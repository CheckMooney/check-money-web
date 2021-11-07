import React from 'react';
import styled from 'styled-components';
import { IoCheckmarkOutline } from 'react-icons/io5';

const PasswordValidationWrapper = styled.div`
  padding: 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid var(--color--border-primary);
  border-radius: 0.25rem;
  font-size: 0.875rem;
`;

const PasswordValidationItem = styled.li<{ valid: boolean }>`
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.valid ? 'var(--color--primary) ' : 'var(--color--danger)'};
  svg {
    margin-right: 0.5rem;
  }
`;

interface PasswordValidationProps {
  password: string;
}

export const PasswordValidaton: React.FC<PasswordValidationProps> = ({
  password,
}) => {
  const validationItems = [
    {
      label: '영대,소문자 포함',
      regex: /[A-Za-z]+/,
    },
    {
      label: '숫자 포함',
      regex: /[0-9]+/,
    },
    {
      label: '특수문자 포함 ($@$!%*#?&)',
      regex: /[$@$!%*#?&]+/,
    },
    {
      label: '8자 이상 16자 이하',
      regex: /^.{8,16}$/,
    },
  ];
  return (
    <PasswordValidationWrapper>
      <ul>
        {validationItems.map((item, index) => (
          <PasswordValidationItem key={index} valid={item.regex.test(password)}>
            <IoCheckmarkOutline />
            <span>{item.label}</span>
          </PasswordValidationItem>
        ))}
      </ul>
    </PasswordValidationWrapper>
  );
};
