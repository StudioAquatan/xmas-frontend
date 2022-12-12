import {
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
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { addRule, editRule } from '../api';
import {
  ruleEditorModeAtom,
  ruleEditorOpenAtom,
  ruleIdAtom,
} from '../stores/atoms';
import { ruleFinalizeSelector } from '../stores/finalize';
import { RuleEditor } from './RuleEditor';

const RuleModalFooter = () => {
  const rule = useRecoilValue(ruleFinalizeSelector);
  const mode = useRecoilValue(ruleEditorModeAtom);
  const ruleId = useRecoilValue(ruleIdAtom);
  const [, setOpen] = useRecoilState(ruleEditorOpenAtom);
  const handleSubmit = async () => {
    if (mode.type === 'add') {
      await addRule({
        ...rule,
        ruleId,
      });
    } else {
      await editRule({
        ...mode.rule,
        ...rule,
      });
    }
    setOpen(false);
  };
  return (
    <ModalFooter>
      <Button colorScheme='green' mr={3} onClick={handleSubmit}>
        Save
      </Button>
      <Button variant='ghost' onClick={() => setOpen(false)}>
        Cancel
      </Button>
    </ModalFooter>
  );
};

export const RuleModal = () => {
  const resetRule = useResetRecoilState(ruleFinalizeSelector);
  const [isOpen, setOpen] = useRecoilState(ruleEditorOpenAtom);
  const mode = useRecoilValue(ruleEditorModeAtom);
  const ruleId = useRecoilValue(ruleIdAtom);

  const handleClose = () => {
    setOpen(false);
    resetRule();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        {mode.type === 'add' ? (
          <ModalHeader>Add new rule for #{ruleId}</ModalHeader>
        ) : (
          <ModalHeader>Editing rule of #{ruleId}</ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>
          <RuleEditor />
        </ModalBody>
        <RuleModalFooter />
      </ModalContent>
    </Modal>
  );
};
