import cn from 'classnames';
import { motion } from 'framer-motion';

import { ButtonSize, ButtonType, IButton } from '@components/Button/types';

import { isNotNil } from '@utils/typeguard';

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

export function Button({
  size = 'lg',
  children,
  type = 'link',
  onClick,
  isLoading,
  isLoaded,
  animateConfig,
  className,
  theme = 'dark',
  uppercase,
}: IButton) {
  function onClickHandler() {
    if (!isLoading && isNotNil(onClick)) onClick();
  }

  function getClassName() {
    return cn(
      className,
      styles.Button,
      `styles.Button__${theme}`,
      classTypes[type],
      classSizes[size],
      {
        [styles.Button__isLoading]: isLoading,
        [styles.Button__isLoaded]: isLoaded,
        [styles.Button__uppercase]: uppercase,
      }
    );
  }

  if (animateConfig) {
    return (
      <motion.button className={getClassName()} onClick={onClickHandler} {...animateConfig}>
        <div className={styles.Button__isLoaded} />
        <div className={styles.Button__isLoading} />
        <span className={className}>{children}</span>
      </motion.button>
    );
  }

  return (
    <button
      className={cn(styles.Button, classTypes[type], classSizes[size], {
        [styles.Button__isLoading]: isLoading,
        [styles.Button__isLoaded]: isLoaded,
        [styles.Button__uppercase]: uppercase,
      })}
      onClick={onClickHandler}
    >
      <div className={styles.Button__isLoaded} />
      <div className={styles.Button__isLoading} />
      <span>{children}</span>
    </button>
  );
}
