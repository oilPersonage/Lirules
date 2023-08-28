import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Instagram } from '@icons/intagram.svg';
import { ReactComponent as WhatsApp } from '@icons/whatsapp.svg';
import { motion } from 'framer-motion';

import { landingSelectors } from '@reducers/landing';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';

import { menuItem, menuList } from '@pages/landing/header/framerMotionConfig';

import styles from './styles.module.scss';

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
