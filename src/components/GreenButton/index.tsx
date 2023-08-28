import cn from 'classnames';

import styles from './styles.module.scss';

export function GreenButton({ text, icon }) {
  const IconComponent = icon;

  return (
    <div className={styles.Button__wrapper}>
      <button className={styles.Button}>{text}</button>

      {/*BUDDA*/}
      <div className={cn(styles.Button__svg, styles.Button__budda)}>
        <IconComponent />
      </div>

      {/*FLOWERs*/}
      <svg
        width="300"
        height="47"
        viewBox="0 0 341 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(styles.Button__svg, styles.Button__flower)}
      >
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem1)}
          d="M296.007 20.7613C295.768 18.5679 301.999 16.1384 304.498 17.301C306.998 18.4635 304.642 24.7216 303.153 25.6355C301.665 26.5494 296.304 23.503 296.007 20.7613Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem2)}
          d="M326 24.9999C324.4 26.5999 325.333 29.9999 326 31.4999C329 32.5 332.5 30.4998 334 29.4998C335.5 28.4998 335 22.9999 334 21.4999C333 19.9999 328 22.9999 326 24.9999Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem4)}
          d="M296.613 14.7626C297.414 13.1434 296.482 8.65232 294.372 8.87748C293.419 8.97916 290.36 9.52019 289.525 10.9962C288.51 12.7893 289.698 15.9936 290.133 16.596C290.927 17.6942 295.611 16.7867 296.613 14.7626Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem6)}
          d="M339.18 18.4627C338.854 19.0621 339.044 20.3357 339.18 20.8976C339.79 21.2723 340.502 20.523 340.807 20.1484C341.113 19.7738 341.011 17.7135 340.807 17.1516C340.604 16.5897 339.587 17.7135 339.18 18.4627Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem8)}
          d="M323.009 13.8696C322.829 12.0721 325.28 8.19545 327.176 9.14817C328.033 9.57834 330.706 11.1606 330.969 12.836C331.288 14.8712 329.05 17.4534 328.431 17.8642C327.301 18.6132 323.235 16.1166 323.009 13.8696Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem20)}
          d="M4.62128 23.7533C5.53806 25.8219 9.04611 26.1751 10.6855 26.0931C12.6986 23.6541 12.0922 19.6689 11.6992 17.9095C11.3062 16.1501 5.99506 14.6368 4.23564 15.0298C2.47622 15.4228 3.4753 21.1674 4.62128 23.7533Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem21)}
          d="M33.5354 22.6886C34.9021 20.9566 41.0498 23.5877 42.0191 26.1685C42.9884 28.7494 36.9231 31.5645 35.2204 31.1736C33.5177 30.7827 31.8271 24.8537 33.5354 22.6886Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem22)}
          d="M22.8851 17.819C24.0155 16.4097 28.4806 15.3609 29.1662 17.3692C29.4758 18.2759 30.2753 21.2783 29.289 22.6578C28.0908 24.3335 24.6847 24.6081 23.9549 24.4673C22.6243 24.2106 21.4721 19.5806 22.8851 17.819Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem23)}
          d="M78.8758 20.6881C80.2425 18.9561 86.3901 21.5872 87.3594 24.168C88.3288 26.7489 82.2634 29.564 80.5607 29.1731C78.8581 28.7823 77.1674 22.8532 78.8758 20.6881Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem24)}
          d="M68.2254 15.8185C69.3558 14.4093 73.821 13.3605 74.5066 15.3687C74.8161 16.2755 75.6157 19.2778 74.6293 20.6573C73.4311 22.333 70.025 22.6077 69.2952 22.4668C67.9646 22.2101 66.8124 17.5801 68.2254 15.8185Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem10)}
          d="M328.194 39.1323C329.051 37.5476 332.417 35.0802 332.926 36.5221C333.156 37.1731 333.747 39.4089 333 40.9172C332.091 42.7496 329.525 44.1908 328.976 44.332C327.975 44.5895 327.124 41.113 328.194 39.1323Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem26)}
          d="M12.208 40.9244C12.7148 42.6528 12.0596 46.7747 10.6832 46.1086C10.0617 45.8078 8.06819 44.6356 7.53789 43.0378C6.89368 41.0968 7.7025 38.2672 7.99322 37.7804C8.52326 36.893 11.5745 38.7639 12.208 40.9244Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem12)}
          d="M281.144 33.5875C280.637 35.3159 281.293 39.4378 282.669 38.7717C283.291 38.4709 285.284 37.2987 285.814 35.7009C286.459 33.7598 285.65 30.9302 285.359 30.4435C284.829 29.5561 281.778 31.427 281.144 33.5875Z"
          fill="#93D20B"
        />
        <path
          className={cn(styles.Button__svgItem, styles.Button__svgItem25)}
          d="M51.6988 22.6972C52.3502 24.167 54.8427 24.4179 56.0075 24.3597C57.4378 22.6267 57.007 19.7952 56.7278 18.5451C56.4485 17.2951 52.6749 16.2198 51.4248 16.4991C50.1747 16.7783 50.8846 20.8599 51.6988 22.6972Z"
          fill="#93D20B"
        />
      </svg>
    </div>
  );
}
