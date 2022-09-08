import { useState } from 'react';

import { useParallax } from '@hooks/useParallax';

import { Menu } from '@pages/landing/header/components/menu';
import { Parallax } from '@pages/landing/header/components/parallax';

import styles from './styles.scss';

export function LandingHeader() {
  const [isHover, setIsHover] = useState(false);

  const { mouseMove, pos, mousePos } = useParallax();

  return (
    <div className={styles.Header} onMouseMove={mouseMove} onTouchMove={mouseMove}>
      <Menu setIsHover={setIsHover} />
      <Parallax setIsHover={setIsHover} pos={pos} mousePos={mousePos} isHover={isHover} />
    </div>
  );
}
