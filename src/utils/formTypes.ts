import { Dispatch, FocusEventHandler, SetStateAction, SyntheticEvent } from 'react';

import { onChangeType } from '@components/Input/types';

import { Nullable, Undefinable } from '@utils/types';

// type CheckFnParams<T> = T;

// type WithStateParams = { state: any };

export type CheckFn = (value?: number | string) => Undefinable<string>;

export type RequiredField = {
  name: string;
  checkFn?: CheckFn;
};

type Record = { [index: string]: string | undefined };

export type State = { record?: Record; error?: Record };

export type EditValue<T = unknown> = {
  name: string;
  value?: T;
  onlyCheck?: boolean;
};

type OnChangeParams<T = unknown> = {
  value?: T;
  state: State;
};

export type UseFormProps<T = unknown> = {
  record?: Record;
  fields?: string[];
  checks?: RequiredField[];
  onConfirm?: (value?: T) => void;
  onChange?: (params: OnChangeParams) => void;
};

export type UseFormResult<U = unknown> = {
  onChangeHandler: onChangeType;
  onBlurHandler?: (name?: string) => void;
  onConfirmHandler?: () => void;
  state: State['record'];
  notification: State['error'];
  setState?: Dispatch<SetStateAction<State>>;
  clearState?: () => void;
};
