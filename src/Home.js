import React, { Component } from 'react';

import NavBar from './NavBar.js'

export default class Home extends Component{
    render() {
    return (
      <div>
        <NavBar />
        <h1>Home!</h1>
      </div>
    );
  };
};