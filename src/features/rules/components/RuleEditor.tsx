import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Rule } from '../api';
import { ruleFinalizeSelector } from '../stores/finalize';
import {
  RuleEventPanel,
  RuleRangePanel,
  RuleResultPanel,
  RuleSourcePanel,
} from './Panels';

interface Props {
  value?: Omit<Rule, 'id' | 'ruleId'>;
  onChange?: (rule: Omit<Rule, 'id' | 'ruleId'>) => unknown;
}

const Updater = ({ value, onChange }: Props) => {
  const [rule, setRule] = useRecoilState(ruleFinalizeSelector);
  React.useEffect(() => {
    if (value) setRule(value);
  }, []);
  React.useEffect(() => {
    onChange?.(rule);
  }, [rule]);

  return null;
};

export const RuleEditor = ({ value, onChange }: Props) => {
  return (
    <RecoilRoot>
      <Updater value={value} onChange={onChange} />
      <Accordion>
        <RuleEventPanel />
        <RuleSourcePanel />
        <RuleRangePanel />
        <RuleResultPanel />
      </Accordion>
    </RecoilRoot>
  );
};
