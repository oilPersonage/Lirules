declare module '*.png';
declare module '*.webp';
declare module '*.webp';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.scss';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  // @ts-ignore
  export default src;
}

declare module '*.scss?inline' {
  const content: { [className: string]: string };
  // @ts-ignore
  export default content;
}
