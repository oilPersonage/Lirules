import cn from 'classnames';

import { ButtonSize, ButtonType, IButton } from '@components/Button/types';

import styles from './styles.scss';

const classSizes: Record<ButtonSize, string> = {
  lg: styles.Button__lg,
  md: styles.Button__md,
  sm: styles.Button__sm,
};

const classTypes: Record<ButtonType, string> = {
  link: styles.Button__link,
  accent: styles.Button__accent,
  outline: styles.Button__outline,
};

export function Button({ size = 'lg', children, type = 'link', onClick }: IButton) {
  return (
    <div className={cn(styles.Button, classTypes[type], classSizes[size])} onClick={onClick}>
      {children}
    </div>
  );
}
