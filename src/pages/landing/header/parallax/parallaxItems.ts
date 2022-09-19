import cn from 'classnames';

import bg from '@assets/images/landing/bg.png';
import lensB from '@assets/images/landing/lens-b.png';
import lensM from '@assets/images/landing/lens-m.png';
import lensS from '@assets/images/landing/lens-s.png';
import lensVB from '@assets/images/landing/lens-wb.png';
import lirules from '@assets/images/landing/lirules.png';
import phone from '@assets/images/landing/phone.png';
import balloons from '@assets/images/landing/sphere.png';

import styles from './styles.scss';

export interface IParallaxItem {
  aspect: number;
  img?: string;
  className: string;
  text?: boolean;
  video?: string;
}

export const parallaxItems: IParallaxItem[] = [
  { aspect: 50, img: bg, className: styles.Parallax__imgWrapper },
  {
    aspect: 35,
    img: balloons,
    className: styles.Parallax__imgWrapper,
  },
  {
    aspect: 100,
    img: lensVB,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_lensVB),
  },
  {
    aspect: 50,
    img: lensB,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_lensB),
  },
  {
    aspect: 50,
    img: lensM,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_lensM),
  },
  // {
  //   aspect: 5,
  //   img: lensS,
  //   className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_lensS),
  // },
  {
    aspect: 25,
    img: lirules,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_lirules),
  },
  {
    aspect: 10,
    img: phone,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_phone),
  },
  {
    aspect: 10,
    text: true,
    className: cn(styles.Parallax__textWrapper, styles.Parallax__textWrapper_title),
  },
  {
    aspect: 10,
    video: '150033726',
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_video),
  },
];
