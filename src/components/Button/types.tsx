import { MouseEvent, ReactElement } from 'react';

export type ButtonSize = 'md' | 'lg' | 'sm';
export type ButtonType = 'link' | 'accent' | 'outline';

export interface IButton {
  size?: ButtonSize;
  type?: ButtonType;
  children: ReactElement | string;
  onClick?: (event: MouseEvent) => void;
}
