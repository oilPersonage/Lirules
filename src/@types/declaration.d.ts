declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.scss';

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line import/no-default-export
  export default ReactComponent;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default content;
}
