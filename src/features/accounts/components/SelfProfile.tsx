import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Stack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { activateStream, activateWebhook, UserProfile } from '..';
import { useUser } from '../../auth/api';

export const SelfProfile = () => {
  const { data } = useUser();
  const toast = useToast();

  const handleWebhook = async () => {
    try {
      await activateWebhook();
      toast({
        title: 'Webhook activated',
        status: 'success',
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Webhook activate failed',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const handleStream = async () => {
    try {
      await activateStream();
      toast({
        title: 'Streaming activated',
        status: 'success',
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Streaming activate failed',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Card key={data!.userId} variant='filled'>
      <CardHeader>
        <UserProfile user={data!} />
      </CardHeader>
      <CardBody>
        <Stack direction='row' spacing={4}>
          <Button colorScheme='teal' onClick={handleWebhook}>
            Enable webhook
          </Button>
          <Button colorScheme='teal' onClick={handleStream}>
            Enable streaming
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
