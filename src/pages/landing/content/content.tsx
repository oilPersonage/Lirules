import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useOnScrollLanding } from '@hooks/useOnScrollLanding';

import { landingActions } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { About } from '@pages/landing/content/about';
import { Cases } from '@pages/landing/content/cases';
import { Contacts } from '@pages/landing/content/contacts';
import { Course } from '@pages/landing/content/course';
import { Tariffs } from '@pages/landing/content/tariffs/tariffs';
import { LandingHeader } from '@pages/landing/header';
import { Cursor } from '@pages/landing/header/cursor';
import { ParallaxText } from '@pages/landing/header/parallax/parallaxText';
import styles from '@pages/landing/styles.scss';

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
  { component: Contacts, id: 'contacts', title: 'Контакты', text: 'Контактная информация' },
];

export interface ILandingPage {
  index: number;
  id: string;
}

export default function LandingContent() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const containerBGRef = useRef(null);
  const containerTextRef = useRef(null);
  const { setSpeed, onScroll } = useOnScrollLanding(containerRef, containerBGRef, containerTextRef);

  useEffect(() => {
    if (isNotNil(containerRef.current) && isNotNil(setSpeed)) {
      dispatch(landingActions.setSpeedFunction(setSpeed));
    }
  }, [dispatch, setSpeed, containerRef]);

  return (
    <div className={styles.Landing__content}>
      <Cursor />
      <LandingHeader />
      <div ref={containerTextRef} className={styles.Landing__textWrapper}>
        <ParallaxText />
      </div>
      <div className={styles.Landing__background} ref={containerBGRef} />
      <div className={styles.Landing__scrollWrapper} ref={containerRef} onScroll={onScroll}>
        {LANDING_PAGES.map((Page, index) => (
          <div key={index} className={styles.Landing__page}>
            <Page.component index={index} id={Page.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
