import { useCallback, useEffect, useRef, useState } from 'react';

import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { isNotNil } from '@utils/typeguard';

const coord = {
  x: 0,
  y: 0,
};

interface IUseParallax {
  landingMouseRef?: HTMLElement;
}

export function useParallax({ landingMouseRef }: IUseParallax) {
  const [pos, setPos] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);
  const aspectMousePosition = useRef({ x: 0, y: 0 });

  useAnimationFrame({
    callback: () => {
      const width = document.body.clientWidth / 2;
      const height = document.body.clientHeight / 2;
      // inertia
      coord.x += (aspectMousePosition.current.x - coord.x) * 0.05;
      coord.y += (aspectMousePosition.current.y - coord.y) * 0.05;
      setMousePos([(-(coord.x - 1) / 2) * width * 2 - 30, (-(coord.y - 1) / 2) * height * 2 - 30]);
      setPos([coord.x, coord.y]);
    },
    isAnimate: window.isAnimateParallax && !isMobile,
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
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    if (isNotNil(landingMouseRef)) {
      landingMouseRef.addEventListener('mousemove', mouseMove);
    }
  }, [landingMouseRef, mouseMove]);

  return { pos, mousePos };
}
