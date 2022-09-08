import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import Account from '@assets/icons/account.svg';
import Instagram from '@assets/icons/intagram.svg';
import WhatsApp from '@assets/icons/whatsapp.svg';

import { landingSelectors } from '@reducers/landing';

import { Dots } from '@pages/landing/header/components/dots';
import { menuItem, menuList } from '@pages/landing/header/components/framerMotionConfig';
import { IMenu } from '@pages/landing/header/components/menu/types';
import { Navigation } from '@pages/landing/header/components/navigation';

import styles from './styles.scss';

export function Menu({ setIsHover }: IMenu) {
  const isStartAnimation = useSelector(landingSelectors.isStartAnimation);

  return (
    <div className={styles.Menu}>
      <motion.div
        className={styles.Menu__socialWrapper}
        initial="hidden"
        animate={isStartAnimation && 'show'}
        variants={menuList}
      >
        <motion.div
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          variants={menuItem}
        >
          <a href="#" className={styles.Menu__socialIcon}>
            <WhatsApp />
          </a>
        </motion.div>
        <motion.div
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          variants={menuItem}
        >
          <a href="#" className={styles.Menu__socialIcon}>
            <Instagram />
          </a>
        </motion.div>
      </motion.div>

      <Navigation setIsHover={setIsHover} isStartAnimation={isStartAnimation} />
      <Dots isStartAnimation={isStartAnimation} />

      <motion.div
        className={styles.Menu__accountButton}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          scale: isStartAnimation ? 1 : 0.6,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <Account />
      </motion.div>
    </div>
  );
}
