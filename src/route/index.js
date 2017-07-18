import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Register from './register/register';
import Modbus from './modbus/';

const router = props => (
  <Router>
    <div>
      <Route exact path="/" component={Register} />
      <Route exact path="/modbus" component={Modbus} />
    </div>
  </Router>
);

export default router;
