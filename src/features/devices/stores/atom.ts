import { atom } from 'recoil';

export interface DeviceEditModal {
  isOpen: boolean;
  deviceId: string;
}

export const deviceEditModalAtom = atom<DeviceEditModal>({
  key: 'deviceEditModalAtom',
  default: {
    isOpen: false,
    deviceId: '',
  },
});
