import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useParallax } from '@hooks/useParallax';

import { landingActions, landingSelectors } from '@reducers/landing';

import { parallaxItems } from './parallaxItems';
import styles from './styles.scss';

export function Parallax() {
  const dispatch = useDispatch();
  const elRefs = useRef<HTMLDivElement[]>([]);
  const [imagesCount, setImagesLoaded] = useState(0);

  const isMobile = useMobileDetect();

  const { landingMouseRef, cursorRef } = useSelector(landingSelectors.landing);

  useParallax({ landingMouseRef, refs: elRefs, cursorRef });

  const renderItems = useMemo(() => {
    return isMobile
      ? parallaxItems.filter((el) => el.mobileImg)
      : parallaxItems.filter((el) => el.img);
  }, [isMobile]);

  const setStartAnimation = useCallback(() => {
    if (renderItems.length > imagesCount) {
      setImagesLoaded((v) => v + 1);
    }
  }, [imagesCount, renderItems]);

  useEffect(() => {
    if (imagesCount >= renderItems.length) {
      const overflow = document.getElementById('overflow');
      overflow?.classList.add('remove');
      dispatch(landingActions.startAnimation());

      setTimeout(() => {
        overflow?.classList.add('hide');
      }, 1000);
    }
  }, [imagesCount, renderItems]);

  return (
    <div className={styles.Parallax__images}>
      {renderItems.map((item, index) => (
        <div
          key={index}
          ref={(ref) => (ref ? (elRefs.current[index] = ref) : null)}
          className={item.className}
        >
          <img
            src={item.img || item.mobileImg}
            className={styles.Parallax__img}
            alt=""
            onLoad={setStartAnimation}
          />
        </div>
      ))}
    </div>
  );
}
