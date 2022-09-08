import {
  navigationItem,
  navigationList,
} from '@pages/landing/header/components/framerMotionConfig';
import { motion } from 'framer-motion';

import styles from './styles.scss';
import { INavigation } from './types';

const MenuList = ['Обо мне', 'Описание курса', 'Тарифы', 'Кейсы', 'Контакты'].reverse();

export function Navigation({ setIsHover, isStartAnimation }: INavigation) {
  return (
    <motion.ul
      className={styles.Navigation}
      initial="hidden"
      animate={isStartAnimation && 'show'}
      variants={navigationList}
    >
      {MenuList.map((menu, index) => (
        <motion.li
          key={index}
          className={styles.Navigation__item}
          onMouseLeave={() => setIsHover(false)}
          onMouseOver={() => setIsHover(true)}
          variants={navigationItem}
        >
          <p>{menu}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
