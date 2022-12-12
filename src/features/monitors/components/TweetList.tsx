import {
  Checkbox,
  CheckboxGroup,
  IconButton,
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
import { BsTrash } from 'react-icons/bs';
import { useTweetMonitors } from '..';

interface Props {
  onSelect?: (tweetIds: string[]) => unknown;
  onDelete?: (tweetId: string) => unknown;
  tweetIds?: string[];
}

export const TweetList = ({ onSelect, onDelete, tweetIds }: Props) => {
  const { data } = useTweetMonitors();

  return (
    <TableContainer>
      <CheckboxGroup onChange={onSelect} value={tweetIds}>
        <Table>
          <Thead>
            <Tr>
              <Th>Tweet ID</Th>
              <Th isNumeric>Likes</Th>
              <Th isNumeric>Retweets</Th>
              <Th isNumeric>Reply</Th>
              {onDelete && <Th>Op.</Th>}
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
                {onDelete && (
                  <Td>
                    <IconButton
                      variant='ghost'
                      aria-label='Delete'
                      onClick={() => onDelete(tweetId)}
                      icon={<BsTrash />}
                    />
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CheckboxGroup>
    </TableContainer>
  );
};
