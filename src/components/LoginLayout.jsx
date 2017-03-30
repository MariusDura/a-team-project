import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Calendar from './Calendar';
import { Link } from 'react-router';
class LoginLayout extends React.Component {

    constructor() {
        super();
    }

    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {

        const buttons2 = (
            < div >
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.navigate.bind(this)}>Home Page</button>
                <Link to="register"><button className="btn btn-success" style={{ float: 'right' }}>Register</button></Link>
                <Link to="login"><button className="btn btn-primary" style={{ float: 'right' }}>Login</button>></Link>
                <Link to="calendar"><button className="btn btn-primary" style={{ float: 'right' }}>Calendar</button>></Link>
            </div >
        );

        return (
            <div>
                {buttons2}
                {this.props.children}
            </div>
        );
    }
}

export default LoginLayout;