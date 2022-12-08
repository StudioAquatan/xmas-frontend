import {
  Button,
  Checkbox,
  CheckboxGroup,
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

interface Props {
  onSelect?: (tweetIds: string[]) => unknown;
}

export const TweetList = ({ onSelect }: Props) => {
  const { data } = useTweetMonitors();

  return (
    <TableContainer>
      <CheckboxGroup onChange={onSelect}>
        <Table>
          <Thead>
            <Tr>
              <Th>Tweet ID</Th>
              <Th isNumeric>Likes</Th>
              <Th isNumeric>Retweets</Th>
              <Th isNumeric>Reply</Th>
              <Th>Op.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(({ tweetId, favCount, retweetCount, replyCount }) => (
              <Tr key={tweetId}>
                <Td>
                  <Checkbox value={tweetId}>
                    <Link
                      href={`https://twitter.com/jack/status/${tweetId}`}
                      isExternal
                    >
                      {tweetId}
                    </Link>
                  </Checkbox>
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
      </CheckboxGroup>
    </TableContainer>
  );
};
