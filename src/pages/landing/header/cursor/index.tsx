import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';

import {landingActions} from '@reducers/landing';

import styles from '@pages/landing/header/parallax/styles.module.scss';

export function Cursor() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      dispatch(landingActions.setCursorRef(ref.current));
    }
  }, [ref]);

  return (
    <div className={styles.Parallax__cursor} ref={ref} id="parallaxCursor">
      <span className={styles.Parallax__cursorDot}/>
    </div>
  );
}
