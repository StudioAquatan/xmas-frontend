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

interface Props {
  onChange?: (
    partialRule: Pick<Rule, 'event' | 'eventTweets' | 'eventHashtags'>
  ) => unknown;
}

export const RuleEventSelector = ({ onChange }: Props) => {
  const [tweetIds, setTweetIds] = React.useState<string[]>([]);
  const [eventType, setType] = React.useState<RuleEventType>('none');
  const [hashtagIds, setHashtagIds] = React.useState<number[]>([]);

  const handleTabChange = (index: number) => {
    if (index === 0) setType('none');
    else if (index === 1) setType('fav');
    else setType('hashtag');

    setTweetIds([]);
    setHashtagIds([]);
  };

  React.useEffect(() => {
    onChange?.({
      event: eventType,
      eventTweets: tweetIds,
      eventHashtags: hashtagIds,
    });
  }, [eventType, tweetIds, hashtagIds]);

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
          <RadioGroup
            onChange={(type) => setType(type as RuleEventType)}
            value={eventType}
            mx={3}
          >
            <HStack spacing={3}>
              <Radio value='fav'>Like</Radio>
              <Radio value='retweet'>Retweet</Radio>
              <Radio value='reply'>Reply</Radio>
            </HStack>
          </RadioGroup>
          <React.Suspense fallback={<Loading />}>
            <TweetList tweetIds={tweetIds} onSelect={setTweetIds} />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <HashtagList hashtagIds={hashtagIds} onSelect={setHashtagIds} />
          </React.Suspense>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
