import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { updatePattern, updateRuleId, useDeviceList } from '../api';
import { deviceEditModalAtom } from '../stores/atom';

export const DeviceEditModal = () => {
  const resetModal = useResetRecoilState(deviceEditModalAtom);
  const { deviceId, isOpen } = useRecoilValue(deviceEditModalAtom);
  const { data } = useDeviceList();
  const [ruleId, setRuleId] = React.useState(0);
  const [patternId, setPatternId] = React.useState(0);
  const toast = useToast();

  const handleClose = () => {
    resetModal();
  };

  React.useEffect(() => {
    setRuleId(
      Math.max(
        data!.find(({ deviceId: id }) => id === deviceId)?.ruleId ?? 0,
        0
      )
    );
  }, [deviceId]);

  const handleSubmit = async () => {
    try {
      await updateRuleId(deviceId, ruleId);
      toast({ title: 'Success', status: 'success' });
      resetModal();
    } catch (e) {
      toast({ title: 'Failed', description: e.message, status: 'error' });
    }
  };

  const handlePattern = async () => {
    try {
      await updatePattern(deviceId, patternId);
      toast({ title: 'Success', status: 'success' });
    } catch (e) {
      toast({ title: 'Failed', description: e.message, status: 'error' });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editing {deviceId}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Rule ID</FormLabel>
            <NumberInput
              value={ruleId}
              onChange={(_str, num) => setRuleId(num)}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>Pattern</FormLabel>
            <HStack>
              <NumberInput
                value={patternId}
                onChange={(_str, num) => setPatternId(num)}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button onClick={handlePattern}>Apply</Button>
            </HStack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='green' mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button variant='ghost' onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
