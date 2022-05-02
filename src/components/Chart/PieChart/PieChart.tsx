import React, { useMemo } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useGetTotalConsumptionByCategory } from 'services/queries/transaction';
import { HeaderWrapper, Wrapper, ChartWrapper } from './PieChart.style';
import Skeleton from 'components/Skeleton/Skeleton';
import { dateToString } from 'utils/date';
import { ReactComponent as PieChartIcon } from 'assets/svg/pie-chart.svg';

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  const { data, isLoading } = useGetTotalConsumptionByCategory(
    dateToString(new Date(), 'yyyy-mm'),
  );

  const heading = useMemo(() => {
    if (!data) {
      return '';
    }
    const maxConsumption = Math.max(
      ...data.map(({ totalConsumption }) => totalConsumption),
    );
    const maxCategories = data.filter(
      ({ totalConsumption }) => totalConsumption === maxConsumption,
    );
    return maxCategories?.map(({ category }) => category).join(', ');
  }, [data]);

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton>
          <PieChartIcon width={48} height={48} />
        </Skeleton>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <h2>
          {heading
            ? `이번 달에 ${heading}에 가장 많이 사용하셨습니다.`
            : '이번 달 사용내역이 없습니다.'}
        </h2>
      </HeaderWrapper>
      <ChartWrapper>
        {data && (
          <ResponsivePie
            data={data}
            id="category"
            value="totalConsumption"
            margin={{ top: 40, right: 60, bottom: 40, left: 40 }}
            padAngle={1}
            cornerRadius={4}
            innerRadius={0.4}
            sortByValue={true}
            arcLabel={'id'}
            arcLabelsSkipAngle={10}
            enableArcLinkLabels={false}
            activeInnerRadiusOffset={2}
            activeOuterRadiusOffset={4}
            transitionMode="middleAngle"
            colors={{ scheme: 'nivo' }}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 40,
                translateY: 0,
                itemsSpacing: 8,
                itemWidth: 80,
                itemHeight: 16,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 16,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </ChartWrapper>
    </Wrapper>
  );
};

export default PieChart;
