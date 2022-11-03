import { Row } from '@components/Grid/grid';
import { LandingTitle } from '@components/LandingTitle';

import { Carousel } from '@pages/landing/content/about/сarousel';

import styles from './styles.scss';

const PARTNER_LIST = [
  { title: 'Плаза 5 звезд', link: 'https://www.instagram.com/plazaspahotels/' },
  { title: 'Поляна сказок', link: 'https://www.instagram.com/polyana_skazok_eco/' },
  { title: 'Дава @dava', link: 'https://www.secure.instagram.com/dombay_winter_hall/' },
  { title: 'Кетрин форс', link: 'https://www.secure.instagram.com/dombay_winter_hall/' },
  { title: 'Малева', link: 'https://www.secure.instagram.com/dombay_winter_hall/' },
  { title: 'Dombay Winter Hall', link: 'https://www.secure.instagram.com/dombay_winter_hall/' },
  { title: 'Mriya Resort & Spa', link: 'https://www.instagram.com/mriya_resort/' },
  { title: 'Нарлен', link: 'https://www.instagram.com/narlen_hotel/' },
  { title: 'The Garden', link: 'https://www.instagram.com/thegarden.glamping/' },
];

export function About() {
  return (
    <div className={styles.About}>
      <Row>
        <LandingTitle title="ABOUT." colorText="ME" />
        <h3 className={styles.About__description}>
          Благодаря навыку съёмки, активно путешествую, зарабатываю на любимом деле и заявляю в
          новых городах и странах о себе!
        </h3>

        <Carousel />

        <div className={styles.About__partner}>
          <p className={styles.About__partnerTitle}>Со мной сотрудничали</p>
          <div className={styles.About__partnerWrapper}>
            <ul className={styles.About__partnerList}>
              {PARTNER_LIST.map((partner, index) => (
                <li className={styles.About__partnerItem} key={index}>
                  <a href={partner.link} target="_blank" rel="noreferrer">
                    {partner.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Row>
    </div>
  );
}
