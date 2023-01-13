export interface INavigation {
  isStartAnimation: boolean;
}

export interface INavItem {
  id: string;
  title: string;
  text: string;
}

export interface IOnClick {
  index?: number;
  isHideMenu?: boolean;
  id?: string;
}
