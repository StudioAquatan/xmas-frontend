import {
  FormControl,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  HStack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ActivateRangeSlider } from '../../../components/ActivateRangeSlider';

interface PartialRule {
  minFav: number | null;
  maxFav: number | null;
  minRetweet: number | null;
  maxRetweet: number | null;
  minReply: number | null;
  maxReply: number | null;
  minHashtag: number | null;
  maxHashtag: number | null;
  sumTarget: Array<'fav' | 'retweet' | 'reply' | 'hashtag'>;
  minSum: number | null;
  maxSum: number | null;
}
interface Props {
  onChange: (partialRule: PartialRule) => unknown;
  value: PartialRule;
  isDisabled?: boolean;
}

export const getRangeText = (rule: PartialRule) => {
  const hasRange = (min: number | null, max: number | null) => {
    return !(min === null && max === null);
  };
  const range = (min: number | null, max: number | null) => {
    if (!hasRange(min, max)) {
      return '-';
    } else {
      return `[${min ?? ''},${max ?? ''}]`;
    }
  };

  const chunks = [''];
  if (hasRange(rule.minFav, rule.maxFav)) {
    chunks.push(`Fav: ${range(rule.minFav, rule.maxFav)}`);
  }
  if (hasRange(rule.minRetweet, rule.maxRetweet)) {
    chunks.push(`RT: ${range(rule.minRetweet, rule.maxRetweet)}`);
  }
  if (hasRange(rule.minReply, rule.maxReply)) {
    chunks.push(`Rp: ${range(rule.minReply, rule.maxReply)}`);
  }
  if (hasRange(rule.minHashtag, rule.maxHashtag)) {
    chunks.push(`#: ${range(rule.minHashtag, rule.maxHashtag)}`);
  }
  if (rule.sumTarget.length > 0) {
    const map: Record<'fav' | 'retweet' | 'reply' | 'hashtag', string> = {
      fav: 'F',
      retweet: 'RT',
      reply: 'Rp',
      hashtag: '#',
    };
    chunks.push(
      `${rule.sumTarget.map((t) => map[t]).join('+')}: ${range(
        rule.minSum,
        rule.maxSum
      )}`
    );
  }
  if (chunks.length === 1) {
    chunks.push('N/A');
  }
  return chunks.join(' ');
};

export const RuleRangeSelector = ({ onChange, value, isDisabled }: Props) => {
  return (
    <VStack spacing={3} align='stretch'>
      <FormControl>
        <FormLabel>Likes</FormLabel>
        <ActivateRangeSlider
          disabled={isDisabled}
          value={[value.minFav, value.maxFav]}
          onChange={([min, max]) =>
            onChange({
              ...value,
              minFav: min,
              maxFav: max,
            })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Retweets</FormLabel>
        <ActivateRangeSlider
          value={[value.minRetweet, value.maxRetweet]}
          disabled={isDisabled}
          onChange={([min, max]) =>
            onChange({
              ...value,
              minRetweet: min,
              maxRetweet: max,
            })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reply</FormLabel>
        <ActivateRangeSlider
          value={[value.minReply, value.maxReply]}
          disabled={isDisabled}
          onChange={([min, max]) =>
            onChange({
              ...value,
              minReply: min,
              maxReply: max,
            })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Sum</FormLabel>
        <CheckboxGroup
          value={value.sumTarget}
          isDisabled={isDisabled}
          onChange={(target) =>
            onChange({
              ...value,
              sumTarget: target as PartialRule['sumTarget'],
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
          disabled={value.sumTarget.length === 0 || isDisabled}
          value={[value.minSum, value.maxSum]}
          onChange={([min, max]) =>
            onChange({
              ...value,
              minSum: min,
              maxSum: max,
            })
          }
        />
      </FormControl>
    </VStack>
  );
};
