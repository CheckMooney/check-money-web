import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ChartWrapper, HeaderWrapper, Wrapper } from './BarChart.style';
import ToggleButton from 'components/common/ToggleButton/ToggleButton';

type ChartViewType = 'month' | 'week' | 'day';

const BarChart = () => {
  const [chartViewType, setChartViewType] = useState<ChartViewType>('day');

  const toggleItems = [
    {
      label: '월별',
      isActive: chartViewType === 'month',
      onClick: () => setChartViewType('month'),
    },
    {
      label: '주별',
      isActive: chartViewType === 'week',
      onClick: () => setChartViewType('week'),
    },
    {
      label: '일별',
      isActive: chartViewType === 'day',
      onClick: () => setChartViewType('day'),
    },
  ];

  const data = new Array(31).fill(null).map((_, i) => ({
    date: `2021-12-${i + 1}`,
    price: Math.floor(Math.random() * (999999999 - 10000)) + 10000,
  }));

  return (
    <Wrapper>
      <HeaderWrapper>
        <h2>하루에 평균 1만원 정도 써요.</h2>
        <ToggleButton toggleItems={toggleItems} />
      </HeaderWrapper>
      <ChartWrapper>
        <ResponsiveBar
          data={data}
          indexBy="date"
          keys={['price']}
          colors="#3182F5"
          borderRadius={4}
          enableLabel={false}
        />
      </ChartWrapper>
    </Wrapper>
  );
};

export default BarChart;
