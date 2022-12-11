import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../../components/Loading';
import { TweetList, HashtagList } from '../../monitors';
import { Rule } from '../api';

interface Props {
  onChange?: (
    partialRule: Pick<Rule, 'collectTweets' | 'collectHashtags'>
  ) => unknown;
}

export const RuleSumSelector = ({ onChange }: Props) => {
  const [tweetIds, setTweetIds] = React.useState<string[]>([]);
  const [hashtagIds, setHashtagIds] = React.useState<number[]>([]);

  React.useEffect(() => {
    onChange?.({
      collectTweets: tweetIds,
      collectHashtags: hashtagIds,
    });
  }, [tweetIds, hashtagIds]);

  return (
    <Tabs variant='enclosed'>
      <TabList>
        <Tab textTransform='uppercase'>Tweet</Tab>
        <Tab textTransform='uppercase'>Hashtag</Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding={1}>
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
