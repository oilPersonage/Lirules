import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';
import throttle from 'lodash/throttle';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { About } from '@pages/landing/content/about';
import { Contacts } from '@pages/landing/content/contacts';
import { Tariffs } from '@pages/landing/content/tariffs/tariffs';
import { LandingHeader } from '@pages/landing/header';
import styles from '@pages/landing/styles.scss';

export const LANDING_PAGES = [About, Tariffs, Contacts];

export default function LandingContent() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { setSpeed, onScroll } = useOnScrollLanding(containerRef);

  useEffect(() => {
    if (isNotNil(containerRef.current) && isNotNil(setSpeed)) {
      dispatch(landingActions.setSpeedFunction(setSpeed));
    }
  }, [dispatch, setSpeed, containerRef]);

  return (
    <div className={styles.Landing}>
      <div
        className={styles.Landing__scrollWrapper}
        ref={containerRef}
        onScroll={onScroll}
        onTouchStart={onScroll}
        onTouchMove={throttle(onScroll, 10)}
      >
        <LandingHeader />
        <div className={styles.Landing__test}>CAUSES</div>
        <div className={styles.Landing__test}>CAUSES</div>
        {LANDING_PAGES.map((Page, index) => (
          <div key={index} className={styles.Landing__page}>
            <Page index={index + 3} />
          </div>
        ))}
      </div>
    </div>
  );
}
