import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useConfirmDelete } from 'chakra-confirm';
import React from 'react';
import { AddHashtagForm, deleteMonitorHashtag, HashtagList } from '..';
import { Loading } from '../../../components/Loading';

export const HashtagMonitorsPage = () => {
  const confirm = useConfirmDelete();
  const toast = useToast({ status: 'success' });
  const handleDelete = async (id: number) => {
    if (await confirm()) {
      await deleteMonitorHashtag(id);
      toast({ title: 'Deleted' });
    }
  };
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
          <HashtagList onSelect={console.log} onDelete={handleDelete} />
        </React.Suspense>
      </CardBody>
    </Card>
  );
};
