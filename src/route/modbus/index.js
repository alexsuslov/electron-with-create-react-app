/**
 * App
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components//navbar/navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-12">
            Modbus
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <p className="text-muted">(c) 2017 Corework</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(s => s.ux)(App);
