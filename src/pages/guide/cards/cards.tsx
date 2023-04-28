import { useRef, useState } from 'react';

import cn from 'classnames';

import { PAGES, PAGE_NAMES } from '@pages/guide/cards/items';

import styles from './styles.scss';

export function Cards({ onSelect, selectedPage }) {
  const pagesRef = useRef({});
  const [activePage, setActivePage] = useState<string | undefined>(PAGE_NAMES.THAILAND);

  function getClassNames(page) {
    return cn(styles.Cards__itemWrapper, {
      [styles.Cards__itemWrapper_active]: activePage === page.name,
      [styles.Cards__itemWrapper_green]: 'green' === page.color,
      [styles.Cards__itemWrapper_orange]: 'orange' === page.color,
      [styles.Cards__itemWrapper_yellow]: 'yellow' === page.color,
      [styles.Cards__itemWrapper_progress]: page.inProgress,
      [styles.Cards__itemWrapper_notSelected]: selectedPage !== page.name && selectedPage,
      [styles.Cards__itemWrapper_selected]: selectedPage === page.name,
    });
  }

  return (
    <div className={styles.Cards__wrapper}>
      <div className={styles.Cards}>
        {PAGES.map((page, index) => (
          <div key={index} className={getClassNames(page)}>
            <div className={styles.Cards__itemIcon}>{page.icon}</div>
            <div
              ref={(ref) => (pagesRef.current[page.name] = ref)}
              onMouseOver={() => setActivePage(page.name)}
              onClick={(e) =>
                !page.inProgress ? onSelect(pagesRef.current[page.name], page.name) : null
              }
              className={styles.Cards__item}
            >
              <div className={styles.Cards__itemContent}>
                <p className={styles.Cards__itemTitle}>{page.heading}</p>
                <p className={styles.Cards__itemDescription}>{page.text}</p>
              </div>
              <img src={page.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
