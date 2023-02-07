import bg from '@images/landing/bg.webp';
import lensB from '@images/landing/lens-b.webp';
import lensM from '@images/landing/lens-m.webp';
import lensVB from '@images/landing/lens-wb.webp';
import lirules from '@images/landing/lirules.webp';
import mobileHeader2 from '@images/landing/mobileHeader3.png';
import phone from '@images/landing/phone2.webp';
import balloons from '@images/landing/sphere.webp';
import cn from 'classnames';

import styles from './styles.scss';

export interface IParallaxItem {
  aspect: number;
  img?: string;
  className: string;
  text?: boolean;
  video?: string;
  mobileImg?: string;
}

export const parallaxItems: IParallaxItem[] = [
  {
    aspect: 50,
    img: bg,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_bg),
  },
  {
    aspect: 35,
    img: balloons,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_balloons),
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
    mobileImg: mobileHeader2,
  },
  {
    aspect: 10,
    img: phone,
    className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_phone),
  },
  // {
  //   aspect: 10,
  //   text: true,
  //   className: cn(styles.Parallax__textWrapper, styles.Parallax__textWrapper_title),
  // },
  // {
  //   aspect: 10,
  //   video: '150033726',
  //   className: cn(styles.Parallax__imgWrapper, styles.Parallax__imgWrapper_video),
  // },
];
