import { createRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useParallax } from '@hooks/useParallax';
import cn from 'classnames';

import { landingActions, landingSelectors } from '@reducers/landing';

import { parallaxItems } from './parallaxItems';
import { ParallaxText } from './parallaxText';
import styles from './styles.scss';

export function Parallax() {
  const cursorRef = useRef(null);
  const [elRefs, setElRefs] = useState([]);

  const dispatch = useDispatch();
  const isMobile = useMobileDetect();

  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) => parallaxItems.map((_, i) => elRefs[i] || createRef()));
  }, []);

  const { isStartAnimation, isHover, landingMouseRef } = useSelector(landingSelectors.landing);

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
      <div className={styles.Parallax__cursor} ref={cursorRef}>
        <span
          className={cn(styles.Parallax__cursorDot, {
            [styles.Parallax__cursorDot_active]: isHover,
          })}
        />
      </div>

      {parallaxItems.map((item, index) => (
        <div key={index} className={item.className}>
          {!isMobile && item.img && <img src={item.img} className={styles.Parallax__img} alt="" />}
          {isMobile && item.mobileImg && (
            <img src={item.mobileImg} className={styles.Parallax__img} alt="" />
          )}
          {item.text && <ParallaxText isStartAnimation={isStartAnimation} />}
        </div>
      ))}
    </div>
  );
}
