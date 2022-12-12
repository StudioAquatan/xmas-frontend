import useSWR, { mutate } from 'swr';
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
  mutate('/api/twitter/monitor/tweet');
};

export interface HashtagMonitor {
  id: number;
  hashtag: string;
  count: number;
}

export const useHashtagMonitors = () => {
  return useSWR<HashtagMonitor[]>('/api/twitter/monitor/hashtag');
};

export const addMonitorHashtag = async (hashtag: string) => {
  const res = await fetchApi(`/api/twitter/monitor/hashtag`, {
    method: 'PUT',
    body: JSON.stringify({ hashtag }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Operation failed');
  mutate('/api/twitter/monitor/hashtag');
};
