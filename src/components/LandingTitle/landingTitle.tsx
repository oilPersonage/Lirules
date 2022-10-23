import cn from 'classnames';

import styles from './styles.scss';

type Title = { title: string; colorText?: string; className?: string };

export function LandingTitle({ title, colorText, className }: Title) {
  return (
    <h2 className={cn(styles.LandingTitle, className)}>
      {title}
      <span>{colorText}</span>
    </h2>
  );
}
