import useSWR from 'swr';
import { UserProfileData } from './types';

export const useAccountList = () => {
  return useSWR<UserProfileData[]>('/api/twitter/accounts');
};
