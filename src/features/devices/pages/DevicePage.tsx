import React from 'react';
import { RecoilRoot } from 'recoil';
import { Loading } from '../../../components/Loading';
import { DeviceList } from '../components/DeviceList';
import { DeviceEditModal } from '../components/EditModal';

export const DevicePage = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <DeviceList />
        <DeviceEditModal />
      </React.Suspense>
    </RecoilRoot>
  );
};
