import React from 'react';
import { ReactComponent as BillIcon } from 'assets/svg/bills.svg';
import { EmptyText, EmptyWrapper } from './EmptyItem.style';

export interface EmptyItemProps {
  label: string;
}
const EmptyItem: React.FC<EmptyItemProps> = ({ label }) => {
  return (
    <EmptyWrapper>
      <BillIcon width="240" />
      <EmptyText>{label}</EmptyText>
    </EmptyWrapper>
  );
};

export default EmptyItem;
