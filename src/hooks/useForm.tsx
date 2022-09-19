import { useCallback, useEffect, useState } from 'react';

import { onChangeInputProps } from '@components/Input/types';

import { RequiredField, State, UseFormProps, UseFormResult } from '@utils/formTypes';
import { isNotNil } from '@utils/typeguard';

const defaultState = { record: undefined, errors: undefined };

export function useForm({ record, checks, onConfirm }: UseFormProps): UseFormResult {
  const [state, setState] = useState<State>(defaultState);

  const onChangeHandler = useCallback(({ name, value }: onChangeInputProps) => {
    if (name) {
      setState((prev) => ({
        ...prev,
        record: {
          ...prev.record,
          [name]: value,
        },
      }));
    }
  }, []);

  const checkValues = useCallback(
    (params?: RequiredField[], inputName?: string): boolean => {
      // for onConfirm
      let isValid = true;
      if (inputName) {
        const findCheck = params?.find((p) => p.name === inputName)?.checkFn;

        if (findCheck) {
          // for onConfirm
          isValid = !isNotNil(findCheck(state?.record?.[inputName]));

          setState((prev) => ({
            ...prev,
            error: {
              ...prev.error,
              [inputName]: findCheck(prev?.record?.[inputName]),
            },
          }));
        }
      } else {
        params?.forEach(({ checkFn, name }) => {
          if (checkFn) {
            const findCheck = checkFn(state?.record?.[name]);

            // for onConfirm
            isValid = !isNotNil(findCheck);

            setState((prev) => ({
              ...prev,
              error: {
                ...prev.error,
                [name]: findCheck,
              },
            }));
          }
        });
      }
      return isValid;
    },
    [checks, state]
  );

  const onBlurHandler = useCallback(
    (name?: string) => {
      checkValues(checks, name);
    },
    [checks, checkValues]
  );

  const clearState = useCallback(() => {
    setState(defaultState);
  }, []);

  const onConfirmHandler = useCallback(() => {
    const isValid = checkValues(checks);
    if (onConfirm && isValid) {
      onConfirm(state.record);
    }
  }, [checkValues, checks, onConfirm, state]);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, record }));
  }, [record]);

  return {
    onChangeHandler,
    onBlurHandler,
    onConfirmHandler,
    state: state.record,
    notification: state.error,
    setState,
    clearState,
  };
}
