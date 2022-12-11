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
import { Rule } from '../api';
import { getEventText, RuleEventSelector } from './RuleEventSelector';
import { getRangeText, RuleRangeSelector } from './RuleRangeSelector';
import { RuleSumSelector } from './RuleSumSelector';

type EditableRule = Omit<Rule, 'id' | 'ruleId'>;
export const RuleEditor = () => {
  const [rule, setRule] = React.useState<EditableRule>({
    minFav: null,
    maxFav: null,
    minRetweet: null,
    maxRetweet: null,
    minReply: null,
    maxReply: null,
    minHashtag: null,
    maxHashtag: null,
    sumTarget: [],
    minSum: null,
    maxSum: null,
    event: 'none',
    eventHashtags: [],
    eventTweets: [],
    collectHashtags: [],
    collectTweets: [],
    targetPattern: 0,
    priority: 0,
    timeout: 0,
  });

  const handleRuleUpdate = (partial: Partial<EditableRule>) => {
    setRule({ ...rule, ...partial });
  };

  return (
    <Accordion>
      <AccordionItem>
        <h3>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Events - {getEventText(rule)}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h3>
        <AccordionPanel pb={1}>
          <RuleEventSelector value={rule} onChange={handleRuleUpdate} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Data Source
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h3>
        <AccordionPanel pb={4}>
          <RuleSumSelector value={rule} onChange={handleRuleUpdate} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Condition - {getRangeText(rule)}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h3>
        <AccordionPanel pb={4}>
          <RuleRangeSelector value={rule} onChange={handleRuleUpdate} />
        </AccordionPanel>
      </AccordionItem>
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
  );
};
