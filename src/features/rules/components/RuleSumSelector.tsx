import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../../components/Loading';
import { TweetList, HashtagList } from '../../monitors';
import { Rule } from '../api';

export type PartialProps = Pick<Rule, 'collectTweets' | 'collectHashtags'>;
interface Props {
  onChange: (partialRule: PartialProps) => unknown;
  value: PartialProps;
}

export const RuleSumSelector = ({ onChange, value }: Props) => {
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
              tweetIds={value.collectTweets}
              onSelect={(ids) => onChange({ ...value, collectTweets: ids })}
            />
          </React.Suspense>
        </TabPanel>
        <TabPanel padding={1}>
          <React.Suspense fallback={<Loading />}>
            <HashtagList
              hashtagIds={value.collectHashtags}
              onSelect={(ids) => onChange({ ...value, collectHashtags: ids })}
            />
          </React.Suspense>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
