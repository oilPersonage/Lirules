import { useState } from 'react';

import { PAGES, PAGE_NAMES } from '@pages/guide/cards/items';
import { CardItem } from '@pages/guide/cards/CardItem/cardItem';
import { CardText } from '@pages/guide/cards/CardText/CardText';

import styles from './styles.module.scss';

export function Cards({ onSelect, setShowPage, selectedPage }) {
  const [hoveredCard, setHoveredCard] = useState<{ name: PAGE_NAMES; index: number }>({
    name: PAGE_NAMES.THAILAND,
    index: PAGES.findIndex((page) => page.name === PAGE_NAMES.THAILAND),
  });

  const { name, index: hoveredIndex } = hoveredCard;

  return (
    <div className={styles.Cards__wrapper}>
      <div className={styles.Cards}>
        {PAGES.map((page, index) => (
          <CardItem
            key={index}
            page={page}
            isNext={index > hoveredIndex}
            isPrev={index < hoveredIndex}
            isHovered={name === page.name}
            setHoveredCard={setHoveredCard}
            onSelect={onSelect}
            setShowPage={setShowPage}
            index={index}
          />
        ))}
      </div>
      <CardText hoveredCard={hoveredCard} selectedPage={selectedPage} />
    </div>
  );
}
