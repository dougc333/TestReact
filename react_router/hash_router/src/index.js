import React from 'react';
import ReactDOM from 'react-dom';
import First from './First';
import Second from './Second';

import { HashRouter, Route,Link, Redirect } from 'react-router-dom';
ReactDOM.render(
  <div>
    <HashRouter>
      <div>
        <div>
         <Link to='/first'> first</Link>
         </div><div>
         <Link to='/second'> second</Link>
         </div><div>
         <Route path='/first' component={First}/>
         </div><div>
         <Route path='/second' component={Second}/>
         </div>
      </div>
    </HashRouter>
  </div>,
  document.getElementById('root')
);

