import { useDispatch, useSelector } from 'react-redux';

import Vimeo from '@u-wave/react-vimeo';
import cn from 'classnames';

import { landingActions, landingSelectors } from '@reducers/landing';

import { IParallaxItem, parallaxItems } from './parallaxItems';
import { ParallaxText } from './parallaxText';
import styles from './styles.scss';

interface IParallax {
  pos: number[];
  mousePos: number[];
  isHover: boolean;
  setIsHover: (boolean) => void;
}

export function Parallax({ pos, mousePos, isHover, setIsHover }: IParallax) {
  const isStartAnimation = useSelector(landingSelectors.isStartAnimation);
  const dispatch = useDispatch();

  const transformCursor = `translate(${mousePos[0]}px, ${mousePos[1]}px)`;

  function setTransformParallaxItem(item: IParallaxItem) {
    return `translate( ${pos[0] * item.aspect}px, ${pos[1] * item.aspect}px)`;
  }

  function setStartAnimation() {
    const overflow = document.getElementById('overflow');
    overflow?.classList.add('remove');

    setTimeout(() => {
      overflow?.classList.add('hide');
    }, 1000);
    dispatch(landingActions.startAnimation());
  }

  return (
    <div className={styles.Parallax__images}>
      <div className={styles.Parallax__cursor} style={{ transform: transformCursor }}>
        <span
          className={cn(styles.Parallax__cursorDot, {
            [styles.Parallax__cursorDot_active]: isHover,
          })}
        />
      </div>

      {parallaxItems.map((item, index) => (
        <div
          key={index}
          className={item.className}
          style={{ transform: setTransformParallaxItem(item) }}
        >
          {item.img && <img src={item.img} className={styles.Parallax__img} alt="" />}
          {item.text && (
            <ParallaxText setIsHover={setIsHover} isStartAnimation={isStartAnimation} />
          )}
          {item.video && (
            <div className={styles.Parallax__video}>
              <div className={styles.Parallax__videoWrapper}>
                <Vimeo
                  video={item.video}
                  showTitle={false}
                  showPortrait={false}
                  controls={false}
                  loop={true}
                  // onPlay={setStartAnimation}
                  onReady={setStartAnimation}
                  // autoplay
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
