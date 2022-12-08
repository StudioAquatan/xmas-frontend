import {
  Button,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useTweetMonitors } from '..';

export const TweetList = () => {
  const { data } = useTweetMonitors();

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Th>Tweet ID</Th>
          <Th isNumeric>Likes</Th>
          <Th isNumeric>Retweets</Th>
          <Th isNumeric>Reply</Th>
          <Th>Op.</Th>
        </Thead>
        <Tbody>
          {data?.map(({ tweetId, favCount, retweetCount, replyCount }) => (
            <Tr key={tweetId}>
              <Td>
                <Link
                  href={`https://twitter.com/jack/status/${tweetId}`}
                  isExternal
                >
                  {tweetId}
                </Link>
              </Td>
              <Td isNumeric>{favCount}</Td>
              <Td isNumeric>{retweetCount}</Td>
              <Td isNumeric>{replyCount}</Td>
              <Td>
                <Button colorScheme='red' size='sm'>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
