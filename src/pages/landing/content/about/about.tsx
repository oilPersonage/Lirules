import { LandingTitle } from '@components/LandingTitle';

import styles from './styles.scss';

const PARTNER_LIST = [
  'Трала ла ла',
  'Ютубблоггер',
  'Какая-то компания',
  'Трала ла ла',
  'Ютубблоггер',
  'Какая-то компания',
];

export function About() {
  return (
    <div className={styles.About}>
      <LandingTitle title="ABOUT." colorText="ME" />
      <h3 className={styles.About__description}>
        О великая, всеми обожаемая, самая прекрасная, добрая и талантливая девица. Снимает самые
        бомбезные видеоролики
      </h3>
      <div className={styles.About__content} />
      <div className={styles.About__partnerWrapper}>
        <p className={styles.About__partnerTitle}>Со мной сотрудничали</p>
        <ul className={styles.About__partnerList}>
          {PARTNER_LIST.map((partner, index) => (
            <li className={styles.About__partnerItem} key={index}>
              <p>{partner}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
