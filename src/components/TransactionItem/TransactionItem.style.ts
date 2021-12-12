import styled, { css, CSSProperties } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const CategoryWrapper = styled.div`
  width: 2rem;
  height: 2rem;

  margin-right: 1rem;
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
`;

export const PriceContent = styled.p<{ isConsumption?: boolean }>`
  ${({ isConsumption, theme: { color } }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${isConsumption ? color.text.base : color.primary.base};
  `}
`;

export const Currency = styled.span`
  margin-left: 0.125rem;
`;

export const DetailContent = styled.p`
  margin-top: 0.25rem;
  min-height: 1rem;
  ${({ theme: { color } }) => css`
    font-size: 0.75rem;
    font-weight: 300;
    color: ${color.text.light};
  `}
`;

export const ActionWrapper = styled.div<{ isShown?: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;

  ${({ isShown }) => css`
    opacity: ${isShown ? 1 : 0};
  `}
  transition: all 0.2s ease-in-out;
`;

export const ActionButton = styled.button<CSSProperties>`
  ${({ marginLeft, theme: { color, radius } }) => css`
    margin-left: ${marginLeft};
    color: ${color.text.light};
    border-radius: ${radius.sm};
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `}
`;
