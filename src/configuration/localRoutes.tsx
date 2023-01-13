import { lazy } from 'react';

const LandingRoute = lazy(() => import('@pages/landing/landing'));
const NotFoundRoute = lazy(() => import('@pages/notFound/notFound'));

// const DocsRoute = lazy(() => import('@pages/landing/documents/documents'));
// const LandingContent = lazy(() => import('@pages/landing/content/content'));

export const localRoutes = [
  // These are the same as the props you provide to <Route>
  {
    element: <LandingRoute />,
    path: '/',
  },
  // {
  //   element: <Account />
  //   children: [
  //     {
  //       index: true,
  //       element: <LandingContent />,
  //     },
  //     { path: 'documents', element: <DocsRoute /> },
  //   ],
  // }
  // Not found routes work as you'd expect
  { path: '*', element: <NotFoundRoute /> },
];
