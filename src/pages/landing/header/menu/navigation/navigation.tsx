import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useToggle } from '@hooks/useToggle';
import Logotype from '@icons/logotype.svg';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { landingActions, landingSelectors } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { navigationList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.scss';

const MENU_LIST: { text: string; title: string }[] = [
  { title: 'Обо мне', text: 'Информация обо мне для вас' },
  { title: 'Описание курса', text: 'Краткое описание прохождения курса' },
  {
    title: 'Тарифы',
    text: 'Информация о ценности данного курса',
  },
  { title: 'Кейсы', text: 'Работы моих учеников и отзывы' },
  { title: 'Контакты', text: 'Контактная информация' },
].reverse();

export function Navigation() {
  const { isOpen, toggle } = useToggle(false);
  const dispatch = useDispatch();
  const { activeNav, setSpeed } = useSelector(landingSelectors.landing);
  const onClick = useCallback(
    ({ index, isHideMenu }: { index?: number; isHideMenu?: boolean }) => {
      if (isHideMenu) {
        window.isAnimateScroll = !window.isAnimateScroll;
        toggle();
      }
      if (isNotNil(index)) {
        dispatch(landingActions.setActiveNav(index));
        if (isNotNil(setSpeed)) {
          setSpeed((index - activeNav) / 2.5, index < activeNav);
        }
      }
    },
    [dispatch, setSpeed, activeNav]
  );

  function onSetIsHover() {
    dispatch(landingActions.setIsHover());
  }

  const navigationItems = useMemo(() => {
    return MENU_LIST.map((menu, index) => {
      const isActive = MENU_LIST.length - activeNav === index;
      return (
        <li
          key={index}
          className={cn(styles.Navigation__item, {
            [styles.Navigation__item_active]: isActive,
          })}
          onClick={() => onClick({ index: MENU_LIST.length - index, isHideMenu: true })}
        >
          <div className={styles.Navigation__itemContent}>
            <p>{menu.title}</p>
            <span>{menu.text}</span>
          </div>
        </li>
      );
    });
  }, [activeNav, onClick]);

  return (
    <div className={styles.Navigation}>
      <motion.div className={styles.Navigation__logotype} onClick={() => onClick({ index: 0 })}>
        <a href="#" onMouseEnter={onSetIsHover} onMouseLeave={onSetIsHover}>
          <Logotype />
        </a>
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
        onMouseEnter={onSetIsHover}
        onMouseLeave={onSetIsHover}
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
