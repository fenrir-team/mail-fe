import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" alt=""/>
                    </a>
                </nav>
            </header>
        );
  }
}

export default Header;
