export type LandingState = {
  activeNav: number;
  isHover: boolean;
  isStartAnimation: boolean;
  setSpeed?: (number, boolean) => void;
  landingMouseRef?: HTMLElement;
};
