import styled, { css } from 'styled-components';

export const DropDownWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

export const DropDownBackLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

export const DropDownButton = styled.button`
  display: flex;
  align-items: center;
`;

export const DropDownList = styled.ul<{ isShown?: boolean; direction: string }>`
  ${({ theme: { color, radius, zIndex }, isShown, direction }) => css`
    position: absolute;
    top: 0.25rem;
    ${direction === 'left' ? 'left: 0;' : 'right: 0;'}

    display: flex;
    flex-direction: column;

    width: 12rem;
    padding: 0.25rem 0.25rem;
    border-radius: ${radius.md};
    background-color: ${color.background.base};
    transform: translateY(2rem);
    transition: opacity 0.2s;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);

    z-index: ${zIndex.dropdown};
    ${isShown
      ? `
      opacity: 1;
      pointer-events: initial
      `
      : `
      opacity: 0;
      pointer-events: none;
    `};
  `}
`;

export const DropDownListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0.75rem;

  font-size: 0.875rem;

  transition: opacity 0.2s;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  svg {
    margin-right: 0.75rem;
  }
`;
