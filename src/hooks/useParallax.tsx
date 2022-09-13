import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { isNotNil } from '@utils/typeguard';

const coord = {
  x: 0,
  y: 0,
};

export function useParallax(landingMouseRef?: HTMLElement) {
  const [pos, setPos] = useState([0, 0]);
  const [mousePos, setMousePos] = useState([0, 0]);
  const aspectMousePosition = useRef({ x: 0, y: 0 });

  useAnimationFrame(() => {
    const width = document.body.clientWidth / 2;
    const height = document.body.clientHeight / 2;
    // inertia
    coord.x += (aspectMousePosition.current.x - coord.x) * 0.05;
    coord.y += (aspectMousePosition.current.y - coord.y) * 0.05;
    setMousePos([(-(coord.x - 1) / 2) * width * 2 - 30, (-(coord.y - 1) / 2) * height * 2 - 30]);
    setPos([coord.x, coord.y]);
  });

  const mouseMove = useCallback((event) => {
    const x = event.clientX;
    const y = event.clientY;
    const width = document.body.clientWidth / 2;
    const height = document.body.clientHeight / 2;
    aspectMousePosition.current = {
      x: -((x - width) / width),
      y: -((y - height) / height),
    };
  }, []);

  useEffect(() => {
    if (isNotNil(landingMouseRef)) {
      landingMouseRef.addEventListener('mousemove', mouseMove);
    }
  }, [landingMouseRef, mouseMove]);

  return { pos, mousePos };
}
