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
import { useRecoilState } from 'recoil';
import { Loading } from '../../../components/Loading';
import { HashtagList, TweetList } from '../../monitors';
import { RuleEventType } from '../api';
import { eventSelectorAtom, eventTypeAtom } from '../stores/atoms';

export const RuleEventSelector = () => {
  const [{ event: eventType }, setType] = useRecoilState(eventTypeAtom);
  const [{ eventHashtags, eventTweets }, setEventSource] =
    useRecoilState(eventSelectorAtom);

  const handleTabChange = (index: number) => {
    setType({ event: ['none', 'fav', 'hashtag'][index] as RuleEventType });
  };

  const handleRadioChange = (type: string) => {
    setType({
      event: type as RuleEventType,
    });
  };

  const handleTweetSelect = (ids: string[]) => {
    setEventSource({
      eventHashtags: [],
      eventTweets: ids,
    });
  };

  const handleHashtagList = (ids: number[]) => {
    setEventSource({
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
          <RadioGroup onChange={handleRadioChange} value={eventType} mx={3}>
            <HStack spacing={3}>
              <Radio value='fav'>Like</Radio>
              <Radio value='retweet'>Retweet</Radio>
              <Radio value='reply'>Reply</Radio>
            </HStack>
          </RadioGroup>
          <React.Suspense fallback={<Loading />}>
            <TweetList tweetIds={eventTweets} onSelect={handleTweetSelect} />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <HashtagList
              hashtagIds={eventHashtags}
              onSelect={handleHashtagList}
            />
          </React.Suspense>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
