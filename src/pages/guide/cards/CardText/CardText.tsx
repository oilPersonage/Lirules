import { useEffect, useRef } from 'react';

import cn from 'classnames';

import { PAGES } from '@pages/guide/cards/items';

import styles from './styles.module.scss';

const CARD_HEIGHT = 99;

export function CardText({ hoveredCard, selectedPage }) {
  const refScroll = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!hoveredCard || !refScroll.current) return;
    refScroll.current.style.transform = `matrix(1, 0, 0, 1, 0, -${
      hoveredCard.index * CARD_HEIGHT
    })`;
  }, [hoveredCard]);

  return (
    <div className={cn(styles.Content, { [styles.Content_hide]: selectedPage })}>
      <div className={styles.Content__scroll} ref={refScroll}>
        {PAGES.map(({ heading, text }, index) => (
          <div
            ref={(ref) => (ref ? (elementRefs.current[index] = ref) : null)}
            key={index}
            className={cn(styles.Content__item, {
              [styles.Content__item_active]: index === hoveredCard?.index,
            })}
          >
            <p className={styles.Content__title}>{heading}</p>
            <p className={styles.Content__description}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
