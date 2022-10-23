import { useState } from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing((show) => !show);
    window.isAnimateScroll = !window.isAnimateScroll;
  }

  return {
    isShowing,
    toggle,
  };
};
