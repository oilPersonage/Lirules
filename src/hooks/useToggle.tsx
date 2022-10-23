import { useCallback, useState } from 'react';

type IUseToggle = { isOpen: boolean; toggle: () => void };

export function useToggle(value?: boolean): IUseToggle {
  const [state, setState] = useState(value || false);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return { isOpen: state, toggle };
}
