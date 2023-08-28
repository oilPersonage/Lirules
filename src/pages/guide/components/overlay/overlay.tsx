import { MutableRefObject, RefObject } from 'react';

import styles from './styles.module.scss';

type OverlayProps = {
  refs: MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
};

export function Overlay({ refs }: OverlayProps) {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Overlay__one} ref={(ref) => (refs.current.one = ref)} />
      <div className={styles.Overlay__two} ref={(ref) => (refs.current.two = ref)} />
      <div className={styles.Overlay__three} ref={(ref) => (refs.current.three = ref)} />
    </div>
  );
}
