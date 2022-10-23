import { BANK, BIK, EMAIL, INN, IP_NAME, KS, OGRNIP, RS } from 'app_settings';

import { Heading } from '@components/Title';

import { OFFER_DATA } from '@pages/landing/content/contacts/ContactsInfo/docs/const';
import { RenderDocContent } from '@pages/landing/content/contacts/ContactsInfo/docs/renderDocContent';

import styles from './styles.scss';

export function Offer() {
  return (
    <div className={styles.Docs}>
      <Heading.H2>ДОГОВОР ОФЕРТЫ</Heading.H2>

      <RenderDocContent data={OFFER_DATA} />

      <Heading.H4>РЕКВИЗИТЫ:</Heading.H4>
      <ul className={styles.Docs__requisites}>
        <li>{IP_NAME}</li>
        <li>
          <span className={styles.Docs__number}>ИНН:</span> {INN}
        </li>
        <li>
          <span className={styles.Docs__number}>ОГРНИП:</span> {OGRNIP}
        </li>
        <li>
          <span className={styles.Docs__number}>Р/С:</span> {RS}
        </li>
        <li>
          <span className={styles.Docs__number}>Банк:</span> {BANK}
        </li>
        <li>
          <span className={styles.Docs__number}>БИК:</span> {BIK}
        </li>
        <li>
          <span className={styles.Docs__number}>К/С:</span> {KS}
        </li>
        <li>
          <span className={styles.Docs__number}>Адрес для корреспонденции:</span> {EMAIL}
        </li>
      </ul>
    </div>
  );
}
