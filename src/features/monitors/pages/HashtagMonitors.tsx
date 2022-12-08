import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { AddHashtagForm, HashtagList } from '..';
import { Loading } from '../../../components/Loading';

export const HashtagMonitorsPage = () => {
  return (
    <Card marginY={3}>
      <CardHeader>
        <Heading as='h4' size='md'>
          Hashtag Monitor
        </Heading>
      </CardHeader>
      <CardBody>
        <AddHashtagForm />
        <React.Suspense fallback={<Loading />}>
          <HashtagList onSelect={console.log} />
        </React.Suspense>
      </CardBody>
    </Card>
  );
};
