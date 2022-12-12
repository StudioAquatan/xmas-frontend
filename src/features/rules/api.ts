import useSWR, { mutate } from 'swr';
import { fetchApi } from '../../lib/fetch';

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
  return useSWR<AllRuleMap>('/api/rules');
};

export const addRule = async (rule: Omit<Rule, 'id'>) => {
  const body = JSON.stringify(rule);
  const { ok } = await fetchApi(`/api/rules/${rule.ruleId}`, {
    body,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!ok) throw new Error('Error');
  mutate('/api/rules');
};

export const editRule = async (rule: Rule) => {
  const body = JSON.stringify(rule);
  const { ok } = await fetchApi(`/api/rules/${rule.ruleId}/${rule.id}`, {
    body,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!ok) throw new Error('Error');
  mutate('/api/rules');
};

export const deleteRule = async (rule: Rule) => {
  const body = JSON.stringify(rule);
  const { ok } = await fetchApi(`/api/rules/${rule.ruleId}/${rule.id}`, {
    body,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!ok) throw new Error('Error');
  mutate('/api/rules');
};
