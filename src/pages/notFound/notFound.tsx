import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { landingActions } from '@reducers/landing';

export default function NotFound() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(landingActions.startAnimation);
  }, [dispatch]);
  return <div>Страница не найдена!</div>;
}
