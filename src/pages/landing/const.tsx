import { About } from '@pages/landing/content/about';
import { Cases } from '@pages/landing/content/cases';
import { Course } from '@pages/landing/content/course';
import { Tariffs } from '@pages/landing/content/tariffs/tariffs';

export const LANDING_PAGES = [
  {
    component: About,
    title: 'Обо мне',
    text: 'Информация обо мне для вас',
    id: 'about',
  },
  {
    component: Course,
    title: 'Описание курса',
    text: 'Краткое описание прохождения курса',
    id: 'course',
  },
  {
    component: Tariffs,
    id: 'tariffs',
    title: 'Тарифы',
    text: 'Информация о ценности данного курса',
  },
  { component: Cases, id: 'cases', title: 'Кейсы', text: 'Работы моих учеников и отзывы' },
  // { component: Contacts, id: 'contacts', title: 'Контакты', text: 'Контактная информация' },
];
