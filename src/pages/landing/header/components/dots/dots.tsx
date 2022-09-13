import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { landingSelectors } from '@reducers/landing';

import { LANDING_COUNT } from '@pages/landing/const';
import { DotsArray } from '@pages/landing/header/components/dots/types';
import { dotsItem, dotsList } from '@pages/landing/header/components/framerMotionConfig';

import styles from './styles.scss';

export function Dots() {
  const { activeNav, isStartAnimation } = useSelector(landingSelectors.landing);

  const renderDots = useMemo(() => {
    const dotsArray: DotsArray[] = [];
    for (let i = 0; i < LANDING_COUNT; i++) {
      dotsArray.push({ active: activeNav === i });
    }

    return dotsArray;
  }, [activeNav]);

  return (
    <motion.div
      className={styles.Dots}
      initial="hidden"
      animate={isStartAnimation && 'show'}
      variants={dotsList}
    >
      {renderDots.map((dot, index) => (
        <motion.div key={index} variants={dotsItem}>
          <div className={cn(styles.Dots__dot, { [styles.Dots__dot_active]: dot.active })} />
        </motion.div>
      ))}
    </motion.div>
  );
}
