import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  eventTextSelector,
  rangeTextSelector,
  sourceTextSelector,
} from '../stores/text';
import { RuleDataSourceSelector } from './RuleDataSourceSelector';
import { RuleEventSelector } from './RuleEventSelector';
import { RuleRangeSelector } from './RuleRangeSelector';

const RuleEventHeader = () => {
  const eventText = useRecoilValue(eventTextSelector);
  return (
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Events - {eventText}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
  );
};

export const RuleEventPanel = () => {
  return (
    <AccordionItem>
      <RuleEventHeader />
      <AccordionPanel pb={1}>
        <RuleEventSelector />
      </AccordionPanel>
    </AccordionItem>
  );
};

const RuleSourceHeader = () => {
  const sourceText = useRecoilValue(sourceTextSelector);
  return (
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Data Source - {sourceText}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
  );
};
export const RuleSourcePanel = () => {
  return (
    <AccordionItem>
      <RuleSourceHeader />
      <AccordionPanel pb={4}>
        <RuleDataSourceSelector />
      </AccordionPanel>
    </AccordionItem>
  );
};

const RuleRangeHeader = () => {
  const rangeText = useRecoilValue(rangeTextSelector);
  return (
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Condition - {rangeText}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
  );
};
export const RuleRangePanel = () => {
  return (
    <AccordionItem>
      <RuleRangeHeader />
      <AccordionPanel pb={4}>
        <RuleRangeSelector />
      </AccordionPanel>
    </AccordionItem>
  );
};
