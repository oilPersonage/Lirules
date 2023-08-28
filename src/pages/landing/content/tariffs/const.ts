import arm from '@images/landing/arm.webp';
import armMobile from '@images/landing/armMobile.webp';
import lida from '@images/landing/lida.webp';
import lidaMobile from '@images/landing/lidaMobile.webp';
import lira from '@images/landing/lira.webp';
import liraMobile from '@images/landing/liraMobile.webp';

type list = {
  text: string;
  disabled?: boolean;
};

export interface ITariffList {
  id: TariffType;
  title: string;
  colorize: string;
  description: string;
  list: list[];
  top: boolean;
  img: string;
  mobileImg: string;
  price: number;
  text: string;
}

export enum TariffType {
  EASY,
  MIDDLE,
  HARD,
}

export const TARIFF_LIST: ITariffList[] = [
  {
    id: TariffType.EASY,
    title: 'ЛЮБ',
    colorize: 'ОПЫТНЫЙ',
    description: 'Самостоятельного обучение, без моего участия.',
    list: [
      {text: 'Доступ к 17 урокам навсегда'},
      {text: 'Коллекция пресетов для видео'},
      {text: 'Футажи', disabled: true},
      {text: 'Разборка домашних заданий', disabled: true},
      {text: 'Ответы на ваши вопросы онлайн', disabled: true},
    ],
    top: true,
    img: lira,
    mobileImg: liraMobile,
    price: 300,
    text: `https://wa.me/+79260388842?text=Добрый день Лидия. Хочу приобрести тариф «ЛЮБОПЫТНЫЙ»`,
  },
  {
    id: TariffType.MIDDLE,
    title: 'PRO',
    colorize: 'ДВИНУТЫЙ',
    description: 'Дистанционное обучение со мной',
    list: [
      {text: 'Тариф <span>«ЛЮБОПЫТНЫЙ»</span>'},
      {text: 'Теория по визуалу'},
      {text: 'Теория по копирайтингу'},
      {text: 'Теория по съемке историй'},
      {text: 'Разборка домашних заданий'},
      {text: 'Ответы на ваши вопросы онлайн'},
      {text: 'Футажи'},
      {text: 'Личное обучени со мной', disabled: true},
      {text: 'Предоставление допольнительных материалов', disabled: true},
      {text: 'Разбор видео рилса вашей мечты', disabled: true},
    ],
    top: true,
    img: lida,
    mobileImg: lidaMobile,
    price: 500,
    text: `https://wa.me/+79260388842?text=Добрый день Лидия. Хочу приобрести тариф «PROДВИНУТЫЙ»`,
  },
  {
    id: TariffType.HARD,
    title: 'ЗА',
    colorize: 'РУЧКУ',
    description: 'Обучение в формате воркшопа. Теория превращатся в практику!',
    list: [
      {text: 'Тариф <span>«ПРОДВИНУТЫЙ»</span> + обратная связь'},
      {text: 'Обучение личным присутствием 3-4 часа'},
      {text: 'Предоставление допольнительных материалов'},
      {text: 'Разбор видео рилса вашей мечты'},
    ],
    top: true,
    img: arm,
    mobileImg: armMobile,
    price: 500,
    text: `https://wa.me/+79260388842?text=Добрый день Лидия. Хочу приобрести тариф «ЗАРУЧКУ»`,
  },
];
