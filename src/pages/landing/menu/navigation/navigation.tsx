import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import { motion } from 'framer-motion';

import Logotype from '@assets/icons/logotype.svg';

import { landingActions, landingSelectors } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { navigationItem, navigationList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.scss';
import { INavigation } from './types';

const MENU_LIST = ['Обо мне', 'Описание курса', 'Тарифы', 'Кейсы', 'Контакты'].reverse();

export function Navigation({ isStartAnimation }: INavigation) {
  const dispatch = useDispatch();
  const { activeNav, setSpeed } = useSelector(landingSelectors.landing);

  const onClick = useCallback(
    (index) => {
      dispatch(landingActions.setActiveNav(index));
      if (isNotNil(setSpeed)) {
        setSpeed((index - activeNav) / 2.5, index < activeNav);
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
        <motion.li
          key={index}
          className={cn(styles.Navigation__item, {
            [styles.Navigation__item_active]: isActive,
          })}
          onMouseOver={onSetIsHover}
          onMouseOut={onSetIsHover}
          variants={navigationItem}
          onClick={() => onClick(MENU_LIST.length - index)}
        >
          <p>{menu}</p>
        </motion.li>
      );
    });
  }, [onSetIsHover, activeNav, onClick]);

  return (
    <>
      <motion.div className={styles.Navigation__logotype} onClick={() => onClick(0)}>
        <a href="#" onMouseOver={onSetIsHover} onMouseOut={onSetIsHover}>
          <Logotype />
        </a>
      </motion.div>
      <motion.ul
        className={styles.Navigation}
        initial="hidden"
        animate={isStartAnimation && 'show'}
        variants={navigationList}
      >
        {navigationItems}
      </motion.ul>
    </>
  );
}
