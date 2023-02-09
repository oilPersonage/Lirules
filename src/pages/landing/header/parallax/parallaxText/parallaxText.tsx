import { useSelector } from 'react-redux';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { motion } from 'framer-motion';

import { Button } from '@components/Button';

import { landingSelectors } from '@reducers/landing';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';

import { titleItem, titleList } from '@pages/landing/header/framerMotionConfig';
import { SCROLL_SPEED } from '@pages/landing/header/menu/navigation/navigation';
import styles from '@pages/landing/header/parallax/styles.scss';

const TITLE = 'Lirules';
const COURSE_INDEX = 2;

export function ParallaxText() {
  const isMobile = useMobileDetect();
  const { setSpeed } = useSelector(landingSelectors.landing);
  const { isStartAnimation } = useSelector(landingSelectors.landing);

  const animateConfig = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: isStartAnimation ? 0 : -50,
      opacity: isStartAnimation ? 1 : 0,
    },
    transition: { delay: 2.5 },
  };

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
        {/*<motion.p variants={titleItem} className={styles.Parallax__date}>*/}
        {/*  06.07.2022*/}
        {/*</motion.p>*/}
      </motion.div>

      <motion.h2
        className={styles.Parallax__description}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isStartAnimation ? 0 : 50,
          opacity: isStartAnimation ? 1 : 0,
        }}
        transition={{ delay: 2 }}
      >
        Авторская программа по обучению видеосъмеке на <span>телефон</span>
      </motion.h2>
      <div
        className={styles.Parallax__button}
        onMouseEnter={onChangeCursorDot}
        onMouseLeave={onChangeCursorDot}
      >
        <Button animateConfig={animateConfig} uppercase type="accent">
          Пройти курс
        </Button>
        <Button
          onClick={() =>
            isMobile
              ? document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })
              : setSpeed
              ? setSpeed((COURSE_INDEX - window.activeNav) / SCROLL_SPEED, true)
              : null
          }
          animateConfig={animateConfig}
          type="outline"
        >
          Чему вы научитесь?
        </Button>
      </div>
    </div>
  );
}
