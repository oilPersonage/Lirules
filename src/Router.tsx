import { lazy } from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { pathConfig } from '@src/configuration/localRoutes';

import { ProtectedRoute } from '@components/ProtectedRoute/ProtectedRoute';

import { Guide } from '@pages/guide';

const LandingRoute = lazy(() => import('@pages/landing/landing'));
const NotFoundRoute = lazy(() => import('@pages/notFound/notFound'));

export function RenderRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={pathConfig.guide} replace />} />
        <Route path={pathConfig.landing} element={<LandingRoute />} />
        <Route path={pathConfig.guide} element={<Guide />} />
        <Route
          path={'/private'}
          element={
            <ProtectedRoute>
              <div>HIDDEN</div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </HashRouter>
  );

  // <RouterProvider router={routerConfig} />;
}
