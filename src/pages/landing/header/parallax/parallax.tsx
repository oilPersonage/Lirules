import { useCallback, useEffect, useRef, useState } from 'react';
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

  const parallaxItemsImagesLength = isMobile
    ? parallaxItems.filter((el) => el.mobileImg).length
    : parallaxItems.filter((el) => el.img).length;

  const setStartAnimation = useCallback(() => {
    if (parallaxItemsImagesLength > imagesCount) {
      setImagesLoaded((v) => v + 1);
    }
  }, [imagesCount]);

  useEffect(() => {
    if (imagesCount >= parallaxItemsImagesLength) {
      const overflow = document.getElementById('overflow');
      overflow?.classList.add('remove');
      dispatch(landingActions.startAnimation());

      setTimeout(() => {
        overflow?.classList.add('hide');
      }, 1000);
    }
  }, [imagesCount, parallaxItemsImagesLength]);

  return (
    <div className={styles.Parallax__images}>
      {parallaxItems.map((item, index) =>
        !isMobile && item.img ? (
          <div
            key={index}
            ref={(ref) => (ref ? (elRefs.current[index] = ref) : null)}
            className={item.className}
          >
            <img
              src={item.img}
              className={styles.Parallax__img}
              alt=""
              onLoad={setStartAnimation}
            />
          </div>
        ) : (
          isMobile &&
          item.mobileImg && (
            <div key={index} className={item.className}>
              {item.mobileImg && (
                <img
                  src={item.mobileImg}
                  className={styles.Parallax__img}
                  alt=""
                  onLoad={setStartAnimation}
                />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
