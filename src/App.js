/**
 * App
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/navbar/navbar';

import Register from './components/register/register';
import Registers from './components/registers/registers';

import Loader from './components/loader/';

const Body = ({ inspector }) => {
  return inspector
  ? <div className="row">
      <div className="col-md-8"><Registers /></div>
      <div className="col-md-4">
        <Register />
      </div>
  </div>
  : <div className="row"><div className="col-md-12"><Registers /></div></div>;
};

class App extends Component {
  componentDidMount() {
    const h = window.innerHeight
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Body {...this.props}/>
        <footer className="footer">
          <div className="container-fluid">
            <p className="text-muted">(c) 2017 Corework</p>
          </div>
        </footer>
        <Loader />
      </div>
    );
  }
}

export default connect(s => s.ux)(App);
