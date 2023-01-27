import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';

import { landingActions } from '@reducers/landing';

import LandingContent from '@pages/landing/content/content';
import { Menu } from '@pages/landing/header/menu';

import styles from './styles.scss';

export default function Landing() {
  const isMobile = useMobileDetect();
  const dispatch = useDispatch();
  const landingMouseRef = useRef<HTMLHeadingElement>(null);

  const documentHeight = useCallback(() => {
    if (landingMouseRef.current && !isMobile) {
      landingMouseRef.current.style.setProperty('max-height', `${window.innerHeight}px`);
    }
  }, [landingMouseRef]);

  useEffect(() => {
    if (landingMouseRef.current) {
      dispatch(landingActions.setLandingMouseRefRef(landingMouseRef.current));
    }
  }, [dispatch, landingMouseRef]);

  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener('resize', documentHeight);
    };
  }, [documentHeight]);

  return (
    <div className={styles.Landing} ref={landingMouseRef}>
      {/*<Dots />*/}
      <Menu />
      <LandingContent />
      {/*<Outlet /> // for router children*/}
    </div>
  );
}
