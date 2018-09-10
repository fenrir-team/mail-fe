import React, { Component } from 'react';
import axios from 'axios';

class MailList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            mails: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.getMails = this.getMails.bind(this);
    }

    login() {
        const body = {
            password: this.state.password
        };

        axios.post('http://localhost:3000/login', body).then((res)=> {
            console.log(res);
        }).catch(err=> {
            console.error(err);
        });
    }

    getMails(){
        axios.get('http://localhost:3000').then((mails)=> {
            this.setState({
                mails: mails.data
            });
            console.log(mails);
        }).catch(err=> {
            console.error(err);
        });
    }

    handleChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        //const mails = this.state.mails ? `De: ${this.state.mails.from.text} Para: ${this.state.mails.to.text} ${this.state.mails.text}` : 'No hay correos';
        const mails = this.state.mails.map((mail)=> {
            return (
                <a href="#" className="list-group-item list-group-item-action">{mail.text}</a>
            );
        });

        return (
            <div className="list-group">
                <input type="text" value={this.state.password} onChange={this.handleChange}/>

                <button onClick={this.login}>Login</button>
                <button onClick={this.getMails}>Get Mails</button>

                {mails}
            </div>
        );
    }
}

export default MailList;
