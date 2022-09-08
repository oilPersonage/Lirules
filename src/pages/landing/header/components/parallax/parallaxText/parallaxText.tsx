import { Button } from '@components/Button';
import { titleItem, titleList } from '@pages/landing/header/components/framerMotionConfig';
import styles from '@pages/landing/header/components/parallax/styles.scss';
import { landingActions } from '@reducers/landing/index';
import { motion } from 'framer-motion';

const TITLE = 'Lirules';

interface IParallaxText {
  isStartAnimation: boolean;
  setIsHover: (boolean) => void;
}

export function ParallaxText({ isStartAnimation, setIsHover }: IParallaxText) {
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
        onMouseLeave={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        <Button>Пройти курс</Button>
      </motion.div>
    </div>
  );
}
