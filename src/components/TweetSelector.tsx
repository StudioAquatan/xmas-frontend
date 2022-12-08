import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { extractTweetId } from '../lib/twitter';

export const TweetSelector = () => {
  const [url, setUrl] = React.useState('');
  const deferredUrl = React.useDeferredValue(url);
  const tweetId = React.useMemo(
    () => extractTweetId(deferredUrl),
    [deferredUrl]
  );
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(false);
  }, [tweetId]);
  return (
    <Box>
      <InputGroup>
        <Input
          placeholder='https://twitter.com/StudioAquatan/status/1600644073177505792'
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <InputRightElement>
          {tweetId && !loaded && <Spinner />}
        </InputRightElement>
      </InputGroup>
      {tweetId && (
        <TwitterTweetEmbed tweetId={tweetId} onLoad={() => setLoaded(true)} />
      )}
    </Box>
  );
};
