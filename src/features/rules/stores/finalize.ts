import { DefaultValue, selector } from 'recoil';
import { Rule } from '../api';
import {
  eventSelectorAtom,
  eventTypeAtom,
  sourceSelectorAtom,
  favRangeSelectorAtom,
  retweetRangeSelectorAtom,
  replyRangeSelectorAtom,
  hashtagRangeSelectorAtom,
  sumRangeSelectorAtom,
  sumTypeSelectorAtom,
  resultAtom,
} from './atoms';

export const ruleFinalizeSelector = selector<Omit<Rule, 'id' | 'ruleId'>>({
  key: 'ruleFinalized',
  get: ({ get }) => {
    const rule: Omit<Rule, 'id' | 'ruleId'> = {
      ...get(eventSelectorAtom),
      ...get(eventTypeAtom),
      ...get(sourceSelectorAtom),
      ...get(favRangeSelectorAtom),
      ...get(retweetRangeSelectorAtom),
      ...get(replyRangeSelectorAtom),
      ...get(hashtagRangeSelectorAtom),
      ...get(sumRangeSelectorAtom),
      ...get(sumTypeSelectorAtom),
      ...get(resultAtom),
    };

    return rule;
  },
  set: ({ set }, rule) => {
    if (rule instanceof DefaultValue) return;

    set(eventTypeAtom, { event: rule.event });
    set(eventSelectorAtom, {
      eventHashtags: rule.eventHashtags,
      eventTweets: rule.eventTweets,
    });
    set(sourceSelectorAtom, {
      collectHashtags: rule.collectHashtags,
      collectTweets: rule.collectTweets,
    });
    set(favRangeSelectorAtom, {
      minFav: rule.minFav,
      maxFav: rule.maxFav,
    });
    set(retweetRangeSelectorAtom, {
      minRetweet: rule.minRetweet,
      maxRetweet: rule.maxRetweet,
    });
    set(replyRangeSelectorAtom, {
      minReply: rule.minReply,
      maxReply: rule.maxReply,
    });
    set(hashtagRangeSelectorAtom, {
      minHashtag: rule.minHashtag,
      maxHashtag: rule.maxHashtag,
    });
    set(sumTypeSelectorAtom, {
      sumTarget: rule.sumTarget,
    });
    set(sumRangeSelectorAtom, {
      minSum: rule.minSum,
      maxSum: rule.maxSum,
    });
    set(resultAtom, {
      targetPattern: rule.targetPattern,
      timeout: rule.timeout,
      priority: rule.priority,
    });
  },
});
