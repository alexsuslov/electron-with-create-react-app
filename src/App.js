/**
 * App
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/navbar/navbar';

import Register from './components/register/register';
import Registers from './components/registers/registers';

const Body = ({ inspector }) => {
  return inspector
  ? <div className="row">
      <div className="col-md-8"><Registers /></div>
      <div className="col-md-4 bg-info">
        <Register />
      </div>
  </div>
  : <div className="row"><div className="col-md-12"><Registers /></div></div>;
};

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Body {...this.props}/>
        <footer className="footer">
          <div className="container-fluid">
            <p className="text-muted">(c) 2017</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(s => s.ux)(App);
