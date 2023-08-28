import { MutableRefObject, useCallback, useRef, useState } from 'react';

import gsap from 'gsap';

import { easingOut } from '@utils/customEase';

import { PAGE_NAMES } from '@pages/guide/cards/items';
import { HandleNextPage } from '@pages/guide/types';

export function useAnimateGuideOverlay() {
  const vw = window.innerWidth;
  const overlayRefs: MutableRefObject<{ [key: string]: HTMLDivElement | null }> = useRef({});
  const [selectedPage, setSelected] = useState<string | undefined>(undefined);
  const [showPage, setShowPage] = useState(false);

  const onSelect = useCallback((name: PAGE_NAMES) => {
    setSelected(name);
  }, []);

  const handleNextPage: HandleNextPage = useCallback(
    ({ nextPage, isBack }) => {
      // one - two - three - анимация при возврате к выбору
      const { one, two, three } = overlayRefs.current || {};
      const tl = gsap.timeline();

      if (one && two && three) {
        tl.fromTo(one, { x: 0 }, { x: '-100vw', duration: 0.3 });
        tl.fromTo(
          two,
          { x: 0 },
          {
            x: '-100vw',
            delay: -0.2,
            onComplete: () => {
              if (isBack) {
                setShowPage(false);
                setSelected(undefined);
              } else {
                setSelected(nextPage);
              }
            },
          }
        );
        tl.fromTo(
          three,
          { x: 0 },
          {
            x: '-100vw',
            delay: -0.2,
          }
        );
        tl.to([three, one, two], {
          x: '-200vw',
          delay: -0.2,
        });
      }
      // if (isBack) {
      //   setSelected(undefined);
      // } else {
      //   setSelected(nextPage);
      // }
    },
    [overlayRefs]
  );

  return {
    onSelect,
    handleNextPage,
    setShowPage,
    selectedPage,
    showPage,
    overlayRefs,
  };
}
