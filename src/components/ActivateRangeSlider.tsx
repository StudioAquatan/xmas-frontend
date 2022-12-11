import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  onChange: (range: [number | null, number | null]) => unknown;
  value: [number | null, number | null];
  min?: number;
  max?: number;
}

export const ActivateRangeSlider = ({
  onChange,
  value: [low, high],
  min = 0,
  max = 150,
}: Props) => {
  return (
    <Flex gap={4}>
      <Checkbox
        isChecked={low !== null}
        onChange={(e) => {
          onChange([e.target.checked ? min : null, high]);
        }}
      >
        <Text minW='7'>{low?.toString()}</Text>
      </Checkbox>
      <RangeSlider
        defaultValue={[10, 30]}
        min={0}
        max={150}
        value={[low ?? min, high ?? max]}
        onChange={([l, h]) =>
          onChange([low === null ? null : l, high === null ? null : h])
        }
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        {low !== null && <RangeSliderThumb boxSize={6} index={0} />}
        {high !== null && <RangeSliderThumb boxSize={6} index={1} />}
      </RangeSlider>
      <Checkbox
        isChecked={high !== null}
        onChange={(e) => {
          onChange([low, e.target.checked ? max : null]);
        }}
      >
        <Text minW='7'>{high?.toString()}</Text>
      </Checkbox>
    </Flex>
  );
};
