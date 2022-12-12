import { Button } from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot, useResetRecoilState, useSetRecoilState } from 'recoil';
import { Loading } from '../../../components/Loading';
import { RuleIdSelector } from '../components/RuleIdSelector';
import { RuleList } from '../components/RuleList';
import { RuleModal } from '../components/RuleModal';
import { ruleEditorModeAtom, ruleEditorOpenAtom } from '../stores/atoms';
import { ruleFinalizeSelector } from '../stores/finalize';

const RuleAddButton = () => {
  const setMode = useSetRecoilState(ruleEditorModeAtom);
  const setOpen = useSetRecoilState(ruleEditorOpenAtom);
  const resetRule = useResetRecoilState(ruleFinalizeSelector);

  const handleAdd = () => {
    resetRule();
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
      <React.Suspense fallback={<Loading />}>
        <RuleList />
      </React.Suspense>
    </RecoilRoot>
  );
};
