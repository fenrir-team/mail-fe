import React, { Component } from 'react';
import axios from 'axios';

class MailList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
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
            console.log(mails);
        }).catch(err=> {
            console.error(err);
        });
    }

    handleChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="list-group">
                <input type="text" value={this.state.password} onChange={this.handleChange}/>

                <button onClick={()=> this.login}>Login</button>
                <button onClick={this.getMails}>Get Mails</button>

                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
            </div>
        );
    }
}

export default MailList;
