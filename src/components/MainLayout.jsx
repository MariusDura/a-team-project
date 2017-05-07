import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Calendar from './Calendar';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';

class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            authentification: false,
            prisijungta: false
        };
    }
    atsijungti() {
        alert("Successfully Logged out");
        this.props.loginAction(false);
    }
    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default" style={{ marginBottom: '0px' }} style={{ 'border-radius': '1px' }}>
                    <div className="container-fluid">
                        {!this.props.isLoggedIn ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        ) :
                            (
                                <div>
                                    <ul className="nav navbar-nav">
                                        <li><a href="#">Home page</a></li>
                                        <li><Link to="calendar">Calendar</Link></li>
                                        <li><Link to="userInterface">Profile</Link></li>
                                    </ul>

                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="active"><Link to="/" onClick={this.atsijungti.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatch);
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
}

//export default MainLayout;
export default connect(mapStateToProps, matchDispatchToProps)(MainLayout);