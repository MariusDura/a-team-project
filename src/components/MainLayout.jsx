import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Calendar from './Calendar';
import { Link } from 'react-router';
class MainLayout extends React.Component {

    constructor() {
        super();

        this.state = {
            authentification: false
        };
    }

    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default" style={{marginBottom:'0px'}}>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home page</a></li>
                            <li><Link to="calendar">Calendar</Link></li>
                            <li><Link to="userInterface">Profile</Link></li>
                        </ul>

                        {!this.state.authentification ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        ) :
                            (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>)
                        }
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;