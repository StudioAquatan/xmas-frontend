import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { RuleEventPanel, RuleRangePanel, RuleSourcePanel } from './Panels';

export const RuleEditor = () => {
  return (
    <RecoilRoot>
      <Accordion>
        <RuleEventPanel />
        <RuleSourcePanel />
        <RuleRangePanel />
        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Result
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <HStack>
              <FormControl>
                <FormLabel>Priority</FormLabel>
                <NumberInput inlineSize={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Pattern</FormLabel>
                <NumberInput inlineSize={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </RecoilRoot>
  );
};
