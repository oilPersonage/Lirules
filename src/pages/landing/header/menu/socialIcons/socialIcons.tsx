import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Instagram from '@icons/intagram.svg';
import WhatsApp from '@icons/whatsapp.svg';
import { logDOM } from '@testing-library/react';
import { motion } from 'framer-motion';

import { landingActions, landingSelectors } from '@reducers/landing';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';

import { menuItem, menuList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.scss';

const LINKS = [
  { icon: WhatsApp, link: 'https://wa.me/+79260388842' },
  { icon: Instagram, link: 'https://instagram.com/lirules?utm_medium=copy_link' },
];

export const SocialIcons = memo(() => {
  const { isStartAnimation } = useSelector(landingSelectors.landing);

  return (
    <motion.div
      className={styles.SocialIcons__socialWrapper}
      initial="hidden"
      animate={isStartAnimation && 'show'}
      variants={menuList}
    >
      {LINKS.map((link) => (
        <motion.div key={link.link} variants={menuItem}>
          <a
            onMouseEnter={onChangeCursorDot}
            onMouseLeave={onChangeCursorDot}
            href={link.link}
            target="_blank"
            className={styles.SocialIcons__socialIcon}
            rel="noreferrer"
          >
            <link.icon />
          </a>
        </motion.div>
      ))}

      {/*<motion.div variants={menuItem}>*/}
      {/*  <a*/}
      {/*    className={styles.SocialIcons__phone}*/}
      {/*    onMouseOver={onSetIsHover}*/}
      {/*    onMouseLeave={onSetIsHover}*/}
      {/*    href="tel:+79990037029"*/}
      {/*  >*/}
      {/*    <span>+7 999</span> 003-70-29*/}
      {/*  </a>*/}
      {/*</motion.div>*/}
    </motion.div>
  );
});
