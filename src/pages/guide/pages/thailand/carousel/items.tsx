import { ReactNode } from 'react';

import CloudsFront from '@images/ways/front-cloud.webp';
import Front from '@images/ways/front.webp';
import Back from '@images/ways/railay back.webp';
import Second from '@images/ways/thaland/krabi2.webp';
import img3 from '@images/ways/thaland/krabi3.webp';

import {
  description1,
  TDescription,
} from '@pages/guide/pages/thailand/carousel/descriptions/description1';

export type TCarouselItem = {
  heading?: string;
  imgFront?: string;
  imgMiddle?: string;
  imgBack: string;
  description: ({ isStartAnimate, isPrev }: TDescription) => ReactNode;
};
export type TCarouselItems = TCarouselItem[];

export const carouselItems: TCarouselItems = [
  {
    heading: 'THAILAND',
    imgFront: CloudsFront,
    imgMiddle: Front,
    imgBack: Back,
    description: ({ isStartAnimate, isPrev }: TDescription) =>
      description1({ isStartAnimate, isPrev }),
  },
  {
    imgBack: Second,
    description: ({ isStartAnimate, isPrev }: TDescription) => (
      <p>
        <span>Тайланд</span> - это место, где душа находит свободу в объятиях красивейшей природы и
        романтики, царящей в воздухе. Здесь каждый может почувствовать нежность и любовь в глубине
        своей души, исследуя магические уголки этой прекрасной страны вместе со своей второй
        половинкой.
      </p>
    ),
  },
  {
    imgBack: img3,
    description: ({ isStartAnimate, isPrev }: TDescription) => (
      <p>
        <span>Тайланд</span> - это место, где душа находит свободу в объятиях красивейшей природы и
        романтики, царящей в воздухе. Здесь каждый может почувствовать нежность и любовь в глубине
        своей души, исследуя магические уголки этой прекрасной страны вместе со своей второй
        половинкой.
      </p>
    ),
  },
];
