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
  resultAtom,
  FavRangePartialProps,
  RetweetRangePartialProps,
  ReplyRangePartialProps,
  HashtagRangePartialProps,
  SumRangePartialProps,
  SumTypePartialProps,
  SourcePartialProps,
  ResultPartialProps,
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

export const getRangeText = ({
  minFav,
  maxFav,
  minRetweet,
  maxRetweet,
  minReply,
  maxReply,
  minHashtag,
  maxHashtag,
  minSum,
  maxSum,
  sumTarget,
}: FavRangePartialProps &
  RetweetRangePartialProps &
  ReplyRangePartialProps &
  HashtagRangePartialProps &
  SumRangePartialProps &
  SumTypePartialProps) => {
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

  if (hasRange(minFav, maxFav)) {
    chunks.push(`Fav: ${range(minFav, maxFav)}`);
  }

  if (hasRange(minRetweet, maxRetweet)) {
    chunks.push(`RT: ${range(minRetweet, maxRetweet)}`);
  }

  if (hasRange(minReply, maxReply)) {
    chunks.push(`Rp: ${range(minReply, maxReply)}`);
  }

  if (hasRange(minHashtag, maxHashtag)) {
    chunks.push(`#: ${range(minHashtag, maxHashtag)}`);
  }

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
};

export const rangeTextSelector = selector({
  key: 'rangeText',
  get: ({ get }) => {
    return getRangeText({
      ...get(favRangeSelectorAtom),
      ...get(retweetRangeSelectorAtom),
      ...get(replyRangeSelectorAtom),
      ...get(hashtagRangeSelectorAtom),
      ...get(sumRangeSelectorAtom),
      ...get(sumTypeSelectorAtom),
    });
  },
});

export const getSourceText = ({
  collectHashtags,
  collectTweets,
}: SourcePartialProps) =>
  `${collectTweets.length} tweets / ${collectHashtags.length} tags`;

export const sourceTextSelector = selector({
  key: 'sourceText',
  get: ({ get }) => {
    return getSourceText(get(sourceSelectorAtom));
  },
});

export const getResultText = ({
  priority,
  targetPattern,
  timeout,
}: ResultPartialProps) => {
  if (timeout ?? 0 > 0) {
    return `P: ${targetPattern} Pri: ${priority}, T: ${timeout} sec`;
  } else {
    return `P: ${targetPattern} Pri: ${priority}`;
  }
};
export const resultTextSelector = selector({
  key: 'resultText',
  get: ({ get }) => {
    return getResultText(get(resultAtom));
  },
});
