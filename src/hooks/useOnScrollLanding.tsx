import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LANDING_COUNT } from '@pages/landing/const';

window.scrollPosition = 0;
let speed = 0;
let position = 0;
let rounded = 0;
let screenHeight;
let isPrevPage = false;

export function useOnScrollLanding(containerRef: RefObject<HTMLElement>) {
  const dispatch = useDispatch();
  const activeN = useRef(0);

  function setSpeed(index, isPrev) {
    isPrevPage = isPrev;
    speed = index;
  }

  useAnimationFrame({
    callback: () => {
      position += speed;
      speed *= 0.6;
      const diff = rounded - position;
      rounded = Math.round(position);
      position += diff * 0.055;
      window.scrollPosition = position;

      // устанавливаем активное меню только при изменении rounded
      if (isNotNil(containerRef.current)) {
        if (activeN.current !== rounded) {
          activeN.current = rounded;
          window.isAnimate = activeN.current === 0;
          dispatch(landingActions.setActiveNav(rounded));
        }

        const skewY = -(position % 1) * Math.abs(diff) * 15 * (isPrevPage ? 1 : -1);

        containerRef.current.style.transform = `translateY(${
          -position * screenHeight
        }px) skewY(${skewY}deg)`;
      }
    },
    isAnimate: true, // for start animation
  });

  useEffect(() => {
    screenHeight = document.body.clientHeight;
  }, []);

  const onScroll = useCallback((event) => {
    event.stopPropagation();
    isPrevPage = event.deltaY < 0;

    const disabledScroll =
      (event.deltaY < 0 && rounded === 0) || (event.deltaY > 0 && rounded === LANDING_COUNT - 1);

    const nextSpeed = speed + event.deltaY * 0.0002;
    if (!disabledScroll && Math.abs(nextSpeed) < 0.3) {
      speed = nextSpeed;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', onScroll);

    return () => {
      window.removeEventListener('wheel', onScroll);
    };
  }, [onScroll]);

  return { setSpeed };
}
