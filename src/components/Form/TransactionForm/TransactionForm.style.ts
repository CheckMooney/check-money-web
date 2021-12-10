import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
  padding: 1rem 0;
`;

export const ToggleButtonWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #f3f3f3;

  margin-bottom: 1.5rem;
  border-radius: 9999px;
  height: 3rem;
`;

export const ToggleIndicator = styled.div<{ isRight?: boolean }>`
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  height: calc(100% - 0.5rem);
  width: 50%;

  border-radius: 9999px;
  background-color: white;

  transform: ${({ isRight }) =>
    isRight ? 'translateX(calc(100% - 0.5rem))' : 'translateX(0)'};
  transition: all 0.25s ease;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 6px;
`;

export const ToggleButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ isActive }) =>
    isActive ? 'var(--color--text-primary)' : '#999'};
  cursor: pointer;
  z-index: 1;
`;

export const FormField = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  font-size: 0.875rem;
  font-weight: 700;
`;

export const FormInput = css`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;

  ${({ theme: { color, radius } }) => `
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    background-color: ${color.background.dark};
    &:focus{
      border: 1px solid ${color.primary.base};
    }
  `}
`;

export const TextInput = styled.input`
  ${FormInput}
`;

export const DatePickerInput = styled.div`
  ${FormInput}
`;

export const FormSelect = styled.select`
  ${FormInput}

  appearance: none;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 1rem;
`;
