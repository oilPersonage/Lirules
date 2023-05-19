import cn from 'classnames';

import styles from '@pages/guide/pages/thailand/carousel/styles.scss';

import { Cards } from './cards';

export type TDescription = {
  isStartAnimate: boolean;
  isPrev: boolean;
};

export function description1({ isStartAnimate, isPrev }: TDescription) {
  return (
    <div>
      <p
        className={cn(styles.Item__title, {
          [styles.Item__title_animate]: isStartAnimate && !isPrev,
        })}
      >
        <span>Путеводитель</span> по <span>Таиланду</span>, для тех, кто не умеет сидеть на месте!
      </p>
      <Cards isStartAnimate={isStartAnimate} isPrev={isPrev} />
    </div>
  );
}
