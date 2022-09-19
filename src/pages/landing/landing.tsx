import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { landingActions } from '@reducers/landing';

import LandingContent from '@pages/landing/content/content';
import { Dots } from '@pages/landing/dots';
import { Menu } from '@pages/landing/menu';

export default function Landing() {
  const dispatch = useDispatch();
  const landingMouseRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (landingMouseRef.current) {
      dispatch(landingActions.setLandingMouseRefRef(landingMouseRef.current));
    }
  }, [dispatch, landingMouseRef]);

  return (
    <div ref={landingMouseRef}>
      <Dots />
      <Menu />
      <LandingContent />
      {/*<Outlet /> // for router children*/}
    </div>
  );
}
