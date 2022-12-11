import useSWR from 'swr';

export type RuleEventType = 'none' | 'fav' | 'retweet' | 'reply' | 'hashtag';

export interface Rule {
  id: string;
  ruleId: number;
  priority: number;
  event: RuleEventType;
  eventTweets: string[];
  eventHashtags: number[];
  collectTweets: string[];
  collectHashtags: number[];
  minFav: number | null;
  maxFav: number | null;
  minRetweet: number | null;
  maxRetweet: number | null;
  minReply: number | null;
  maxReply: number | null;
  minHashtag: number | null;
  maxHashtag: number | null;
  sumTarget: Array<'fav' | 'retweet' | 'reply' | 'hashtag'>;
  minSum: number | null;
  maxSum: number | null;
  timeout: number | null;
  targetPattern: number;
}

export type RuleList = Rule[];
export type AllRuleMap = Record<string, RuleList>;

export const useAllRules = () => {
  return useSWR<AllRuleMap>('/rules');
};
