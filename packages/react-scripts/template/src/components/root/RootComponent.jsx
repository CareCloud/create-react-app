import React, { Component } from 'react';
import logo from '../../assets/images/cc-logo.svg'
import './RootComponent.css';

const Root = () => {
    return (
      <div>
        <nav id="appHeader">
          <img src={logo} alt="CareCloud Logo" />
        </nav>
        <div className='app-header-title'>
          <h2>CareCloud ReactJS App</h2>
          <p>Build something amazing!</p>
        </div>
      </div>
    );
}

export default Root;
