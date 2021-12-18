import React from 'react';

import {
  ChartWrapper,
  FlexWrapper,
  HeaderWrapper,
  Wrapper,
} from './MonthPage.style';
import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import BarChart from 'components/Chart/BarChart/BarChart';
import useTransactionChart from 'hooks/useTransactionChart';
import { dateToString } from 'utils/date';

const MonthPage = () => {
  const { currentDate } = useTransactionChart();

  return (
    <ScrollableWrapper>
      <Wrapper>
        <HeaderWrapper>
          <h2>{dateToString(currentDate, 'yyyy년 mm월')}</h2>
        </HeaderWrapper>
        <FlexWrapper>
          <ChartWrapper>
            <BarChart />
          </ChartWrapper>
          <ChartWrapper>1</ChartWrapper>
          <ChartWrapper>1</ChartWrapper>
          <ChartWrapper>1</ChartWrapper>
          <ChartWrapper>1</ChartWrapper>
        </FlexWrapper>
      </Wrapper>
    </ScrollableWrapper>
  );
};

export default MonthPage;
