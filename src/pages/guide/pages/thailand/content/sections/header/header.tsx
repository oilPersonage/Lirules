import { ReactComponent as Budda } from '@icons/budda.svg';
import { ReactComponent as MouseDown } from '@icons/mouse-down.svg';
import CloudsFront from '@images/ways/front-cloud.webp';
import Front from '@images/ways/front.webp';
import Back from '@images/ways/railay back.webp';
import cn from 'classnames';

import { GreenButton } from '@components/GreenButton';

import { Cards } from '@pages/guide/pages/thailand/carousel/descriptions/cards';
import { ContentProps } from '@pages/guide/pages/thailand/content/content';

import styles from './styles.module.scss';

export function ThailandHeader({ refs, isStartAnimate }: ContentProps) {
  const { buttonRef, headingRef } = refs;
  return (
    <div className={styles.Header}>
      <div className={styles.Header__absolute}>
        <img src={Back} alt="" />
      </div>
      <div className={styles.Header__heading} ref={headingRef}>
        THAILAND
      </div>
      <div className={styles.Header__absolute}>
        <img src={Front} alt="" />
      </div>
      <div className={cn(styles.Header__absolute, styles.Header__absolute_front)}>
        <img src={CloudsFront} alt="" />
      </div>
      <div className={styles.Header__content}>
        <div>
          <p className={cn(styles.Header__title)}>
            <span>Путеводитель</span> по <span>Таиланду</span>, для тех, кто не умеет сидеть на
            месте!
          </p>
          <Cards isStartAnimate={isStartAnimate} isPrev={false} />
        </div>
        <div ref={buttonRef}>
          <GreenButton text="Приобрести" icon={Budda} />
        </div>
      </div>
      <div className={styles.Header__mouseDown}>
        <MouseDown />
      </div>
    </div>
  );
}
