import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { useToggle } from '@hooks/useToggle';
import { ReactComponent as Logotype } from '@icons/logotype.svg';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { landingActions, landingSelectors } from '@reducers/landing';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';
import { isNotNil } from '@utils/typeguard';

import { LANDING_PAGES } from '@pages/landing/const';
import { navigationList } from '@pages/landing/header/framerMotionConfig';
import { IOnClick } from '@pages/landing/header/menu/navigation/types';

import styles from './styles.module.scss';

export const SCROLL_SPEED = 2.5;

export function Navigation() {
  const isMobile = useMobileDetect();
  const { isOpen, toggle } = useToggle(false);
  const dispatch = useDispatch();
  const { setSpeed } = useSelector(landingSelectors.landing);

  const onClick = useCallback(
    ({ index, isHideMenu, id }: IOnClick) => {
      if (isHideMenu) {
        toggle();
      }
      if (isNotNil(index)) {
        dispatch(landingActions.setActiveNav(index));
        if (isNotNil(setSpeed) && !isMobile) {
          setSpeed((index - window.activeNav) / SCROLL_SPEED, index < window.activeNav);
        } else if (isMobile && id) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [dispatch, setSpeed, window.activeNav, isMobile]
  );

  const navigationItems = useMemo(() => {
    const navList = [...LANDING_PAGES].reverse();
    return navList.map((menu, index) => {
      const isActive = navList.length - window.activeNav === index;
      return (
        <li
          key={index}
          className={cn(styles.Navigation__item, {
            [styles.Navigation__item_active]: isActive,
          })}
          onClick={() => onClick({ index: navList.length - index, isHideMenu: true, id: menu.id })}
        >
          <div className={styles.Navigation__itemContent}>
            <p>{menu.title}</p>
            <span>{menu.text}</span>
          </div>
        </li>
      );
    });
  }, [window.activeNav, onClick]);

  return (
    <div className={styles.Navigation}>
      <motion.div
        className={styles.Navigation__logotype}
        onClick={() => onClick({ index: 0, id: 'header' })}
      >
        <div onMouseEnter={onChangeCursorDot} onMouseLeave={onChangeCursorDot}>
          <Logotype />
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              className={cn(styles.Navigation__overlay)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onClick({ isHideMenu: true })}
            />
            <motion.ul
              className={cn(styles.Navigation__list, { [styles.Navigation__list_open]: isOpen })}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', mass: 0.4 }}
              variants={navigationList}
            >
              {navigationItems}
            </motion.ul>
          </>
        )}
      </AnimatePresence>

      <div
        className={styles.Navigation__hamburgerWrapper}
        onMouseEnter={onChangeCursorDot}
        onMouseLeave={onChangeCursorDot}
        onClick={() => onClick({ isHideMenu: true })}
      >
        <div
          className={cn(styles.Navigation__hamburger, {
            [styles.Navigation__hamburger_active]: isOpen,
          })}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
