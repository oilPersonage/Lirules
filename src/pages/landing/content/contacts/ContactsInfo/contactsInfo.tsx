import { ReactElement, useMemo, useState } from 'react';

import { useModal } from '@hooks/useModal';
import Location from '@icons/location.svg';
import cn from 'classnames';

import { Modal } from '@components/Modal';

import { Confidentiality } from './docs/confidentiality';
import { Offer } from './docs/offer';
import { Terms } from './docs/terms';
import styles from './styles.scss';

enum LINK_TYPE {
  TERMS = 'terms',
  OFFER = 'offer',
  CONF = 'confidentiality',
}

interface ILink {
  type: LINK_TYPE;
  text: string;
  component: ReactElement;
}

const LINKS: ILink[] = [
  { type: LINK_TYPE.TERMS, text: 'Пользовательское соглашение', component: <Terms /> },
  { type: LINK_TYPE.OFFER, text: 'Договор оферта', component: <Offer /> },
  { type: LINK_TYPE.CONF, text: 'Политика конфиденциальности', component: <Confidentiality /> },
];

export function ContactsInfo() {
  const { isShowing, toggle } = useModal();
  const [activeLink, setActiveLink] = useState<LINK_TYPE | undefined>(undefined);

  const ModalContent = useMemo(
    () => LINKS.find((el) => el.type === activeLink)?.component,
    [activeLink]
  );

  function onToggleLink(linkType?: LINK_TYPE) {
    setActiveLink(linkType);
    toggle();
  }

  return (
    <div className={styles.Info}>
      <div className={styles.Info__box}>
        <div className={styles.Info__item}>ИП Домрачева Лидия Андреевна</div>
        <div className={styles.Info__item}>ИНН: 000000000000</div>
        <div className={styles.Info__item}>ОГРНИП: 320595800061000</div>
      </div>
      <div className={cn(styles.Info__box, styles.Info__box_location)}>
        <Location className={styles.Info__Icon} />
        <a
          className={styles.Info__item}
          target="__blank"
          href="https://yandex.ru/maps/11069/stavropol-krai/house/stepnaya_ulitsa_3b/YEoYdwdmTkcPQFpufXx5cn5mYA==/?ll=43.106728%2C44.083254&z=17.23"
        >
          <span>г. Пятигорск ул. Тара ля ля трусиля 888-888</span>
          <span>ул. Тара ля ля трусиля</span>
          <span>888-888</span>
        </a>
      </div>
      <div className={styles.Info__box}>
        {LINKS.map((link) => (
          <div
            key={link.type}
            className={styles.Info__item}
            onClick={() => onToggleLink(link.type)}
          >
            <p>{link.text}</p>
          </div>
        ))}
      </div>
      <Modal isShowing={isShowing} onClose={() => onToggleLink()} size="lg" controls>
        {ModalContent}
      </Modal>
    </div>
  );
}
