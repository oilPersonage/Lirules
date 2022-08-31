
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import { store } from '@src/store';
import { Router } from '@src/Router'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);