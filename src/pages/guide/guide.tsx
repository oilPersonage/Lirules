import { useEffect, useMemo } from 'react';

import { useAnimateGuideOverlay } from '@hooks/useAnimateGuideOverlay';
import Logotype from '@icons/logotype.svg';
import cn from 'classnames';

import { Cards } from '@pages/guide/cards';
import { PAGE_NAMES } from '@pages/guide/cards/items';
import { Contacts } from '@pages/guide/components/contacts';
import { Overlay } from '@pages/guide/components/overlay';
import { GuideThailand, GuideTurkey } from '@pages/guide/pages';

import styles from './styles.scss';

export function Guide() {
  useEffect(() => {
    const overflow = document.getElementById('overflow');
    overflow?.classList.add('hide');
  }, []);

  const { onSelect, handleNextPage, selectedPage, showPage, overlayRefs } =
    useAnimateGuideOverlay();

  const getScreenBySelect = useMemo(() => {
    if (!selectedPage) return null;
    const PAGES = {
      [PAGE_NAMES.THAILAND]: (
        <GuideThailand isStartAnimate={showPage} handleNextPage={handleNextPage} />
      ),
      [PAGE_NAMES.TURKEY]: (
        <GuideTurkey isStartAnimate={showPage} handleNextPage={handleNextPage} />
      ),
    };

    return PAGES[selectedPage];
  }, [handleNextPage, selectedPage, showPage]);

  return (
    <div className={styles.Guide}>
      {/*<h2 className={cn(styles.Guide__heading, { [styles.Guide__heading_hide]: selectedPage })}>*/}
      {/*  СДЕЛАЙ СВОЙ ВЫБОР*/}
      {/*</h2>*/}
      <div className={styles.Guide__logo}>
        <Logotype />
      </div>
      <Contacts />
      {!showPage && <Cards onSelect={onSelect} selectedPage={selectedPage} />}

      {/* SCREENS */}
      <div className={styles.Guide__page}>{getScreenBySelect}</div>

      {/*ANIMATION*/}
      <Overlay refs={overlayRefs} />
    </div>
  );
}
