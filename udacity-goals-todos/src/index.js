import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import reducer from './reducers'
import { Provider } from 'react-redux'

import {createStore} from 'redux'
import middleware from './middleware';


const store = createStore(reducer,middleware)



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));