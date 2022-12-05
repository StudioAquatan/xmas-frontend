import useSWR from 'swr';
import { fetchApi } from '../../lib/fetch';
import { UserProfileData } from './types';

export const useAccountList = () => {
  return useSWR<UserProfileData[]>('/api/twitter/accounts');
};

export const activateWebhook = async () => {
  const res = await fetchApi('/api/twitter/webhook', { method: 'PUT' });
  if (!res.ok) throw new Error('Unexpected error');
};

export const activateStream = async () => {
  const res = await fetchApi('/api/twitter/stream', { method: 'PUT' });
  if (!res.ok) throw new Error('Unexpected error');
};
