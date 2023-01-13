export {};

declare global {
  interface Window {
    isAnimateParallax: boolean;
    scrollPosition: number;
    isAnimateScroll: boolean;
    activeNav: number;
  }
}
