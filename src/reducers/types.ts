export type PayloadWithCallback<T = undefined> = {
  onSuccess?: (value?: T) => void;
};
