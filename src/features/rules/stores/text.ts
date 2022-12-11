import { selector } from 'recoil';
import {
  EventSourcePartialProps,
  EventTypePartialProps,
  eventTypeAtom,
  eventSelectorAtom,
  favRangeSelectorAtom,
  retweetRangeSelectorAtom,
  replyRangeSelectorAtom,
  hashtagRangeSelectorAtom,
  sumRangeSelectorAtom,
  sumTypeSelectorAtom,
  sourceSelectorAtom,
} from './atoms';

export const getEventText = ({
  event,
  eventTweets,
  eventHashtags,
}: EventSourcePartialProps & EventTypePartialProps) => {
  switch (event) {
    case 'none':
      return 'Always';
    case 'fav':
      return `Likes of ${eventTweets?.length ?? 0} tweets`;
    case 'retweet':
      return `Retweet of ${eventTweets?.length ?? 0} tweets`;
    case 'reply':
      return `Reply count of ${eventTweets?.length ?? 0} tweets`;
    case 'hashtag':
      return `Hashtag count of ${eventHashtags?.length ?? 0} tags`;
  }
};

export const eventTextSelector = selector({
  key: 'eventText',
  get: ({ get }) => {
    const props = {
      ...get(eventSelectorAtom),
      ...get(eventTypeAtom),
    };
    return getEventText(props);
  },
});

export const rangeTextSelector = selector({
  key: 'rangeText',
  get: ({ get }) => {
    const hasRange = (min: number | null, max: number | null) => {
      return !(min === null && max === null);
    };
    const range = (min: number | null, max: number | null) => {
      if (!hasRange(min, max)) {
        return '-';
      } else {
        return `[${min ?? ''},${max ?? ''}]`;
      }
    };

    const chunks = [''];

    const { minFav, maxFav } = get(favRangeSelectorAtom);
    if (hasRange(minFav, maxFav)) {
      chunks.push(`Fav: ${range(minFav, maxFav)}`);
    }

    const { minRetweet, maxRetweet } = get(retweetRangeSelectorAtom);
    if (hasRange(minRetweet, maxRetweet)) {
      chunks.push(`RT: ${range(minRetweet, maxRetweet)}`);
    }

    const { minReply, maxReply } = get(replyRangeSelectorAtom);
    if (hasRange(minReply, maxReply)) {
      chunks.push(`Rp: ${range(minReply, maxReply)}`);
    }

    const { minHashtag, maxHashtag } = get(hashtagRangeSelectorAtom);
    if (hasRange(minHashtag, maxHashtag)) {
      chunks.push(`#: ${range(minHashtag, maxHashtag)}`);
    }

    const { minSum, maxSum } = get(sumRangeSelectorAtom);
    const { sumTarget } = get(sumTypeSelectorAtom);
    if (sumTarget.length > 0) {
      const map: Record<'fav' | 'retweet' | 'reply' | 'hashtag', string> = {
        fav: 'F',
        retweet: 'RT',
        reply: 'Rp',
        hashtag: '#',
      };
      chunks.push(
        `${sumTarget.map((t) => map[t]).join('+')}: ${range(minSum, maxSum)}`
      );
    }
    if (chunks.length === 1) {
      chunks.push('N/A');
    }
    return chunks.join(' ');
  },
});

export const sourceTextSelector = selector({
  key: 'sourceText',
  get: ({ get }) => {
    const { collectHashtags, collectTweets } = get(sourceSelectorAtom);

    return `${collectTweets.length} tweets / ${collectHashtags.length} tags`;
  },
});
