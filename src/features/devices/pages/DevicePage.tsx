import React from 'react';
import { Loading } from '../../../components/Loading';
import { DeviceList } from '../components/DeviceList';

export const DevicePage = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <DeviceList />
    </React.Suspense>
  );
};
