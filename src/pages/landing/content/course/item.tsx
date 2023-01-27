import { useMobileDetect } from '@hooks/useMobileDetect';

import { ICourseItem } from '@pages/landing/content/course/data';
import styles from '@pages/landing/content/course/styles.scss';

interface ICourse {
  el: ICourseItem;
  index: number;
}

export function CourseItem({ el, index }: ICourse) {
  return (
    <div className={styles.Course__item}>
      <p className={styles.Course__number}>{index + 1}</p>
      <div>
        <h4>
          {el.title}
          {el.bonus && <span>{el.bonus}</span>}
        </h4>
        {el.descr.length > 0 && (
          <ul className={styles.Course__descList}>
            {el.descr.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
