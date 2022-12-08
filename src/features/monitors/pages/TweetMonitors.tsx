import { Box } from '@chakra-ui/react';
import React from 'react';
import { AddTweetForm, TweetList } from '..';
import { Loading } from '../../../components/Loading';

export const TweetMonitorsPage = () => {
  return (
    <Box>
      <AddTweetForm />
      <React.Suspense fallback={<Loading />}>
        <TweetList />
      </React.Suspense>
    </Box>
  );
};
