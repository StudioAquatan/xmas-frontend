import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { AddTweetForm, TweetList } from '..';
import { Loading } from '../../../components/Loading';

export const TweetMonitorsPage = () => {
  return (
    <Card marginY={3}>
      <CardHeader>
        <Heading as='h4' size='md'>
          Tweet Monitor
        </Heading>
      </CardHeader>
      <CardBody>
        <AddTweetForm />
        <React.Suspense fallback={<Loading />}>
          <TweetList />
        </React.Suspense>
      </CardBody>
    </Card>
  );
};
