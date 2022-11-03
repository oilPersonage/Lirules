import { useEffect, useRef } from 'react';

import { isNotNil } from '@utils/typeguard';

type AnimationFrame = {
  callback: () => void;
  isAnimate?: boolean;
};

export const useAnimationFrame = ({ callback, isAnimate = true }: AnimationFrame) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number | null>(null);

  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isAnimate) {
      requestRef.current = requestAnimationFrame(animate);
    } else if (isNotNil(requestRef.current)) {
      cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (isNotNil(requestRef.current)) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isAnimate]); // Make sure the effect runs only once
};
