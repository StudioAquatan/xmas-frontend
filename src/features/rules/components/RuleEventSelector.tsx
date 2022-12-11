import {
  HStack,
  Radio,
  RadioGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../../components/Loading';
import { HashtagList, TweetList } from '../../monitors';
import { Rule, RuleEventType } from '../api';

export type PartialProps = Pick<
  Rule,
  'event' | 'eventTweets' | 'eventHashtags'
>;
interface Props {
  onChange: (partialRule: PartialProps) => unknown;
  value: PartialProps;
}

export const getEventText = ({
  event,
  eventTweets,
  eventHashtags,
}: PartialProps) => {
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

export const RuleEventSelector = ({ onChange, value }: Props) => {
  const handleTabChange = (index: number) => {
    onChange({
      ...value,
      event: ['none', 'fav', 'hashtag'][index] as RuleEventType,
      eventHashtags: [],
      eventTweets: [],
    });
  };

  const handleRadioChange = (type: string) => {
    onChange({
      ...value,
      event: type as RuleEventType,
      eventHashtags: [],
    });
  };

  const handleTweetSelect = (ids: string[]) => {
    onChange({
      ...value,
      eventHashtags: [],
      eventTweets: ids,
    });
  };

  const handleHashtagList = (ids: number[]) => {
    onChange({
      ...value,
      eventHashtags: ids,
      eventTweets: [],
    });
  };

  return (
    <Tabs variant='solid-rounded' onChange={handleTabChange}>
      <TabList>
        <Tab textTransform='uppercase'>None</Tab>
        <Tab textTransform='uppercase'>Tweet</Tab>
        <Tab textTransform='uppercase'>Hashtag</Tab>
      </TabList>
      <TabPanels>
        <TabPanel />
        <TabPanel padding={1}>
          <RadioGroup onChange={handleRadioChange} value={value.event} mx={3}>
            <HStack spacing={3}>
              <Radio value='fav'>Like</Radio>
              <Radio value='retweet'>Retweet</Radio>
              <Radio value='reply'>Reply</Radio>
            </HStack>
          </RadioGroup>
          <React.Suspense fallback={<Loading />}>
            <TweetList
              tweetIds={value.eventTweets}
              onSelect={handleTweetSelect}
            />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <HashtagList
              hashtagIds={value.eventHashtags}
              onSelect={handleHashtagList}
            />
          </React.Suspense>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
