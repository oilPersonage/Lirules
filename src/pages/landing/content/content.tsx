import { RefObject, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { About } from '@pages/landing/content/about';
import { Contacts } from '@pages/landing/content/contacts';
import { Tariffs } from '@pages/landing/content/tariffs/tariffs';
import { LandingHeader } from '@pages/landing/header';
import styles from '@pages/landing/styles.scss';

export const LANDING_PAGES = [Tariffs, About, Contacts];

export default function LandingContent() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { setSpeed } = useOnScrollLanding(containerRef);

  useEffect(() => {
    if (containerRef.current && isNotNil(setSpeed)) {
      dispatch(landingActions.setSpeedFunction(setSpeed));
    }
  }, [dispatch, setSpeed, containerRef]);

  return (
    <div className={styles.Landing}>
      <div className={styles.Landing__scrollWrapper} ref={containerRef}>
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
