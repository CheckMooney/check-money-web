import styled, { css } from 'styled-components';
import Button from '../Button/Button';

export const ProfileImageButton = styled(Button)<{ inputType?: string }>`
  ${({ inputType, theme }) => css`
    ${inputType === 'delete' &&
    css`
      color: ${theme.color.danger};
      border-color: ${theme.color.danger};
    `}
  `}
`;
