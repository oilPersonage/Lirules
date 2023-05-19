import { RefObject, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';
import { dispatch } from 'redux-saga-promise-actions';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LANDING_PAGES } from '@pages/landing/const';

window.scrollPosition = 0;
window.isAnimateScroll = true;
window.isAnimateParallax = true;
window.activeNav = 0;
window.animatedLandingBlock = null;
let speed = 0;
let position = 0;
let rounded = 0;
let screenHeight;
let screenWidth;
let isPrevPage = false;

export function useOnScrollLanding(
  containerRef: RefObject<HTMLElement>, // scroll container
  containerBGRef: RefObject<HTMLElement>, // bg div
  containerTextRef: RefObject<HTMLElement> // text div
) {
  const isMobile = useMobileDetect();
  const dispatch = useDispatch();

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

      // устанавливаем активное меню только при изменении rounded
      if (isNotNil(containerRef.current) && containerBGRef.current && containerTextRef.current) {
        if (window.activeNav !== rounded) {
          window.activeNav = rounded;
          dispatch(landingActions.setActiveNav(rounded));
          // window.isAnimateParallax = window.activeNav === 0;
        }

        position += diff * 0.055;
        window.scrollPosition = position;

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
        (deltaY < 0 && rounded === 0) || (deltaY > 0 && rounded === LANDING_PAGES.length);

      const nextSpeed = speed + deltaY * 0.0008;
      if (!disabledScroll && !window.animatedLandingBlock) {
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
