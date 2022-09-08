import { useEffect, useRef } from 'react';

import { isNotNil } from '@utils/typeguard';

export const useAnimationFrame = (callback) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (isNotNil(requestRef.current)) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Make sure the effect runs only once
};
