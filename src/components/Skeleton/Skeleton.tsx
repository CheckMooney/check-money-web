import React from 'react';
import { SquareSkeleton } from './Skeleton.style';

interface SkeletonProps {
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ children }: SkeletonProps) => {
  return <SquareSkeleton>{children}</SquareSkeleton>;
};

export default Skeleton;
