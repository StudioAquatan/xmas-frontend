import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Rule, useAllRules } from '../api';
import {
  ruleEditorModeAtom,
  ruleEditorOpenAtom,
  ruleIdAtom,
} from '../stores/atoms';
import {
  getEventText,
  getRangeText,
  getResultText,
  getSourceText,
} from '../stores/text';

export const RuleList = () => {
  const { data } = useAllRules();
  const ruleId = useRecoilValue(ruleIdAtom);
  const filteredRule = React.useMemo(() => {
    return data?.[ruleId.toString()] ?? [];
  }, [ruleId, data]);
  const setMode = useSetRecoilState(ruleEditorModeAtom);
  const setOpen = useSetRecoilState(ruleEditorOpenAtom);

  const handleEdit = (rule: Rule) => {
    setMode({ type: 'edit', rule });
    setOpen(true);
  };

  return filteredRule.length > 0 ? (
    <TableContainer>
      <Table variant='simple' size='sm'>
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Source</Th>
            <Th>Condition</Th>
            <Th>Result</Th>
            <Th>Op.</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRule.map((rule) => (
            <Tr key={rule.id}>
              <Td>{getEventText(rule)}</Td>
              <Td>{getSourceText(rule)}</Td>
              <Td>{getRangeText(rule)}</Td>
              <Td>{getResultText(rule)}</Td>
              <Td>
                <IconButton
                  variant='ghost'
                  aria-label='Edit'
                  onClick={() => handleEdit(rule)}
                  icon={<BsPencil />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <Text textAlign='center'>No rules</Text>
  );
};
