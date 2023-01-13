import Cross from '@icons/cross.svg';
import cn from 'classnames';

import styles from './styles.scss';

export function Popup({ children, isOpen, toggle }) {
  return isOpen ? (
    <div className={cn(styles.Popup, { [styles.Popup_open]: isOpen })}>
      <div className={styles.Popup__wrapper}>
        <div className={styles.Popup__cross}>
          <Cross onClick={() => toggle(false)} />
        </div>
        {children}
      </div>
    </div>
  ) : null;
}
