import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HeaderWrapper = styled.div`
  ${({ theme: { color } }) => css`
    position: sticky;
    top: 0;
    z-index: 2;

    display: flex;
    align-items: flex-end;

    padding-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${color.border.light};

    background-color: ${color.background.base};
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-right: 0.5rem;
    }

    h2 {
      font-size: 1rem;
      color: ${color.text.lighter};
    }
  `}
`;

export const TransactionWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const AddTransactionButton = styled.button`
  ${({ theme: { color } }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${color.text.light};

    svg {
      margin-right: 1rem;
      border-radius: 0.5rem;
    }
    span {
      height: 1rem;
    }

    &:hover {
      color: ${color.text.base};
      svg {
        color: ${color.background.base};
        background-color: ${color.primary.light};
      }
    }
  `}
`;
