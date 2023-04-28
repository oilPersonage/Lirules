import Google from '@icons/google.svg';
import Instagram from '@icons/intagram.svg';
import Whatsapp from '@icons/whatsapp.svg';

import styles from './styles.scss';

const LINKS = [
  { name: 'inst', icon: Instagram, link: 'https://instagram.com/lirules?utm_medium=copy_link' },
  { name: 'ws', icon: Whatsapp, link: 'https://wa.me/+79260388842' },
  {
    name: 'google',
    icon: Google,
    link: 'https://www.google.com/maps/place/%D0%A2%D0%B0%D0%B8%D0%BB%D0%B0%D0%BD%D0%B4/@13.0390905,101.490104,6z/data=!3m1!4b1!4m6!3m5!1s0x304d8df747424db1:0x9ed72c880757e802!8m2!3d15.870032!4d100.992541!16zL20vMDdmMXg',
  },
];

export function Contacts() {
  return (
    <div className={styles.Contacts}>
      <div className={styles.Contacts__social}>
        {LINKS.map((El) => (
          <a
            target="_blank"
            key={El.link}
            className={styles.Contacts__socialItem}
            href={El.link}
            rel="noreferrer"
          >
            <El.icon />
          </a>
        ))}
      </div>
    </div>
  );
}
