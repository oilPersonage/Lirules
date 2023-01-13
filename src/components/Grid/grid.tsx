import cn from 'classnames';

import styles from './styles.scss';

export function Row({
  children,
  column,
}: {
  children?: JSX.Element | JSX.Element[];
  column?: boolean;
}) {
  return <div className={cn(styles.Row, { [styles.Row_column]: column })}>{children}</div>;
}
