import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { isAction } from '@reduxjs/toolkit';
import cn from 'classnames';
import gsap from 'gsap';

import { easingOut } from '@utils/customEase';

import { PAGES, PAGE_NAMES, PAGE_PROGRESS } from '@pages/guide/cards/items';
import styles from '@pages/guide/cards/styles.module.scss';

const OFFSET_PAGE = 1.5;
const HOVER_MULTIPLY_WIDTH = 0.1;

type TCardItemProps = {
  page: PAGE_PROGRESS;
  onSelect: (name: PAGE_NAMES) => void;
  index: number;
  setShowPage: (value: boolean) => void;
  setHoveredCard: ({ name, index }: { name: PAGE_NAMES; index: number }) => void;
  isHovered: boolean;
  isNext: boolean;
  isPrev: boolean;
};

export function CardItem({
  page,
  onSelect,
  index,
  setShowPage,
  setHoveredCard,
  isHovered,
  isNext,
  isPrev,
}: TCardItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const vw = window.innerWidth;
  const [isSelected, setSelectedPage] = useState(false);

  function getClassNames(page) {
    return cn(styles.Cards__itemWrapper, {
      [styles.Cards__itemWrapper_hover]: isHovered,
      [styles.Cards__itemWrapper_green]: 'green' === page.color,
      [styles.Cards__itemWrapper_orange]: 'orange' === page.color,
      [styles.Cards__itemWrapper_yellow]: 'yellow' === page.color,
      [styles.Cards__itemWrapper_progress]: page.inProgress,
      [styles.Cards__itemWrapper_selected]: isSelected,
    });
  }

  // Размеры при загрузке
  useEffect(() => {
    if (!ref.current) return;
    const itemWidth = vw / (PAGES.length + OFFSET_PAGE * 2);
    const x = (OFFSET_PAGE + index) * itemWidth;
    ref.current.style.clipPath = `polygon(${x}px 0%, ${x + itemWidth}px 0%, ${
      x + itemWidth
    }px 100%, ${x}px 100%)`;
  }, [ref, index, vw]);

  const onClick = useCallback(() => {
    if (page.inProgress || !ref.current) return;
    onSelect(page.name);
    setSelectedPage(true);
    ref.current.style.transition = `1s ease-out`;
    ref.current.style.clipPath = `polygon(0px 0%, 100% 0%, 100% 100%, 0px 100%)`;

    setTimeout(() => {
      setShowPage(true);
    }, 1000);
  }, [ref, page.inProgress, page.name, onSelect, setShowPage]);

  const handleHover = useCallback(() => {
    // if (page.inProgress || !ref.current) return;
    setHoveredCard({ name: page.name, index });
  }, [page, setHoveredCard, index]);

  useEffect(() => {
    // if (!ref.current || page.inProgress) return;
    if (!ref.current || isSelected) return;

    const itemWidth = vw / (PAGES.length + OFFSET_PAGE * 2);
    let xl = (OFFSET_PAGE + index) * itemWidth;
    let xr = (OFFSET_PAGE + index) * itemWidth + itemWidth;

    if (isHovered) {
      xl -= xl * HOVER_MULTIPLY_WIDTH;
      xr += xr * HOVER_MULTIPLY_WIDTH;
    } else if (isNext) {
      xl += xl * HOVER_MULTIPLY_WIDTH;
      xr += xr * HOVER_MULTIPLY_WIDTH;
    } else if (isPrev) {
      xl -= xl * HOVER_MULTIPLY_WIDTH;
      xr -= xr * HOVER_MULTIPLY_WIDTH;
    }

    ref.current.style.clipPath = `polygon(${xl}px 0%, ${xr}px 0%, ${xr}px 100%, ${xl}px 100%)`;
  }, [ref, vw, isHovered, index, page.inProgress, isNext, isPrev, isSelected]);

  return (
    <div ref={ref} className={getClassNames(page)} onClick={onClick}>
      <div onMouseOver={handleHover} className={styles.Cards__item}>
        <img src={page.img} alt="" />
        <div className={styles.Cards__itemOverlay} />
      </div>
    </div>
  );
}
