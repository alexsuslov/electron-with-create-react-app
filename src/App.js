/**
 * App
 */
import React, { Component } from 'react';

import Navbar from './components/navbar/navbar';

import Register from './components/register/register';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-8">body</div>
          <div className="col-md-4">
            <h4>Inspector</h4>
            <Register />
            </div>
        </div>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">(c) 2017</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
