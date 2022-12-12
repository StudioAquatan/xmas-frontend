import React from 'react';
import { RecoilRoot } from 'recoil';
import { RuleModal } from '../components/RuleModal';
export const RulePage = () => {
  return (
    <RecoilRoot>
      <RuleModal />
    </RecoilRoot>
  );
};
