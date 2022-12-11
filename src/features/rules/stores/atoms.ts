import { atom } from 'recoil';
import { Rule } from '../api';

export type EventTypePartialProps = Pick<Rule, 'event'>;
export type EventSourcePartialProps = Pick<
  Rule,
  'eventTweets' | 'eventHashtags'
>;

export const eventTypeAtom = atom<EventTypePartialProps>({
  key: 'eventTypeAtom',
  default: { event: 'none' },
});

export const eventSelectorAtom = atom<EventSourcePartialProps>({
  key: 'eventSourceAtom',
  default: {
    eventTweets: [],
    eventHashtags: [],
  },
});

export type SourcePartialProps = Pick<
  Rule,
  'collectTweets' | 'collectHashtags'
>;
export const sourceSelectorAtom = atom<SourcePartialProps>({
  key: 'sourceAtom',
  default: {
    collectHashtags: [],
    collectTweets: [],
  },
});

export type FavRangePartialProps = Pick<Rule, 'minFav' | 'maxFav'>;
export type RetweetRangePartialProps = Pick<Rule, 'minRetweet' | 'maxRetweet'>;
export type ReplyRangePartialProps = Pick<Rule, 'minReply' | 'maxReply'>;
export type HashtagRangePartialProps = Pick<Rule, 'minHashtag' | 'maxHashtag'>;
export type SumTypePartialProps = Pick<Rule, 'sumTarget'>;
export type SumRangePartialProps = Pick<Rule, 'minSum' | 'maxSum'>;
export const favRangeSelectorAtom = atom<FavRangePartialProps>({
  key: 'favRangeAtom',
  default: {
    minFav: null,
    maxFav: null,
  },
});

export const retweetRangeSelectorAtom = atom<RetweetRangePartialProps>({
  key: 'retweetRangeAtom',
  default: {
    minRetweet: null,
    maxRetweet: null,
  },
});

export const replyRangeSelectorAtom = atom<ReplyRangePartialProps>({
  key: 'replyRangeAtom',
  default: {
    minReply: null,
    maxReply: null,
  },
});

export const hashtagRangeSelectorAtom = atom<HashtagRangePartialProps>({
  key: 'hashtagRangeAtom',
  default: {
    minHashtag: null,
    maxHashtag: null,
  },
});

export const sumRangeSelectorAtom = atom<SumRangePartialProps>({
  key: 'sumRangeAtom',
  default: {
    minSum: null,
    maxSum: null,
  },
});

export const sumTypeSelectorAtom = atom<SumTypePartialProps>({
  key: 'sumTypeAtom',
  default: {
    sumTarget: [],
  },
});

export type ResultPartialProps = Pick<
  Rule,
  'targetPattern' | 'priority' | 'timeout'
>;
export const resultAtom = atom<ResultPartialProps>({
  key: 'resultAtom',
  default: {
    targetPattern: 0,
    priority: 0,
    timeout: 0,
  },
});
