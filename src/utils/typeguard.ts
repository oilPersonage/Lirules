export function isNotNil<T>(value: T): value is Exclude<T, undefined | null> {
  return value !== undefined && value !== null;
}

export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined;
}

export type DispatchState = React.Dispatch<React.SetStateAction<string | undefined>>;
