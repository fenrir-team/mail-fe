import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import MailList from './mail-list/MailList';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <div id={'wrapper'} className="row">
                    <div className="col-sm">
                        <MailList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
