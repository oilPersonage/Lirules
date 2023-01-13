import { useState } from 'react';

import { useMobileDetect } from '@hooks/useMobileDetect';
import cn from 'classnames';

import { Row } from '@components/Grid/grid';
import { LandingTitle } from '@components/LandingTitle';
import { Modal } from '@components/Modal';

import { ILandingPage } from '@pages/landing/content/content';
import { CourseItem } from '@pages/landing/content/course/item';

import { courseData } from './data';
import styles from './styles.scss';

export function Course({ index, id }: ILandingPage) {
  return (
    <div className={styles.Course} id={id}>
      <Row>
        <LandingTitle
          title="Чему Вы"
          space
          colorText="научитесь?"
          className={styles.Course__heading}
        />
      </Row>
      <div className={styles.Course__wrapper}>
        {courseData.map((el, index) => (
          <CourseItem el={el} index={index} />
        ))}
      </div>
    </div>
  );
}
