import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './store';
import Root from './components/root/RootComponent';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const App = () => (
  <Provider store={Store()}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
