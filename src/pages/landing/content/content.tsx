import { RefObject, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LandingHeader } from '@pages/landing/header';
import styles from '@pages/landing/styles.scss';

export interface ILandingContent {
  isHover: boolean;
  setIsHover: (boolean) => void;
  containerRef: RefObject<HTMLDivElement>;
  headerRef: RefObject<HTMLDivElement>;
}

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
        <div className={styles.Landing__testBlock}>ABOUT.ME</div>
        <div className={styles.Landing__testBlock}>INFO</div>
        <div className={styles.Landing__testBlock}>TARIFFS</div>
        <div className={styles.Landing__testBlock}>CAUSES</div>
        <div className={styles.Landing__testBlock}>CONTACTS</div>
      </div>
    </div>
  );
}
