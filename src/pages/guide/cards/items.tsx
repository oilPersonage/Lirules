import CrimeaImg from '@images/ways/crimea/crimea.webp';
import ThailandImg from '@images/ways/railay.webp';
import CapadociaImg from '@images/ways/turkey/capadocia.webp';

export enum PAGE_NAMES {
  THAILAND = 'THAILAND',
  TURKEY = 'TURKEY',
  CRIMEA = 'CRIMEA',
  NONAME = 'NONAME',
}

export type PAGE_PROGRESS = {
  name: PAGE_NAMES;
  img: string;
  text: string;
  inProgress?: boolean;
  heading: string;
  color: 'green' | 'yellow' | 'orange';
};

export const PAGES: PAGE_PROGRESS[] = [
  {
    name: PAGE_NAMES.NONAME,
    heading: 'НОВОЕ ПУТЕШЕСТВИЕ',
    img: CrimeaImg,
    inProgress: true,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные маршруты',
  },
  {
    name: PAGE_NAMES.TURKEY,
    heading: 'ТУРЦИЯ',
    img: CapadociaImg,
    text: 'Мы продумываем для вас гениальные маршруты',
    color: 'orange',
    inProgress: true,
  },
  {
    name: PAGE_NAMES.THAILAND,
    heading: 'ТАЙЛАНД',
    img: ThailandImg,
    color: 'green',
    text: 'Откройте для себя красоту восточной экзотики',
  },
  {
    name: PAGE_NAMES.CRIMEA,
    heading: 'КРЫМ',
    img: CrimeaImg,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные маршруты',
    inProgress: true,
  },
  {
    name: PAGE_NAMES.NONAME,
    heading: 'НОВОЕ ПУТЕШЕСТВИЕ',
    img: CrimeaImg,
    inProgress: true,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные маршруты',
  },
];
