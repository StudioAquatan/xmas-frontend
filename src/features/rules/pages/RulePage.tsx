import { Button } from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { RuleIdSelector } from '../components/RuleIdSelector';
import { RuleModal } from '../components/RuleModal';
import { ruleEditorModeAtom, ruleEditorOpenAtom } from '../stores/atoms';

const RuleAddButton = () => {
  const setMode = useSetRecoilState(ruleEditorModeAtom);
  const setOpen = useSetRecoilState(ruleEditorOpenAtom);

  const handleAdd = () => {
    setMode({ type: 'add' });
    setOpen(true);
  };

  return (
    <Button colorScheme='green' onClick={handleAdd} my={3}>
      Add new rule
    </Button>
  );
};
export const RulePage = () => {
  return (
    <RecoilRoot>
      <RuleIdSelector />
      <RuleAddButton />
      <RuleModal />
    </RecoilRoot>
  );
};
