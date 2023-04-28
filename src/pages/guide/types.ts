import { PAGE_NAMES } from '@pages/guide/cards/items';

export type HandleNextPage = ({
  nextPage,
  isBack,
}: {
  nextPage?: PAGE_NAMES;
  isBack: boolean;
}) => void;
