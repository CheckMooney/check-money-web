import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const DatePickerInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border: 0;
  padding: 0;
  margin: 0;

  opacity: 0;
  appearance: none;

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    margin: 0;
    padding: 0;
    border: 0;
    background-image: none;
    cursor: pointer;
  }
`;
