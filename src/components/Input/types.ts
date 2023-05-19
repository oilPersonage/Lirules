import { HTMLInputTypeAttribute } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export type onChangeInputProps = { name: string; value?: string };

export type onChangeType = ({ name, value }: onChangeInputProps) => void;

export type InputProps = {
  notification?: string;
  theme?: 'white' | 'dark';
  value?: string;
  placeholder?: string;
  required?: boolean;
  inputSize?: InputSize;
  label?: string;
  name: string;
  onChange: onChangeType;
  onBlur?: (name?: string) => void;
  errorText?: string;
  regExp?: RegExp;
  isPhone?: boolean;
  type?: HTMLInputTypeAttribute;
  isValid?: boolean;
};
