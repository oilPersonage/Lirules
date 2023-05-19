import { useCallback, useMemo } from 'react';

import { Input } from '@components/Input';
import { onChangeInputProps } from '@components/Input/types';

import { TUSER } from '@pages/guide/login/loginWrapper';

type TUseRenderInputsProps<T> = {
  inputsData: T;
  onChange: any;
};

export function useRenderInputs({
  inputsData,
  onChange: onChangeProps,
}: TUseRenderInputsProps<TUSER>) {
  const onChange = useCallback(
    ({ name, value }: onChangeInputProps) => {
      onChangeProps((state) => ({
        ...state,
        [name]: { ...state[name], value, isValid: state[name].check(value) },
      }));
    },
    [onChangeProps]
  );

  return useMemo(() => {
    return Object.keys(inputsData).map((el, index) => {
      const input = inputsData[el];
      return (
        <Input
          key={index}
          onChange={onChange}
          theme="white"
          name={el}
          isValid={input.isValid}
          value={input.value}
          label={input.title}
          type={input.type || 'text'}
          required
        />
      );
    });
  }, [inputsData, onChange]);
}
