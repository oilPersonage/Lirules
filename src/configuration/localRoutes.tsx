import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Guide } from '@pages/guide';
import { GuideThailand } from '@pages/guide/pages';

const LandingRoute = lazy(() => import('@pages/landing/landing'));
const NotFoundRoute = lazy(() => import('@pages/notFound/notFound'));
// const DocsRoute = lazy(() => import('@pages/landing/documents/documents'));
// const LandingContent = lazy(() => import('@pages/landing/content/content'));

export const pathConfig = {
  landing: '/course',
  guide: '/guide',
  guideThailand: '/guide/thailand',
  notFound: '*',
};

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={pathConfig.guide} replace />,
  },
  {
    element: <LandingRoute />,
    path: pathConfig.landing,
  },
  {
    element: <Guide />,
    path: pathConfig.guide,
  },
  // {
  //   element: <GuideThailand />,
  //   path: pathConfig.guideThailand,
  // },
  {
    element: <NotFoundRoute />,
    path: pathConfig.notFound,
  },
]);
