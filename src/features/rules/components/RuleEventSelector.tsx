import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Loading } from '../../../components/Loading';
import { HashtagList, TweetList } from '../../monitors';
import { RuleEventType } from '../api';
import { eventSelectorAtom, eventTypeAtom } from '../stores/atoms';

export const RuleEventSelector = () => {
  const [{ event: type }, setType] = useRecoilState(eventTypeAtom);
  const [{ eventHashtags, eventTweets }, setEventSource] =
    useRecoilState(eventSelectorAtom);

  const handleTabChange = (index: number) => {
    setType({
      event: ['none', 'fav', 'retweet', 'reply', 'hashtag'][
        index
      ] as RuleEventType,
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
    <Tabs
      variant='solid-rounded'
      onChange={handleTabChange}
      index={['none', 'fav', 'retweet', 'reply', 'hashtag'].indexOf(type)}
    >
      <TabList>
        <Tab textTransform='uppercase'>Always</Tab>
        <Tab textTransform='uppercase'>Like</Tab>
        <Tab textTransform='uppercase'>Retweet</Tab>
        <Tab textTransform='uppercase'>Reply</Tab>
        <Tab textTransform='uppercase'>Hashtag</Tab>
      </TabList>
      <TabPanels>
        <TabPanel />
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <TweetList tweetIds={eventTweets} onSelect={handleTweetSelect} />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <TweetList tweetIds={eventTweets} onSelect={handleTweetSelect} />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
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
