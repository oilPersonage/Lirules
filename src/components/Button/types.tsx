import { ReactElement } from 'react';

export type ButtonSize = 'md' | 'lg' | 'sm';
export type ButtonType = 'link' | 'accent' | 'outline';

export interface IButton {
  size?: ButtonSize;
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  isLoaded?: boolean;
  uppercase?: boolean;
  animateConfig?: any;
  theme?: 'dark' | 'light';
}
