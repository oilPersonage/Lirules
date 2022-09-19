import styles from './styles.scss';

interface INAME {
  props: boolean;
}

export function NAME({}: INAME) {
  return <div>text</div>;
}
