import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAccountsQuery } from 'services/queries/account';

import TransactionList from 'components/TransactionList/TransactionList';
import ScrollableWrapper from 'components/common/ScrollableWrapper/ScrollableWrapper';
import { Wrapper } from './AccountPage.style';

interface AccountPageParams {
  accountId: string;
}

const AccountPage = () => {
  const { accountId } = useParams<AccountPageParams>();

  const { data } = useGetAccountsQuery();
  const currentAccount = accountId
    ? data?.rows.find((account) => account.id === parseInt(accountId))
    : undefined;

  if (!currentAccount) {
    return <div>없는 계좌입니다.</div>;
  }

  return (
    <ScrollableWrapper>
      <Wrapper>
        <TransactionList
          title={currentAccount.title}
          description={currentAccount.description}
          accountId={accountId}
        />
      </Wrapper>
    </ScrollableWrapper>
  );
};

export default AccountPage;
