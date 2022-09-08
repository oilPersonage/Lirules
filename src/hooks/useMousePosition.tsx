import { useEffect, useState } from 'react';

import { isNotNil } from '@utils/typeguard';
import { Nullable } from '@utils/types';

export interface IMousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (includeTouch?: boolean): IMousePosition | null => {
  const [mousePosition, setMousePosition] = useState<Nullable<IMousePosition>>(null);
  useEffect(() => {
    const updateMousePosition = (ev) => {
      let x, y;
      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [ev.clientX, ev.clientY];
      }
      const width = document.body.clientWidth / 2;
      const height = document.body.clientHeight / 2;
      setMousePosition({ x: -((x - width) / width), y: -((y - height) / height) });
    };
    window.addEventListener('mousemove', updateMousePosition);
    if (includeTouch) {
      window.addEventListener('touchmove', updateMousePosition);
    }
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition);
      }
    };
  }, [includeTouch]);
  return mousePosition;
};
