import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const DatePickerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;

  &:hover {
    border: 1px solid var(--color--primary);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid #eee;
  padding: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
  z-index: 100;

  @media screen and (min-width: 769px) {
    top: 110%;
  }
  @media screen and (max-width: 768px) {
    bottom: 110%;
  }
`;

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-weight: 500;
    margin-left: 0.25rem;
  }
`;

export const CalendarActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;

export const DayOfWeek = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  color: #666;
`;

export const Day = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0;
  color: ${({ isActive }) =>
    isActive ? 'white' : 'var(--color--text-primary)'};
  background-color: ${({ isActive }) =>
    isActive ? 'var(--color--primary)' : 'transparent'};
  border-radius: 0.25rem;

  &:disabled {
    cursor: default;
  }
`;
