import { useDispatch } from 'react-redux';

import Instagram from '@icons/intagram.svg';
import WhatsApp from '@icons/whatsapp.svg';
import { motion } from 'framer-motion';

import { landingActions } from '@reducers/landing';

import { menuItem, menuList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.scss';

interface ISocialIcons {
  isStartAnimation: boolean;
}

export function SocialIcons({ isStartAnimation }: ISocialIcons) {
  const dispatch = useDispatch();

  function onSetIsHover() {
    dispatch(landingActions.setIsHover());
  }

  return (
    <motion.div
      className={styles.SocialIcons__socialWrapper}
      initial="hidden"
      animate={isStartAnimation && 'show'}
      variants={menuList}
    >
      <motion.div variants={menuItem}>
        <a
          href="@pages/landing/menu/menu#"
          onMouseOver={onSetIsHover}
          onMouseOut={onSetIsHover}
          className={styles.SocialIcons__socialIcon}
        >
          <WhatsApp />
        </a>
      </motion.div>
      <motion.div variants={menuItem}>
        <a
          href="@pages/landing/menu/menu#"
          className={styles.SocialIcons__socialIcon}
          onMouseOver={onSetIsHover}
          onMouseOut={onSetIsHover}
        >
          <Instagram />
        </a>
      </motion.div>

      <motion.div variants={menuItem}>
        <a
          className={styles.SocialIcons__phone}
          onMouseOver={onSetIsHover}
          onMouseOut={onSetIsHover}
          href="tel:+79990037029"
        >
          <span>+7 999</span> 003-70-29
        </a>
      </motion.div>
    </motion.div>
  );
}
