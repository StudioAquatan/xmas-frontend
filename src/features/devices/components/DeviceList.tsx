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
import { useSetRecoilState } from 'recoil';
import { useDeviceList } from '../api';
import { deviceEditModalAtom } from '../stores/atom';

export const DeviceList = () => {
  const { data } = useDeviceList();
  const setEditModal = useSetRecoilState(deviceEditModalAtom);

  const handleEdit = (deviceId: string) => {
    setEditModal({
      isOpen: true,
      deviceId,
    });
  };
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
                  onClick={() => handleEdit(deviceId)}
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
