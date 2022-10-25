import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LANDING_COUNT } from '@pages/landing/const';

window.scrollPosition = 0;
window.isAnimateScroll = true;
window.isAnimateParallax = true;
let speed = 0;
let position = 0;
let rounded = 0;
let screenHeight;
let isPrevPage = false;
let touchStart = 0;

export function useOnScrollLanding(containerRef: RefObject<HTMLElement>) {
  const isMobile = window.innerWidth < 600;
  const dispatch = useDispatch();
  const activeN = useRef(0);

  function setSpeed(index, isPrev) {
    isPrevPage = isPrev;
    speed = index;
  }

  useAnimationFrame({
    callback: () => {
      if (window.isAnimateScroll) {
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
            window.isAnimateParallax = activeN.current === 0;
            dispatch(landingActions.setActiveNav(rounded));
          }

          const skewY = -(position % 1) * Math.abs(diff) * 15 * (isPrevPage ? 1 : -1);

          containerRef.current.style.transform = `translateY(${
            -position * screenHeight
          }px) skewY(${skewY}deg)`;
        }
      }
    },
    isAnimate: true, // for start animation - не передал сюда isAnmationScroll - потому что компонент не перерисовывается и useFrameAnimation не будет принимать акуальное значение
  });

  useEffect(() => {
    screenHeight = document.body.clientHeight;
  }, []);

  const onScroll = useCallback((event) => {
    event.stopPropagation();
    let deltaY = event.deltaY;
    if (window.isAnimateScroll) {
      // TOUCH
      if (event.type === 'touchstart' || event.type === 'touchmove') {
        const touch = event.touches[0] || event.changedTouches[0];

        if (event.type === 'touchstart') {
          touchStart = touch.pageY;
        }
        deltaY = -(touch.pageY - touchStart) * 15;
      }

      isPrevPage = deltaY < 0;

      const disabledScroll =
        (deltaY < 0 && rounded === 0) || (deltaY > 0 && rounded === LANDING_COUNT - 1);

      const multiplySpeed = isMobile ? 0.00003 : 0.0005;
      const nextSpeed = speed + deltaY * multiplySpeed;
      if (!disabledScroll && Math.abs(nextSpeed) < 0.3) {
        speed = nextSpeed;
      }
    }
  }, []);

  useEffect(() => {
    // disable macOs default scroll browser
    containerRef.current?.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
      },
      false
    );
    window.addEventListener('wheel', onScroll);
    return () => {
      window.addEventListener('wheel', onScroll);
    };
  }, [onScroll, containerRef.current]);

  return { setSpeed, onScroll };
}