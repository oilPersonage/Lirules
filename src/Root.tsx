import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import '@assets/styles/styles.scss';
import { store } from '@src/store';
import { Router } from '@src/Router';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); //  createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
