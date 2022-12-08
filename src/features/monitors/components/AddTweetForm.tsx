import { Button, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { TweetSelector } from '../../../components/TweetSelector';

export const AddTweetForm = () => {
  return (
    <Card marginY={3}>
      <CardHeader>
        <Heading as='h4' size='md'>
          Add Tweet Monitor
        </Heading>
      </CardHeader>
      <CardBody>
        <TweetSelector />
        <Button marginY='4' colorScheme='green'>
          Add
        </Button>
      </CardBody>
    </Card>
  );
};
