import { Parallax } from '@pages/landing/header/components/parallax';

import styles from './styles.scss';

export function LandingHeader() {
  return (
    <div className={styles.Header}>
      <Parallax />
    </div>
  );
}
