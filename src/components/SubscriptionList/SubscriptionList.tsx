import React from 'react';
import TransactionItem from 'components/TransactionItem/TransactionItem';
import { useGetSubscriptionsQuery } from 'services/queries/subscription';
import {
  Wrapper,
  Heading,
  ListWrapper,
  SubHeading,
} from './SubscriptionList.style';
import EmptyItem from 'components/common/EmptyItem/EmptyItem';

interface SubscriptionListProps {
  accountId: number;
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ accountId }) => {
  const { data: subscriptions, isLoading } =
    useGetSubscriptionsQuery(accountId);

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  return (
    <Wrapper>
      <Heading>매달 나가는 돈</Heading>
      {subscriptions?.length ? (
        <>
          <SubHeading>
            {subscriptions
              ?.reduce((prev, cur) => prev + cur.price, 0)
              .toLocaleString()}
            원
          </SubHeading>
          <ListWrapper>
            {subscriptions.map((subscription) => (
              <TransactionItem
                key={subscription.id}
                transaction={subscription}
                transactionType="subscription"
              />
            ))}
          </ListWrapper>
        </>
      ) : (
        <EmptyItem label="예정된 고정 지출 내역이 없습니다." />
      )}
    </Wrapper>
  );
};

export default SubscriptionList;
