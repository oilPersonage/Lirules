import { ForwardedRef, forwardRef, RefObject } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

interface IRef {
  children?: JSX.Element | JSX.Element[];
  column?: boolean;
}

export const Row = forwardRef(({ children, column }: IRef, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cn(styles.Row, { [styles.Row_column]: column })} ref={ref}>
      {children}
    </div>
  );
});
