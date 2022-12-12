import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { ruleIdAtom } from '../stores/atoms';

export const RuleIdSelector = () => {
  const [ruleId, setRuleId] = useRecoilState(ruleIdAtom);
  return (
    <FormControl>
      <FormLabel>Rule #</FormLabel>
      <NumberInput
        value={ruleId}
        min={0}
        onChange={(_str, num) => {
          setRuleId(num);
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
