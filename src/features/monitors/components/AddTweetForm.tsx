import { Button, Box } from '@chakra-ui/react';
import React from 'react';
import { mutate } from 'swr';
import { TweetSelector } from '../../../components/TweetSelector';
import { addMonitorTweet } from '../api';

export const AddTweetForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [tweetId, setTweetId] = React.useState('');
  const handleAdd = async () => {
    setLoading(true);
    await addMonitorTweet(tweetId);
    setLoading(false);
    mutate('/api/twitter/monitor/tweet');
  };
  return (
    <Box>
      <TweetSelector onChange={(tweetId) => setTweetId(tweetId)} />
      <Button
        marginY='4'
        colorScheme='green'
        onClick={handleAdd}
        isLoading={loading}
      >
        Add
      </Button>
    </Box>
  );
};
