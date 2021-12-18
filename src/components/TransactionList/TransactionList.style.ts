import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 2rem;
  ${({ theme: { color } }) =>
    css`
      background-color: ${color.background.base};
    `}
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  ${({ theme: { color } }) => css`
    color: ${color.text.lighter};
  `}
`;

export const CalendarWrapper = styled.div`
  margin-top: 1rem;
`;

export const CaleandarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

export const CalendarHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CalendarActionWrapper = styled.div`
  display: flex;
  ${({ theme: { color, radius } }) => css`
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
  `}
`;

export const CalendarActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.375rem;

  font-size: 0.75rem;
  line-height: 0.75rem;
  ${({ theme: { color } }) => css`
    color: ${color.text.light};

    &:hover {
      background-color: ${color.background.dark};
    }

    &:disabled {
      color: ${color.disabled};
    }
  `}
`;

export const BodyWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const TransactionSection = styled.section`
  padding: 1rem 0;
`;

export const TransactionDate = styled.h3`
  position: sticky;
  top: 0;
  margin-bottom: 0.5rem;
  ${({ theme: { color } }) => css`
    font-size: 0.875rem;
    color: ${color.text.lighter};
    padding: 0.25rem 0;
  `};
`;

export const PrevMonthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const PrevMonthButton = styled.button`
  ${({ theme: { color, radius } }) => css`
    padding: 1rem;
    border-radius: ${radius.lg};
    font-size: 1rem;
    font-weight: 600;
    color: ${color.text.light};
    background-color: ${color.border.light};
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `}
`;
