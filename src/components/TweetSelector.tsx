import { Box, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { extractTweetId } from '../lib/twitter';

interface Props {
  onChange: (tweetId: string) => unknown;
}

export const TweetSelector = ({ onChange }: Props) => {
  const [url, setUrl] = React.useState('');
  const deferredUrl = React.useDeferredValue(url);
  const tweetId = React.useMemo(
    () => extractTweetId(deferredUrl),
    [deferredUrl]
  );
  const [loaded, setLoaded] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);

  React.useEffect(() => {
    setShowPreview(false);
    setLoaded(false);
    onChange(tweetId!);
    setTimeout(() => setShowPreview(true), 0);
  }, [tweetId]);
  return (
    <Box>
      <InputGroup>
        <Input
          placeholder='https://twitter.com/StudioAquatan/status/1600644073177505792'
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </InputGroup>
    </Box>
  );
};
