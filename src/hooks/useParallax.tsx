import { RefObject, useCallback, useEffect, useRef } from 'react';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { isNotNil } from '@utils/typeguard';

import { parallaxItems } from '@pages/landing/header/parallax/parallaxItems';

const coord = {
  x: 0,
  y: 0,
};

const mouseCoord = {
  x: 0,
  y: 0,
};

interface IUseParallax {
  landingMouseRef?: HTMLElement;
  refs: RefObject<HTMLElement[]>;
  cursorRef?: HTMLElement;
}

export function useParallax({ landingMouseRef, refs, cursorRef }: IUseParallax) {
  // const [pos, setPos] = useState([0, 0]);
  // const [mousePos, setMousePos] = useState([0, 0]);

  const isMobile = useMobileDetect();
  const aspectMousePosition = useRef({ x: 0, y: 0 });

  const parallaxAnimation = useCallback(() => {
    const width = document.body.clientWidth / 2;
    const height = document.body.clientHeight / 2;
    // inertia
    coord.x += (aspectMousePosition.current.x - coord.x) * 0.05;
    coord.y += (aspectMousePosition.current.y - coord.y) * 0.05;
    mouseCoord.x += (aspectMousePosition.current.x - mouseCoord.x) * 0.15;
    mouseCoord.y += (aspectMousePosition.current.y - mouseCoord.y) * 0.15;

    const mousePosX = (-(mouseCoord.x - 1) / 2) * width * 2 - 30;
    const mousePosY = (-(mouseCoord.y - 1) / 2) * height * 2 - 30;

    if (cursorRef) {
      cursorRef.style.transform = `translate(${mousePosX}px, ${mousePosY}px)`;
    }

    function setTransformParallaxItem(item: HTMLElement, index: number) {
      if (item) {
        item.style.transform = `translate( ${coord.x * parallaxItems[index].aspect}px,
         ${coord.y * parallaxItems[index].aspect}px)`;
      }
    }

    if (refs.current) {
      refs.current.forEach((el, index) => setTransformParallaxItem(el, index));
    }
  }, [refs, cursorRef]);

  useAnimationFrame({
    callback: parallaxAnimation,
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
    if (isNotNil(landingMouseRef) && !isMobile) {
      landingMouseRef.addEventListener('mousemove', mouseMove);
    }
  }, [landingMouseRef, mouseMove, isMobile]);
}
