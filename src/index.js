import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './newPort/components/Router';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.register();
