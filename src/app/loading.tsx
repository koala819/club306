'use client';
import React from 'react';
// import { Skeleton } from 'antd';

const Loading: React.FC = () => {
  // Or a custom loading skeleton component
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/2">{/* <Skeleton active /> */}</div>
    </div>
  );
};
export default Loading;
