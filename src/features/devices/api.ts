import useSWR from 'swr';

export interface Device {
  deviceId: string;
  ruleId: number;
}
export const useDeviceList = () => {
  return useSWR<Device[]>('/api/devices');
};
