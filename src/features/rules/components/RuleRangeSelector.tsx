import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
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
  onChange?: (partialRule: PartialRule) => unknown;
  isDisabled?: boolean;
}

export const RuleRangeSelector = ({ onChange, isDisabled }: Props) => {
  const [rule, setRule] = React.useState<PartialRule>({
    minFav: null,
    maxFav: null,
    minRetweet: null,
    maxRetweet: null,
    minReply: null,
    maxReply: null,
    minHashtag: null,
    maxHashtag: null,
    sumTarget: [],
    minSum: null,
    maxSum: null,
  });
  React.useEffect(() => {
    onChange?.(rule);
  }, [rule]);
  return (
    <VStack spacing={3} align='stretch'>
      <Box>
        <Heading as='h4' size='md' mb={3}>
          Likes
        </Heading>
        <ActivateRangeSlider
          disabled={isDisabled}
          value={[rule.minFav, rule.maxFav]}
          onChange={([min, max]) =>
            setRule({
              ...rule,
              minFav: min,
              maxFav: max,
            })
          }
        />
      </Box>
      <Box>
        <Heading as='h4' size='md' mb={3}>
          Retweets
        </Heading>
        <ActivateRangeSlider
          value={[rule.minRetweet, rule.maxRetweet]}
          disabled={isDisabled}
          onChange={([min, max]) =>
            setRule({
              ...rule,
              minRetweet: min,
              maxRetweet: max,
            })
          }
        />
      </Box>
      <Box>
        <Heading as='h4' size='md' mb={3}>
          Reply
        </Heading>
        <ActivateRangeSlider
          value={[rule.minReply, rule.maxReply]}
          disabled={isDisabled}
          onChange={([min, max]) =>
            setRule({
              ...rule,
              minReply: min,
              maxReply: max,
            })
          }
        />
      </Box>
      <Box>
        <Heading as='h4' size='md' mb={3}>
          Sum
        </Heading>
        <CheckboxGroup
          value={rule.sumTarget}
          isDisabled={isDisabled}
          onChange={(target) =>
            setRule({
              ...rule,
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
          disabled={rule.sumTarget.length === 0 || isDisabled}
          value={[rule.minSum, rule.maxSum]}
          onChange={([min, max]) =>
            setRule({
              ...rule,
              minSum: min,
              maxSum: max,
            })
          }
        />
      </Box>
    </VStack>
  );
};
