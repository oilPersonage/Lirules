import { useState } from 'react';

import { useMobileDetect } from '@hooks/useMobileDetect';

import { Popup } from '@components/Popup';

import { ICourseItem } from '@pages/landing/content/course/data';
import styles from '@pages/landing/content/course/styles.scss';

interface ICourse {
  el: ICourseItem;
  index: number;
}

export function CourseItem({ el, index }: ICourse) {
  const isMobile = useMobileDetect();
  const [modalContent, setModalContent] = useState<[string] | null>(null);

  function handleOpen(desc) {
    setModalContent((state) => (state === desc ? null : desc));
  }

  return (
    <div className={styles.Course__item}>
      <p className={styles.Course__number}>{index + 1}</p>
      <div>
        <h4>
          {el.title}
          {el.interactive && <span onClick={() => handleOpen(el.descr)}>Подробнее</span>}
        </h4>
      </div>
      {isMobile ? (
        <ul className={styles.Course__list}>
          {el.descr.map((el, index) => (
            <li key={index} className={styles.Course__modalText}>
              {el}
            </li>
          ))}
        </ul>
      ) : (
        <Popup isOpen={!!modalContent} toggle={() => handleOpen(null)}>
          <ul>
            {modalContent?.map((el, index) => (
              <li key={index} className={styles.Course__modalText}>
                {el}
              </li>
            ))}
          </ul>
        </Popup>
      )}
    </div>
  );
}
