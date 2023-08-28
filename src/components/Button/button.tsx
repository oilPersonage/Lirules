import cn from 'classnames';
import { motion } from 'framer-motion';

import { ButtonSize, ButtonType, IButton, ThemeType } from '@components/Button/types';

import { isNotNil } from '@utils/typeguard';

import styles from './styles.module.scss';

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

const classThemes: Record<ThemeType, string> = {
  light: styles.Button__light,
  dark: styles.Button__dark,
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
  notification,
}: IButton) {
  function onClickHandler() {
    if (!isLoading && isNotNil(onClick)) onClick();
  }

  function getClassName() {
    return cn(className, styles.Button, classTypes[type], classThemes[theme], classSizes[size], {
      [styles.Button__isLoading]: isLoading,
      [styles.Button__isLoaded]: isLoaded,
      [styles.Button__uppercase]: uppercase,
    });
  }

  if (animateConfig) {
    return (
      <motion.button className={getClassName()} onClick={onClickHandler} {...animateConfig}>
        {notification && <div className={styles.Button__notification}>{notification}</div>}
        <span className={className}>{children}</span>
      </motion.button>
    );
  }

  return (
    <button className={getClassName()} onClick={onClickHandler}>
      {notification && <div className={styles.Button__notification}>{notification}</div>}
      <span>{children}</span>
    </button>
  );
}
