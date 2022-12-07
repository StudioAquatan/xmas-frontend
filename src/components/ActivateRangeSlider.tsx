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
  onChange: (range: [number, number]) => unknown;
  value: [number, number];
  min?: number;
  max?: number;
}

export const ActivateRangeSlider = ({
  onChange,
  value: [low, high],
  min = 0,
  max = 150,
}: Props) => {
  const [hasLowValue, setHasLow] = React.useState(true);
  const [hasHighValue, setHasHigh] = React.useState(true);
  return (
    <Flex gap={4}>
      <Checkbox
        isChecked={hasLowValue}
        onChange={(e) => {
          setHasLow(e.target.checked);
          onChange([min, hasHighValue ? high : max]);
        }}
      >
        <Text minW='7'>{hasLowValue && low.toString()}</Text>
      </Checkbox>
      <RangeSlider
        defaultValue={[10, 30]}
        min={0}
        max={150}
        value={[hasLowValue ? low : min, hasHighValue ? high : max]}
        onChange={([l, h]) =>
          onChange([hasLowValue ? l : min, hasHighValue ? h : max])
        }
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        {hasLowValue && <RangeSliderThumb boxSize={6} index={0} />}
        {hasHighValue && <RangeSliderThumb boxSize={6} index={1} />}
      </RangeSlider>
      <Checkbox
        isChecked={hasHighValue}
        onChange={(e) => {
          setHasHigh(e.target.checked);
          onChange([hasLowValue ? low : min, max]);
        }}
      >
        <Text minW='7'>{hasHighValue && high.toString()}</Text>
      </Checkbox>
    </Flex>
  );
};
