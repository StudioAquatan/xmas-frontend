import {
  FormControl,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  HStack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { ActivateRangeSlider } from '../../../components/ActivateRangeSlider';
import {
  favRangeSelectorAtom,
  replyRangeSelectorAtom,
  retweetRangeSelectorAtom,
  sumRangeSelectorAtom,
  sumTypeSelectorAtom,
} from '../stores/atoms';

const FavSlider = () => {
  const [{ minFav, maxFav }, set] = useRecoilState(favRangeSelectorAtom);
  return (
    <FormControl>
      <FormLabel>Likes</FormLabel>
      <ActivateRangeSlider
        value={[minFav, maxFav]}
        onChange={([min, max]) =>
          set({
            minFav: min,
            maxFav: max,
          })
        }
      />
    </FormControl>
  );
};

const RetweetSlider = () => {
  const [{ minRetweet, maxRetweet }, set] = useRecoilState(
    retweetRangeSelectorAtom
  );
  return (
    <FormControl>
      <FormLabel>Retweets</FormLabel>
      <ActivateRangeSlider
        value={[minRetweet, maxRetweet]}
        onChange={([min, max]) =>
          set({
            minRetweet: min,
            maxRetweet: max,
          })
        }
      />
    </FormControl>
  );
};

const ReplySlider = () => {
  const [{ minReply, maxReply }, set] = useRecoilState(replyRangeSelectorAtom);
  return (
    <FormControl>
      <FormLabel>Reply</FormLabel>
      <ActivateRangeSlider
        value={[minReply, maxReply]}
        onChange={([min, max]) =>
          set({
            minReply: min,
            maxReply: max,
          })
        }
      />
    </FormControl>
  );
};

const SumSlider = () => {
  const [{ minSum, maxSum }, set] = useRecoilState(sumRangeSelectorAtom);
  const [{ sumTarget }, setType] = useRecoilState(sumTypeSelectorAtom);
  return (
    <FormControl>
      <FormLabel>Sum</FormLabel>
      <CheckboxGroup
        value={sumTarget}
        onChange={(target) =>
          setType({
            sumTarget: target as typeof sumTarget,
          })
        }
      >
        <HStack spacing={3}>
          <Checkbox value='fav'>Like</Checkbox>
          <Checkbox value='retweet'>Retweet</Checkbox>
          <Checkbox value='reply'>Reply</Checkbox>
          <Checkbox value='hashtag'>Hashtag</Checkbox>
        </HStack>
      </CheckboxGroup>
      <ActivateRangeSlider
        disabled={sumTarget.length === 0}
        value={[minSum, maxSum]}
        onChange={([min, max]) =>
          set({
            minSum: min,
            maxSum: max,
          })
        }
      />
    </FormControl>
  );
};
export const RuleRangeSelector = () => {
  return (
    <VStack spacing={3} align='stretch'>
      <FavSlider />
      <RetweetSlider />
      <ReplySlider />
      <SumSlider />
    </VStack>
  );
};
