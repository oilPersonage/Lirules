import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LANDING_PAGES } from '@pages/landing/const';
import { LandingHeader } from '@pages/landing/header';
import { Cursor } from '@pages/landing/header/cursor';
import { ParallaxText } from '@pages/landing/header/parallax/parallaxText';
import styles from '@pages/landing/styles.scss';

export interface ILandingPage {
  index: number;
  id: string;
}

export default function LandingContent() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const containerBGRef = useRef(null);
  const containerTextRef = useRef(null);
  const { setSpeed, onScroll } = useOnScrollLanding(containerRef, containerBGRef, containerTextRef);

  useEffect(() => {
    if (isNotNil(containerRef.current) && isNotNil(setSpeed)) {
      dispatch(landingActions.setSpeedFunction(setSpeed));
    }
  }, [dispatch, setSpeed, containerRef]);

  return (
    <div className={styles.Landing__content}>
      <Cursor />
      <LandingHeader />
      <div ref={containerTextRef} className={styles.Landing__textWrapper}>
        <ParallaxText />
      </div>
      <div className={styles.Landing__background} ref={containerBGRef} />
      <div className={styles.Landing__scrollWrapper} ref={containerRef} onScroll={onScroll}>
        {LANDING_PAGES.map((Page, index) => (
          <div key={index} className={styles.Landing__page}>
            <Page.component index={index} id={Page.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
