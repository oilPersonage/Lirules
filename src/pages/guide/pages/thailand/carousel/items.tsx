import { ReactNode } from 'react';

import CloudsFront from '@images/ways/front-cloud.png';
import Front from '@images/ways/front.png';
import Back from '@images/ways/railay back.png';
import Second from '@images/ways/thaland/krabi2.png';
import img3 from '@images/ways/thaland/krabi3.png';

export type TCarouselItems = {
  heading?: string;
  imgFront?: string;
  imgMiddle?: string;
  imgBack: string;
  description: ReactNode;
}[];

export const carouselItems: TCarouselItems = [
  {
    heading: 'THAILAND',
    imgFront: CloudsFront,
    imgMiddle: Front,
    imgBack: Back,
    description: (
      <p>
        <span>Тайланд</span> - это место, где душа находит свободу в объятиях красивейшей природы и
        романтики, царящей в воздухе. Здесь каждый может почувствовать нежность и любовь в глубине
        своей души, исследуя магические уголки этой прекрасной страны вместе со своей второй
        половинкой.
      </p>
    ),
  },
  {
    imgBack: Second,
    description: (
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
    description: (
      <p>
        <span>Тайланд</span> - это место, где душа находит свободу в объятиях красивейшей природы и
        романтики, царящей в воздухе. Здесь каждый может почувствовать нежность и любовь в глубине
        своей души, исследуя магические уголки этой прекрасной страны вместе со своей второй
        половинкой.
      </p>
    ),
  },
];
