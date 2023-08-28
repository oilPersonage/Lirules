import cn from 'classnames';

import { InternalText, InternalTextProps } from '@components/Title/Title';

import styles from './styles.module.scss';

export type InternalTextType = typeof InternalText;

interface Heading extends InternalTextType {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
}

export const Heading: Heading = InternalText as Heading;

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

function H1({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H1, className)} {...props} tag="h1" />;
}

function H2({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H2, className)} {...props} tag="h2" />;
}

function H3({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H3, className)} {...props} tag="h3" />;
}

function H4({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H4, className)} {...props} tag="h4" />;
}

function H5({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H5, className)} {...props} tag="h5" />;
}

function H6({ className, ...props }: InternalTextProps) {
  return <InternalText className={cn(styles.H6, className)} {...props} tag="h6" />;
}
