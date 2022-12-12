import {
  HStack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { resultAtom } from '../stores/atoms';

export const RuleResultSelector = () => {
  const [{ targetPattern, priority, timeout }, set] =
    useRecoilState(resultAtom);
  return (
    <HStack>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <NumberInput
          value={priority}
          min={0}
          onChange={(_str, num) => {
            set({
              targetPattern,
              priority: num,
              timeout,
            });
          }}
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
        <NumberInput
          value={targetPattern}
          min={0}
          onChange={(_str, num) => {
            set({
              priority,
              timeout,
              targetPattern: num,
            });
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Timeout (sec)</FormLabel>
        <NumberInput
          value={timeout ?? 0}
          placeholder='sec'
          onChange={(_str, num) => {
            set({
              priority,
              timeout: num,
              targetPattern,
            });
          }}
          min={0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </HStack>
  );
};