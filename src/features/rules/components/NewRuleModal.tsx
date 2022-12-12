import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot, useRecoilValue, useResetRecoilState } from 'recoil';
import { addRule } from '../api';
import { ruleFinalizeSelector } from '../stores/finalize';
import { RuleEditor } from './RuleEditor';

interface Props {
  ruleId: number;
}

const RuleModalFooter = ({
  onClose,
  ruleId,
}: { onClose: () => unknown } & Props) => {
  const rule = useRecoilValue(ruleFinalizeSelector);
  const handleAdd = async () => {
    await addRule({
      ...rule,
      ruleId,
    });
    onClose();
  };
  return (
    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={handleAdd}>
        Add
      </Button>
      <Button variant='ghost' onClick={onClose}>
        Cancel
      </Button>
    </ModalFooter>
  );
};

const NewRuleModalInner = ({ ruleId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const resetRule = useResetRecoilState(ruleFinalizeSelector);
  const handleClose = () => {
    onClose();
    resetRule();
  };
  return (
    <>
      <Button onClick={onOpen}>Add Rule</Button>

      <Modal isOpen={isOpen} onClose={handleClose} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new rule for #{ruleId}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RuleEditor />
          </ModalBody>
          <RuleModalFooter onClose={handleClose} ruleId={ruleId} />
        </ModalContent>
      </Modal>
    </>
  );
};

export const NewRuleModal = ({ ruleId }: Props) => {
  return (
    <RecoilRoot>
      <NewRuleModalInner ruleId={ruleId} />
    </RecoilRoot>
  );
};
