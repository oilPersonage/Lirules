export {};

declare global {
  interface Window {
    isAnimateParallax: boolean;
    scrollPosition: number;
    isAnimateScroll: boolean;
    activeNav: number;
    isHover: boolean; // hover on element and animate cursor dot
    animatedLandingBlock: null | HTMLDivElement; // hover on element and animate cursor dot
  }
}
