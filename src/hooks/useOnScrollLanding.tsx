import { RefObject, useCallback, useEffect, useRef } from 'react';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { isNotNil } from '@utils/typeguard';

import { LANDING_COUNT } from '@pages/landing/const';

window.scrollPosition = 0;
window.isAnimateScroll = true;
window.isAnimateParallax = true;
window.activeNav = 0;
let speed = 0;
let position = 0;
let rounded = 0;
let screenHeight;
let screenWidth;
let isPrevPage = false;

export function useOnScrollLanding(
  containerRef: RefObject<HTMLElement>,
  containerBGRef: RefObject<HTMLElement>,
  containerTextRef: RefObject<HTMLElement>
) {
  const isMobile = useMobileDetect();

  function setSpeed(index, isPrev) {
    isPrevPage = isPrev;
    speed = index;
  }

  const scrollAnimate = useCallback(() => {
    if (window.isAnimateScroll && Math.abs(position + speed - rounded) > 0.001) {
      position += speed;
      speed *= 0.6;
      const diff = rounded - position;
      rounded = Math.round(position);
      position += diff * 0.055;
      window.scrollPosition = position;

      // устанавливаем активное меню только при изменении rounded
      if (isNotNil(containerRef.current) && containerBGRef.current && containerTextRef.current) {
        if (window.activeNav !== rounded) {
          window.activeNav = rounded;
          // window.isAnimateParallax = window.activeNav === 0;
        }

        containerRef.current.style.transform = `translateY(${-position * screenHeight}px) skewY(${
          speed * 50
        }deg)`;
        containerBGRef.current.style.transform = `translateY(${-position * screenHeight}px) skewY(${
          speed * 50
        }deg)`;
        containerTextRef.current.style.transform = `translateY(${
          -position * screenHeight
        }px) skewY(${speed * 50}deg)`;
      }
    }
  }, []);

  useAnimationFrame({
    callback: scrollAnimate,
    isAnimate: !isMobile, // for start animation - не передал сюда isAnimationScroll - потому что компонент не перерисовывается и useFrameAnimation не будет принимать акуальное значение
  });

  useEffect(() => {
    screenHeight = document.body.clientHeight;
    screenWidth = document.body.clientWidth;
  }, []);

  const onScroll = useCallback((event) => {
    const deltaY = event.deltaY || 0;

    if (window.isAnimateScroll) {
      isPrevPage = deltaY < 0;

      // first block and end block
      const disabledScroll =
        (deltaY < 0 && rounded === 0) || (deltaY > 0 && rounded === LANDING_COUNT - 1);

      const nextSpeed = speed + deltaY * 0.0008;
      if (!disabledScroll) {
        speed = nextSpeed;
      }
    }
  }, []);

  useEffect(() => {
    // disable macOs default scroll browser
    if (!isMobile) {
      containerRef.current?.addEventListener('touchmove', (e) => e.preventDefault(), false);
    }

    window.addEventListener('wheel', onScroll);
    return () => {
      window.addEventListener('wheel', onScroll);
    };
  }, [onScroll, containerRef.current]);

  return { setSpeed, onScroll };
}
