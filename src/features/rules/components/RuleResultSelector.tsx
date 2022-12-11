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
  const [{ targetPattern, priority }, set] = useRecoilState(resultAtom);
  return (
    <HStack>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <NumberInput
          inlineSize={20}
          value={priority}
          onChange={(_str, num) => {
            set({
              targetPattern,
              priority: num,
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
          inlineSize={20}
          value={targetPattern}
          onChange={(_str, num) => {
            set({
              priority,
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
    </HStack>
  );
};
