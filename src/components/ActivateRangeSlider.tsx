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
  disabled?: boolean;
}

export const ActivateRangeSlider = ({
  onChange,
  value: [low, high],
  min = 0,
  max = 150,
  disabled,
}: Props) => {
  return (
    <Flex gap={4}>
      <Checkbox
        isChecked={low !== null}
        onChange={(e) => {
          onChange([e.target.checked ? min : null, high]);
        }}
        isDisabled={disabled}
      >
        <Text minW='7'>{low?.toString() ?? '-'}</Text>
      </Checkbox>
      <RangeSlider
        isDisabled={disabled}
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
        <RangeSliderThumb
          boxSize={4}
          index={0}
          visibility={low !== null ? 'visible' : 'hidden'}
        />
        <RangeSliderThumb
          boxSize={4}
          index={1}
          visibility={high !== null ? 'visible' : 'hidden'}
        />
      </RangeSlider>
      <Checkbox
        isChecked={high !== null}
        onChange={(e) => {
          onChange([low, e.target.checked ? max : null]);
        }}
        ml='3'
        isDisabled={disabled}
      >
        <Text minW='7'>{high?.toString() ?? '-'}</Text>
      </Checkbox>
    </Flex>
  );
};
