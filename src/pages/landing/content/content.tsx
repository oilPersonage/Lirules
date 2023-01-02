import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';
import throttle from 'lodash/throttle';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { About } from '@pages/landing/content/about';
import { Cases } from '@pages/landing/content/cases';
import { Contacts } from '@pages/landing/content/contacts';
import { Course } from '@pages/landing/content/course';
import { Tariffs } from '@pages/landing/content/tariffs/tariffs';
import { LandingHeader } from '@pages/landing/header';
import styles from '@pages/landing/styles.scss';

export const LANDING_PAGES = [About, Course, Tariffs, Cases, Contacts];

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
        onTouchMove={onScroll}
      >
        <LandingHeader />
        {LANDING_PAGES.map((Page, index) => (
          <div key={index} className={styles.Landing__page}>
            <Page index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
