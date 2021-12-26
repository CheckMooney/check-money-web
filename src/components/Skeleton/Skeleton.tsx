import React from 'react';
import { SquareSkeleton } from './Skeleton.style';

interface SkeletonProps {}

const Skeleton: React.FC<SkeletonProps> = () => {
  return <SquareSkeleton></SquareSkeleton>;
};

export default Skeleton;
