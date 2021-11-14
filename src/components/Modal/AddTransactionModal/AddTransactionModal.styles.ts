import styled from 'styled-components';

export const AddModalWrapper = styled.div`
  padding: 2rem;
`;

export const AddModalHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const AddModalForm = styled.form``;

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

export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const PriceInput = styled.input`
  height: 100%;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid #eee;
  padding: 0.25rem 0;
  font-size: 1.25rem;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

export const CategoryDateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategorySelect = styled.select`
  position: relative;
  appearance: none;
  font-size: 1rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
  background-color: white;
  &:hover {
    border: 1px solid var(--color--primary);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-left: 1rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;

  &:hover {
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: var(--color--primary);
`;

export const CancelButton = styled(Button)`
  color: black;
  background-color: white;
`;
