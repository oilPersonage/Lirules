import { createRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useParallax } from '@hooks/useParallax';
import cn from 'classnames';

import { landingActions, landingSelectors } from '@reducers/landing';

import { parallaxItems } from './parallaxItems';
import styles from './styles.scss';

export function Parallax() {
  const elRefs = useRef([]);

  const dispatch = useDispatch();
  const isMobile = useMobileDetect();

  const { landingMouseRef, cursorRef } = useSelector(landingSelectors.landing);
  useParallax({ landingMouseRef, refs: elRefs, cursorRef });

  function setStartAnimation() {
    const overflow = document.getElementById('overflow');
    overflow?.classList.add('remove');

    setTimeout(() => {
      overflow?.classList.add('hide');
    }, 1000);
    dispatch(landingActions.startAnimation());
  }

  useEffect(() => {
    setStartAnimation();
  }, []);

  return (
    <div className={styles.Parallax__images}>
      {parallaxItems.map((item, index) => (
        // @ts-ignore
        <div key={index} ref={(ref) => (elRefs.current[index] = ref)} className={item.className}>
          {!isMobile && item.img && <img src={item.img} className={styles.Parallax__img} alt="" />}
          {isMobile && item.mobileImg && (
            <img src={item.mobileImg} className={styles.Parallax__img} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}
