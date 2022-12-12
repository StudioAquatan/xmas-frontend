import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { BsPencil, BsUpload } from 'react-icons/bs';
import { useDeviceList } from '../api';

export const DeviceList = () => {
  const { data } = useDeviceList();
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Device ID</Th>
            <Th isNumeric>Rule</Th>
            <Th>Op.</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map(({ deviceId, ruleId }) => (
            <Tr key={deviceId}>
              <Td>{deviceId}</Td>
              <Td isNumeric>{ruleId}</Td>
              <Td>
                <IconButton
                  variant='ghost'
                  aria-label='Edit'
                  icon={<BsPencil />}
                />
                <IconButton
                  variant='ghost'
                  aria-label='OTA'
                  icon={<BsUpload />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
