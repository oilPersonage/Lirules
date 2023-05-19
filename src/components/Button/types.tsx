export type ButtonSize = 'md' | 'lg' | 'sm';
export type ButtonType = 'link' | 'accent' | 'outline';
export type ThemeType = 'light' | 'dark';

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
  notification?: string;
}
