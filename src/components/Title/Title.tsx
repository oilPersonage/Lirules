import { CSSProperties, ReactNode } from 'react';

import styles from './styles.module.scss';

export type InternalTextProps = {
  /**
   * Контент
   */
  children: ReactNode;
  /**
   * html тег
   * @ignore
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /**
   * Дополнительный класс для компонента
   */
  className?: string;
  /**
   *
   */
  style?: CSSProperties;
};

export function InternalText({ className, children, tag, style }: InternalTextProps) {
  const TextTag = `${tag}` as keyof JSX.IntrinsicElements;
  return (
    <TextTag className={className} style={style}>
      {children}
    </TextTag>
  );
}
