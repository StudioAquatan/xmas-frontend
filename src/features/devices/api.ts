import useSWR, { mutate } from 'swr';
import { fetchApi } from '../../lib/fetch';

export interface Device {
  deviceId: string;
  ruleId: number;
}
export const useDeviceList = () => {
  return useSWR<Device[]>('/api/devices');
};

export const updateRuleId = async (deviceId: string, ruleId: number) => {
  const { ok } = await fetchApi(
    `/api/devices/${deviceId}/rules?ruleId=${ruleId}`,
    { method: 'PATCH' }
  );
  if (!ok) throw new Error('Error');
  mutate('/api/devices');
};

export const updatePattern = async (deviceId: string, pattern: number) => {
  const { ok } = await fetchApi(
    `/api/devices/${deviceId}/pattern?pattern=${pattern}`,
    { method: 'POST' }
  );
  if (!ok) throw new Error('Error');
  mutate('/api/devices');
};
