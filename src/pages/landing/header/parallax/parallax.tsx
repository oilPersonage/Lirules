import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useParallax } from '@hooks/useParallax';
import cn from 'classnames';

import { landingActions, landingSelectors } from '@reducers/landing';

import { parallaxItems } from './parallaxItems';
import styles from './styles.scss';

export function Parallax() {
  const dispatch = useDispatch();
  const elRefs = useRef([]);
  const [imagesCount, setImagesLoaded] = useState(0);
  const parallaxItemsImagesLength = parallaxItems.filter((el) => el.img).length;

  const isMobile = useMobileDetect();

  const { landingMouseRef, cursorRef } = useSelector(landingSelectors.landing);
  useParallax({ landingMouseRef, refs: elRefs, cursorRef });

  const setStartAnimation = useCallback(() => {
    if (parallaxItemsImagesLength > imagesCount) {
      console.log(22);
      setImagesLoaded((v) => {
        console.log({ v });
        return v + 1;
      });
    }
  }, [imagesCount]);

  useEffect(() => {
    console.log(imagesCount, parallaxItems);
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
      {parallaxItems.map((item, index) => (
        // @ts-ignore
        <div key={index} ref={(ref) => (elRefs.current[index] = ref)} className={item.className}>
          {!isMobile && item.img && (
            <img
              src={item.img}
              className={styles.Parallax__img}
              alt=""
              onLoad={setStartAnimation}
            />
          )}
          {isMobile && item.mobileImg && (
            <img
              src={item.mobileImg}
              className={styles.Parallax__img}
              alt=""
              onLoad={setStartAnimation}
            />
          )}
        </div>
      ))}
    </div>
  );
}
