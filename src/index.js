import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
