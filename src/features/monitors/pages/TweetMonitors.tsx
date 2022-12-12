import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useConfirmDelete } from 'chakra-confirm';
import React from 'react';
import { AddTweetForm, deleteMonitorTweet, TweetList } from '..';
import { Loading } from '../../../components/Loading';

export const TweetMonitorsPage = () => {
  const confirm = useConfirmDelete();
  const toast = useToast({ status: 'success' });
  const handleDelete = async (id: string) => {
    if (await confirm()) {
      await deleteMonitorTweet(id);
      toast({ title: 'Deleted' });
    }
  };
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
          <TweetList onDelete={handleDelete} />
        </React.Suspense>
      </CardBody>
    </Card>
  );
};
