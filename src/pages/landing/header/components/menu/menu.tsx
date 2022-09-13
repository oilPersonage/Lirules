import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import Account from '@assets/icons/account.svg';
import Instagram from '@assets/icons/intagram.svg';
import WhatsApp from '@assets/icons/whatsapp.svg';

import { landingActions, landingSelectors } from '@reducers/landing';

import { menuItem, menuList } from '@pages/landing/header/components/framerMotionConfig';
import { Navigation } from '@pages/landing/header/components/navigation';

import styles from './styles.scss';

export function Menu() {
  const dispatch = useDispatch();
  const { isStartAnimation } = useSelector(landingSelectors.landing);

  function onSetIsHover() {
    dispatch(landingActions.setIsHover());
  }

  return (
    <div className={styles.Menu}>
      <motion.div
        className={styles.Menu__socialWrapper}
        initial="hidden"
        animate={isStartAnimation && 'show'}
        variants={menuList}
      >
        <motion.div variants={menuItem}>
          <a
            href="#"
            onMouseOver={onSetIsHover}
            onMouseOut={onSetIsHover}
            className={styles.Menu__socialIcon}
          >
            <WhatsApp />
          </a>
        </motion.div>
        <motion.div variants={menuItem}>
          <a
            href="#"
            className={styles.Menu__socialIcon}
            onMouseOver={onSetIsHover}
            onMouseOut={onSetIsHover}
          >
            <Instagram />
          </a>
        </motion.div>

        <motion.div variants={menuItem}>
          <a
            className={styles.Menu__phone}
            onMouseOver={onSetIsHover}
            onMouseOut={onSetIsHover}
            href="tel:+79990037029"
          >
            <span>+7 999</span> 003-70-29
          </a>
        </motion.div>
      </motion.div>

      <Navigation isStartAnimation={isStartAnimation} />

      {/*<motion.div*/}
      {/*  className={styles.Menu__accountButton}*/}
      {/*  onMouseOver={() => setIsHover(true)}*/}
      {/*  onMouseLeave={() => setIsHover(false)}*/}
      {/*  initial={{ opacity: 0, scale: 0.6 }}*/}
      {/*  animate={{*/}
      {/*    scale: isStartAnimation ? 1 : 0.6,*/}
      {/*    opacity: 1,*/}
      {/*  }}*/}
      {/*  transition={{*/}
      {/*    delay: 0.5,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Account />*/}
      {/*</motion.div>*/}
    </div>
  );
}
