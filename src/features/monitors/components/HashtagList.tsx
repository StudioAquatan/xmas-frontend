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
import { useHashtagMonitors } from '..';

interface Props {
  onSelect?: (hashtagIds: number[]) => unknown;
  onDelete?: (hashtagId: number) => unknown;
  hashtagIds?: number[];
}

export const HashtagList = ({ onSelect, onDelete, hashtagIds }: Props) => {
  const { data } = useHashtagMonitors();

  const handleOnChange = (ids: string[]) => {
    if (onSelect) onSelect(ids.map((i) => Number(i)));
  };

  return (
    <TableContainer>
      <CheckboxGroup
        onChange={handleOnChange}
        value={hashtagIds?.map((i) => i.toString())}
      >
        <Table>
          <Thead>
            <Tr>
              <Th>Hashtag</Th>
              <Th isNumeric>Count</Th>
              {onDelete && <Th>Op.</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(({ id, hashtag, count }) => (
              <Tr key={id}>
                <Td>
                  <Checkbox value={id.toString()}>
                    <Link
                      href={`https://twitter.com/hashtag/${hashtag}`}
                      isExternal
                    >
                      {hashtag}
                    </Link>
                  </Checkbox>
                </Td>
                <Td isNumeric>{count}</Td>
                {onDelete && (
                  <Td>
                    <Button
                      colorScheme='red'
                      size='sm'
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </Button>
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
