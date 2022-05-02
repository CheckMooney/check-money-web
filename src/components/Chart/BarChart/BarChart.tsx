import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {
  ChartWrapper,
  HeaderWrapper,
  ToggleWrapper,
  Tooltip,
  Wrapper,
} from './BarChart.style';
import ToggleButton from 'components/common/ToggleButton/ToggleButton';
import { useGetTotalConsumption } from 'services/queries/transaction';
import Skeleton from 'components/Skeleton/Skeleton';
import { ReactComponent as BarChartIcon } from 'assets/svg/bar-chart.svg';
import { dateToString } from 'utils/date';

type ChartViewType = 'month' | 'day';

const BarChart = () => {
  const [chartViewType, setChartViewType] = useState<ChartViewType>('day');
  const { data, isLoading } = useGetTotalConsumption(
    dateToString(new Date(), 'yyyy-mm-dd'),
    chartViewType,
  );

  const toggleItems = [
    {
      label: '월별',
      isActive: chartViewType === 'month',
      onClick: () => setChartViewType('month'),
    },
    {
      label: '일별',
      isActive: chartViewType === 'day',
      onClick: () => setChartViewType('day'),
    },
  ];

  if (isLoading || !data) {
    return (
      <Wrapper>
        <Skeleton>
          <BarChartIcon width={48} height={48} />
        </Skeleton>
      </Wrapper>
    );
  }

  const barTooltipText = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return day ? `${month}월 ${day}일` : `${year}년 ${month}월`;
  };

  const chartText = () => {
    if (!data) return '';
    return chartViewType === 'day'
      ? `하루에 평균 ${Math.round(data.chartAverage / 1000)}천원 정도 써요.`
      : `한 달에 평균 ${Math.round(data.chartAverage / 10000)}만원 정도 써요`;
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <h2>{chartText()}</h2>
        <h3>
          오늘은 {data.chartData[data.chartData.length - 1].totalConsumption}
          원을 사용하였습니다.
        </h3>
        <ToggleWrapper>
          <ToggleButton toggleItems={toggleItems} />
        </ToggleWrapper>
      </HeaderWrapper>
      <ChartWrapper>
        {data && (
          <ResponsiveBar
            data={data.chartData}
            indexBy="date"
            keys={['totalConsumption']}
            padding={0.2}
            colors={'#3182F5'}
            borderRadius={4}
            enableLabel={false}
            enableGridX={false}
            enableGridY={false}
            tooltip={({ data }) => (
              <Tooltip>
                {barTooltipText(data.date)} {data.totalConsumption}원
              </Tooltip>
            )}
            minValue={-1}
          />
        )}
      </ChartWrapper>
    </Wrapper>
  );
};

export default BarChart;
