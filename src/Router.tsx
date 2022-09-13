import { useRoutes } from 'react-router-dom';

import { localRoutes } from '@src/configuration/localRoutes';

export function RenderRoutes() {
  const routerList = useRoutes(localRoutes);
  return routerList;
}
