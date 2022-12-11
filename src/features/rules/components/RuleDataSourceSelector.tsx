import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Loading } from '../../../components/Loading';
import { TweetList, HashtagList } from '../../monitors';
import { sourceSelectorAtom } from '../stores/atoms';

export const RuleDataSourceSelector = () => {
  const [{ collectHashtags, collectTweets }, set] =
    useRecoilState(sourceSelectorAtom);
  return (
    <Tabs variant='enclosed'>
      <TabList>
        <Tab textTransform='uppercase'>Tweet</Tab>
        <Tab textTransform='uppercase'>Hashtag</Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <TweetList
              tweetIds={collectTweets}
              onSelect={(ids) => set({ collectHashtags, collectTweets: ids })}
            />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <HashtagList
              hashtagIds={collectHashtags}
              onSelect={(ids) => set({ collectTweets, collectHashtags: ids })}
            />
          </React.Suspense>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
