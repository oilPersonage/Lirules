import { useSelector } from 'react-redux';

import { landingSelectors } from '@reducers/landing';

import { Navigation } from '@pages/landing/menu/navigation';
import { SocialIcons } from '@pages/landing/menu/socialIcons';

export function Menu() {
  const { isStartAnimation } = useSelector(landingSelectors.landing);

  return (
    <div>
      <SocialIcons isStartAnimation={isStartAnimation} />
      <Navigation isStartAnimation={isStartAnimation} />
    </div>
  );
}
