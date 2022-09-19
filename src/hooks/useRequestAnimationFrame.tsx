import { useEffect, useRef } from 'react';

import { isNotNil } from '@utils/typeguard';

type AnimationFrame = {
  callback: (number) => void;
  isAnimate?: boolean;
};

export const useAnimationFrame = ({ callback, isAnimate = true }: AnimationFrame) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      // const deltaTime = time - previousTimeRef.current;
      callback(time);
    }
    previousTimeRef.current = time;
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
