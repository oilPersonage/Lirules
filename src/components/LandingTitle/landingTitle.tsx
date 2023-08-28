import cn from 'classnames';

import styles from './styles.module.scss';

type Title = { title: string; colorText?: string; className?: string; space?: boolean };

export function LandingTitle({ title, colorText, className, space }: Title) {
  return (
    <h2 className={cn(styles.LandingTitle, className)}>
      {title}
      <span>
        {space ? ' ' : null}
        {colorText}
      </span>
    </h2>
  );
}
