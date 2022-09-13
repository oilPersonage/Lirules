import { lazy } from 'react';

const DocsRoute = lazy(() => import('@pages/landing/documents/documents'));
const LandingContent = lazy(() => import('@pages/landing/content/content'));

export const LANDING_COUNT = 6;

interface ILandingRoutes {
  path: string;
  component: any;
}

export const LANDING_ROUTES: ILandingRoutes[] = [
  { path: '/', component: LandingContent },
  { path: '/documents', component: DocsRoute },
];
