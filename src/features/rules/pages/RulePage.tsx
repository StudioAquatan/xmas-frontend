import React from 'react';
import { RecoilRoot } from 'recoil';
import { RuleIdSelector } from '../components/RuleIdSelector';
import { RuleModal } from '../components/RuleModal';

export const RulePage = () => {
  return (
    <RecoilRoot>
      <RuleIdSelector />
      <RuleModal />
    </RecoilRoot>
  );
};
