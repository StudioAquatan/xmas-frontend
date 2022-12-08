import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { BsHash } from 'react-icons/bs';
import { mutate } from 'swr';
import { addMonitorHashtag } from '..';

export const AddHashtagForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [hashtag, setHashtag] = React.useState('');
  const toast = useToast();
  const handleAdd = async () => {
    setLoading(true);
    await addMonitorHashtag(hashtag);
    setLoading(false);
    mutate('/api/twitter/monitor/hashtag');
    toast({
      title: `#${hashtag} added`,
      status: 'success',
    });
    setHashtag('');
  };
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <BsHash />
        </InputLeftElement>
        <Input
          placeholder='Minecraft'
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
        <InputRightElement width='3.5rem'>
          <Button
            colorScheme='green'
            onClick={handleAdd}
            size='sm'
            isLoading={loading}
            isDisabled={!hashtag.trim()}
          >
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
