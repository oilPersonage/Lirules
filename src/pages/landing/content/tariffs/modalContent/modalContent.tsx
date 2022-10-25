import cn from 'classnames';

import { ITariffList } from '../const';
import styles from './styles.scss';

export function ModalContent({ activeTariff }: { activeTariff: ITariffList }) {
  return (
    <div className={styles.Content}>
      <div className={styles.Content__title}>
        {activeTariff.title}
        {activeTariff.colorize}
      </div>
      <p className={styles.Content__description}>{activeTariff.description}</p>

      <ul className={styles.Content__list}>
        {activeTariff.list.map((el, index) => (
          <li
            key={index}
            className={cn(styles.Content__listItem, {
              [styles.Content__listItem_disabled]: el.disabled,
            })}
          >
            <div className={styles.Content__rhombus}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <p dangerouslySetInnerHTML={{ __html: el.text }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
