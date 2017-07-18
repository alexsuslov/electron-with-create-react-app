/**
 * App
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components//navbar/navbar';

import Register from '../../components/register/register';
import Registers from '../../components/registers/registers';

import Loader from '../../components/loader/';

const Body = ({ inspector, h }) => {
  const style={
      height: h - 128 || 768,
      overflow: 'scroll',
    }
  return inspector
  ? <div className="row">
      <div style={style} className="col-md-8"><Registers /></div>
      <div className="col-md-4">
        <Register />
      </div>
  </div>
  : <div className="row"><div style={style}  className="col-md-12"><Registers /></div></div>;
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const h = window.innerHeight;
    // console.log(h);
    this.setState({h});

  }

  render() {

    return (
      <div className="container-fluid">
        <Navbar />
        <Body h={this.state.h} {...this.props}/>
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
