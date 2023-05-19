import { useEffect, useRef } from 'react';

import Beach from '@icons/beah.svg';
import Eat from '@icons/eat.svg';
import Fest from '@icons/fest.svg';
import Money from '@icons/money.svg';
import Path from '@icons/path.svg';
import gsap from 'gsap';

import { easingInOut } from '@utils/customEase';

import { TDescription } from '@pages/guide/pages/thailand/carousel/descriptions/description1';

import styles from './styles.scss';

const items = [
  { icon: <Path />, text: 'Как добраться до места' },
  { icon: <Eat />, text: 'Лучшие рестораны и заведения' },
  { icon: <Beach />, text: 'Пляжи на любой вкус и цвет' },
  { icon: <Fest />, text: 'Фестивали и мероприятия' },
  { icon: <Money />, text: 'Сколько стоит' },
];

export function Cards({ isStartAnimate, isPrev }: TDescription) {
  const cardsRef = useRef<any>({ cards: [] });

  useEffect(() => {
    if (isPrev) {
      gsap.fromTo(
        cardsRef.current.cards,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -12,
          stagger: 0.1,
          duration: 0.4,
          ease: easingInOut,
        }
      ); // <
    } else if (isStartAnimate) {
      gsap.fromTo(
        cardsRef.current.cards,
        {
          opacity: 0,
          y: -12,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          stagger: 0.1,
          duration: 0.6,
          ease: easingInOut,
        }
      ); // <- normal selector text, automatically scoped to myRefOrElement
    }
  }, [isStartAnimate, cardsRef, isPrev]);

  return (
    <div className={styles.Cards}>
      {items.map((el) => (
        <div
          ref={(ref) =>
            !cardsRef.current.cards.some((el) => el === ref)
              ? cardsRef.current.cards.push(ref)
              : null
          }
          key={el.text}
          className={styles.Cards__item}
        >
          <div className={styles.Cards__icon}>{el.icon}</div>
          <p className={styles.Cards__text}>{el.text}</p>
        </div>
      ))}
    </div>
  );
}
