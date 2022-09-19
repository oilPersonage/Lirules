import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

import { Button } from '@components/Button';

import { landingActions } from '@reducers/landing';

import { titleItem, titleList } from '@pages/landing/header/framerMotionConfig';
import styles from '@pages/landing/header/parallax/styles.scss';

const TITLE = 'Lirules';

interface IParallaxText {
  isStartAnimation: boolean;
}

export function ParallaxText({ isStartAnimation }: IParallaxText) {
  const dispatch = useDispatch();

  function onSetIsHover() {
    dispatch(landingActions.setIsHover());
  }

  return (
    <div className={styles.Parallax__textWrapper}>
      <motion.div
        initial="hidden"
        animate={isStartAnimation && 'show'}
        variants={titleList}
        className={styles.Parallax__title}
      >
        {[...TITLE].map((symbol, index) => (
          <motion.p key={index} variants={titleItem}>
            {symbol}
          </motion.p>
        ))}
        <motion.p variants={titleItem} className={styles.Parallax__date}>
          06.07.2022
        </motion.p>
      </motion.div>

      <motion.h2
        className={styles.Parallax__description}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isStartAnimation ? 0 : 50,
          opacity: isStartAnimation ? 1 : 0,
        }}
        transition={{ delay: 3 }}
      >
        Авторская платформа Обучению видеосъеке на <span>телефон</span>
      </motion.h2>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: isStartAnimation ? 1 : 0,
          opacity: isStartAnimation ? 1 : 0,
        }}
        transition={{ delay: 3.5 }}
        onMouseLeave={onSetIsHover}
        onMouseOver={onSetIsHover}
      >
        <Button type="accent">Пройти курс</Button>
      </motion.div>
    </div>
  );
}
