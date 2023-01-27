import { Parallax } from '@pages/landing/header/parallax';

import styles from './styles.scss';

export function LandingHeader() {
  return (
    <div className={styles.Header} id="header">
      <Parallax />
    </div>
  );
}
