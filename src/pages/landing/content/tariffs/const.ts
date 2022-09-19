import arm from '@assets/images/landing/arm.jpg';
import lida from '@assets/images/landing/lida.jpg';
import lira from '@assets/images/landing/lira.jpg';

type list = {
  text: string;
  disabled?: boolean;
};

interface ITariffList {
  title: string;
  colorize: string;
  description: string;
  list: list[];
  top: boolean;
  img: string;
}

export const TARIFF_LIST: ITariffList[] = [
  {
    title: 'ЛЮБ',
    colorize: 'ОПЫТНЫЙ',
    description: 'Текс короткого описания буквальнов пару строк для красоты',
    list: [
      { text: 'Первый текст' },
      { text: 'Первый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст', disabled: true },
    ],
    top: true,
    img: lira,
  },
  {
    title: 'PRO',
    colorize: 'ДВИНУТЫЙ',
    description: 'Текс короткого описания буквальнов пару строк для красоты',
    list: [
      { text: 'Первый текст' },
      { text: 'Первый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст', disabled: true },
      { text: 'Первый текст', disabled: true },
      { text: 'Первый текст', disabled: true },
    ],
    top: true,
    img: lida,
  },
  {
    title: 'ЗА',
    colorize: 'РУЧКУ',
    description: 'Текс короткого описания буквальнов пару строк для красоты',
    list: [
      { text: 'Первый текст' },
      { text: 'Первый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст Первый текст Первый текстПервый текст' },
      { text: 'Первый текст', disabled: true },
    ],
    top: true,
    img: arm,
  },
];
