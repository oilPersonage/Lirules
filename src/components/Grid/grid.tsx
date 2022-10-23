import styles from './styles.scss';

export function Row({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return <div className={styles.Row}>{children}</div>;
}
