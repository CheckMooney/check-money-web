import React from 'react';
import { dateToString } from 'utils/date';
import useDate from 'hooks/useDate';
import BarChart from 'components/Chart/BarChart/BarChart';
import PieChart from 'components/Chart/PieChart/PieChart';
import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import {
  ChartWrapper,
  FlexWrapper,
  HeaderWrapper,
  Wrapper,
} from './MonthPage.style';

const MonthPage = () => {
  const { currentDate } = useDate();
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
          <ChartWrapper>
            <PieChart />
          </ChartWrapper>
        </FlexWrapper>
      </Wrapper>
    </ScrollableWrapper>
  );
};

export default MonthPage;
