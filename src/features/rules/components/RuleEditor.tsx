import { Accordion } from '@chakra-ui/react';
import React from 'react';
import {
  RuleEventPanel,
  RuleRangePanel,
  RuleResultPanel,
  RuleSourcePanel,
} from './Panels';

export const RuleEditor = () => {
  return (
    <Accordion>
      <RuleEventPanel />
      <RuleSourcePanel />
      <RuleRangePanel />
      <RuleResultPanel />
    </Accordion>
  );
};
