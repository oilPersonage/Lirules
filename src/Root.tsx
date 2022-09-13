import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from '@src/store';
import { RenderRoutes } from '@src/Router';

import '@assets/styles/styles.scss';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); //  createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <Suspense fallback={<span>Loading...</span>}>
      <HashRouter>
        <RenderRoutes />
      </HashRouter>
    </Suspense>
  </Provider>
);
