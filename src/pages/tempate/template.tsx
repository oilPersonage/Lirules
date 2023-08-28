import styles from './styles.module.scss';

interface INAME {
  props: boolean;
}

export function NAME({}: INAME) {
  return <div>text</div>;
}
