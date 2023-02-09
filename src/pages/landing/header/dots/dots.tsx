import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { landingSelectors } from '@reducers/landing';

import { LANDING_PAGES } from '@pages/landing/const';
import { DotsArray } from '@pages/landing/header/dots/types';
import { dotsItem, dotsList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.scss';

export function Dots() {
  const { isStartAnimation } = useSelector(landingSelectors.landing);

  const renderDots = useMemo(() => {
    const dotsArray: DotsArray[] = [];
    for (let i = 0; i < LANDING_PAGES.length; i++) {
      dotsArray.push({ active: window.activeNav === i });
    }

    return dotsArray;
  }, []);

  return (
    <motion.div
      className={styles.Dots}
      initial="hidden"
      animate={isStartAnimation && 'show'}
      variants={dotsList}
    >
      {renderDots.map((dot, index) => (
        <motion.div key={index} variants={dotsItem}>
          <div
            className={cn(styles.Dots__dot, {
              [styles.Dots__dot_active]: window.activeNav === index,
            })}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
