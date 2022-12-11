import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Rule } from '../api';
import {
  RuleEventPanel,
  RuleRangePanel,
  RuleResultPanel,
  RuleSourcePanel,
} from './Panels';

interface Props {
  value?: Omit<Rule, 'id'>;
  onChange?: (rule: Omit<Rule, 'id'>) => unknown;
}

export const RuleEditor = ({ value, onChange }: Props) => {
  return (
    <RecoilRoot>
      <Accordion>
        <RuleEventPanel />
        <RuleSourcePanel />
        <RuleRangePanel />
        <RuleResultPanel />
      </Accordion>
    </RecoilRoot>
  );
};
