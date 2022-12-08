import useSWR from 'swr';
import { fetchApi } from '../../lib/fetch';

export interface TweetMonitor {
  tweetId: string;
  favCount: number;
  retweetCount: number;
  replyCount: number;
}

export const useTweetMonitors = () => {
  return useSWR<TweetMonitor[]>('/api/twitter/monitor/tweet');
};

export const addMonitorTweet = async (id: string) => {
  const res = await fetchApi(`/api/twitter/monitor/tweet/${id}`, {
    method: 'PUT',
  });
  if (!res.ok) throw new Error('Operation failed');
};

export interface HashtagMonitor {
  id: number;
  hashtag: string;
  count: number;
}

export const useHashtagMonitors = () => {
  return useSWR<HashtagMonitor[]>('/api/twitter/monitor/hashtag');
};
