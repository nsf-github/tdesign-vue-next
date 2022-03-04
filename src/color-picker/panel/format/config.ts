import { TdColorPickerProps } from '../../type';

interface Input {
  key: string;
  type: 'input';
  flex?: number;
}

interface InputNumber {
  key: string;
  min: number;
  max: number;
  type: 'inputNumber';
  flex?: number;
}

type FormatInputsConfig = {
  [propName in TdColorPickerProps['format']]?: Array<Input | InputNumber>;
};

export const FORMAT_INPUT_CONFIG: FormatInputsConfig = {
  RGB: [
    {
      key: 'r',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
    {
      key: 'g',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
    {
      key: 'b',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
  ],
  HSV: [
    {
      key: 'h',
      min: 0,
      max: 360,
      type: 'inputNumber',
    },
    {
      key: 's',
      min: 0,
      max: 100,
      type: 'inputNumber',
    },
    {
      key: 'v',
      min: 0,
      max: 100,
      type: 'inputNumber',
    },
  ],
  HSL: [
    {
      key: 'h',
      min: 0,
      max: 360,
      type: 'inputNumber',
    },
    {
      key: 's',
      min: 0,
      max: 100,
      type: 'inputNumber',
    },
    {
      key: 'l',
      min: 0,
      max: 100,
      type: 'inputNumber',
    },
  ],
  CMYK: [
    {
      key: 'c',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
    {
      key: 'm',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
    {
      key: 'y',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
    {
      key: 'k',
      min: 0,
      max: 255,
      type: 'inputNumber',
    },
  ],
  CSS: [
    {
      key: 'css',
      type: 'input',
      flex: 3,
    },
  ],
  HEX: [
    {
      key: 'hex',
      type: 'input',
      flex: 3,
    },
  ],
};
