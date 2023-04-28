import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { easingInLight, easingOut } from '@utils/customEase';

import { Navigation } from '@pages/guide/components/navigation';
import { Content } from '@pages/guide/pages/thailand/content/content';
import { HandleNextPage } from '@pages/guide/types';

export type TGuadePageProps = {
  handleNextPage: HandleNextPage;
  isStartAnimate: boolean;
};

export function Thailand({ isStartAnimate, handleNextPage }: TGuadePageProps) {
  // CONTENT
  const topBlack = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const bottomBlack = useRef(null);
  const socialRef = useRef({});

  // NAVIGATION

  // ANIMATION
  useEffect(() => {
    if (!isStartAnimate) return;

    const top = topBlack.current;
    const bottom = bottomBlack.current;
    const button = buttonRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const socialIcons = Object.keys(socialRef.current).map((el) => socialRef.current[el]);

    const tl = gsap.timeline();

    gsap.to(bottom, {
      y: '25vh',
      ease: easingOut,
      duration: 1,
    });
    tl.to(top, {
      y: '-25vh',
      ease: easingOut,
      duration: 1,
    });
    tl.to(heading, { opacity: 1, delay: 0.4, duration: 1, ease: easingInLight });
    tl.fromTo(description, { y: '-53%', opacity: 0 }, { y: '-50%', opacity: 1, delay: -0.3 });
    tl.fromTo(button, { translateY: 30, opacity: 0 }, { translateY: 0, opacity: 1, delay: -0.4 });
    tl.fromTo(socialIcons, { y: 10, opacity: 0 }, { y: 0, opacity: 0.6, stagger: 0.1 });
  }, [isStartAnimate]);

  const refs = {
    topBlack,
    buttonRef,
    headingRef,
    descriptionRef,
    bottomBlack,
    socialRef,
  };

  return (
    <div>
      <Navigation handleNextScreen={handleNextPage} />
      <Content refs={refs} />
    </div>
  );
}
