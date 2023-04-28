import { ReactNode } from 'react';

import MonkeyIcon from '@icons/monkeyBig2.svg';
import TurkeyIcon from '@icons/mosque.svg';
import CrimeaImg from '@images/ways/crimea/crimea.jpg';
import ThailandImg from '@images/ways/railay.png';
import CapadociaImg from '@images/ways/turkey/capadocia.jpg';

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
  icon?: ReactNode;
  inProgress?: boolean;
  heading: string;
  color: 'green' | 'yellow' | 'orange';
};

export const PAGES: PAGE_PROGRESS[] = [
  {
    name: PAGE_NAMES.NONAME,
    heading: 'NO NAME',
    img: CrimeaImg,
    inProgress: true,
    icon: <MonkeyIcon />,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные идеи',
  },
  {
    name: PAGE_NAMES.TURKEY,
    heading: 'ТУРЦИЯ',
    img: CapadociaImg,
    icon: <TurkeyIcon />,
    text: 'Мы продумываем для вас гениальные идеи',
    color: 'orange',
    // inProgress: true,
  },
  {
    name: PAGE_NAMES.THAILAND,
    heading: 'ТАЙЛАНД',
    img: ThailandImg,
    icon: <MonkeyIcon />,
    color: 'green',
    text: 'Откройте для себя красоту восточной экзотики',
  },
  {
    name: PAGE_NAMES.CRIMEA,
    heading: 'КРЫМ',
    img: CrimeaImg,
    // inProgress: true,
    icon: <MonkeyIcon />,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные идеи',
  },
  {
    name: PAGE_NAMES.NONAME,
    heading: 'NO NAME',
    img: CrimeaImg,
    icon: <MonkeyIcon />,
    inProgress: true,
    color: 'yellow',
    text: 'Мы продумываем для вас гениальные идеи',
  },
];
