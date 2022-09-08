import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DotsArray } from '@pages/landing/header/components/dots/types';
import { dotsItem, dotsList } from '@pages/landing/header/components/framerMotionConfig';
import { landingSelectors } from '@reducers/landing';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './styles.scss';

const COUNT_DOTS = 4;

interface IDots {
  isStartAnimation: boolean;
}

export function Dots({ isStartAnimation }: IDots) {
  const activeDot = useSelector(landingSelectors.activeDot);

  const renderDots = useMemo(() => {
    const dotsArray: DotsArray[] = [];
    for (let i = 0; i < COUNT_DOTS; i++) {
      dotsArray.push({ active: activeDot === i });
    }

    return dotsArray;
  }, [activeDot]);

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
