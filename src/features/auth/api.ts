import useSWR from 'swr';

export interface UserInfo {
  userId: string;
  screenName: string;
  displayName: string;
  iconUrl: string;
  webhookActivated: boolean;
  useStream: boolean;
}

export const useUser = () => {
  return useSWR<UserInfo>('/api/twitter');
};
