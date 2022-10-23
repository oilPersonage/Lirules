const menuList = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.1,
      delayChildren: 2,
    },
  },
};
const menuItem = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const navigationList = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const dotsList = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};
const dotsItem = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const titleList = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      type: 'spring',
      staggerChildren: 0.05,
      delayChildren: 1.5,
    },
  },
};
const titleItem = {
  ...dotsItem,
};

export { dotsList, dotsItem, navigationList, menuList, menuItem, titleList, titleItem };
