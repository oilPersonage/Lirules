import { RouterProvider } from 'react-router-dom';

import { routerConfig } from '@src/configuration/localRoutes';

export function RenderRoutes() {
  return <RouterProvider router={routerConfig} />;
}
