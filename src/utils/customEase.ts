import { CustomEase } from 'gsap/CustomEase';

export const easingIn = CustomEase.create(
  'custom',
  'M0,0 C0,0 0.462,0 0.736,0.3 0.995,0.584 1,1 1,1 '
);
export const easingInOut = CustomEase.create(
  'custom',
  'M0,0 C0.2,0 0.404,0.196 0.507,0.512 0.636,0.909 0.822,1 1,1 '
);
export const easingInLight = CustomEase.create(
  'custom',
  'M0,0 C0,0 0.446,0.138 0.702,0.444 0.936,0.724 1,1 1,1 '
);

export const easingOut = CustomEase.create(
  'custom',
  'M0,0 C0,0 0,0.414 0.256,0.72 0.49,1 1,1 1,1 '
);
