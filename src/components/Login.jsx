import React from 'react';
import ReactDOM from 'react-dom';
import ForgotPassword from './ForgotPassword';
import LoginLayout from './LoginLayout';
import But from './But.jsx';
import { Link } from 'react-router';

class Loginas extends React.Component {

    ButtonClick() {
        alert("Wrong Button");
        this.redirectToForgotPassword.bind(this);
    }

    redirectToForgotPassword() {
        ReactDOM.render(
            <LoginLayout>
                <ForgotPassword />
            </LoginLayout>
            ,
            document.getElementById('app')
        );
    }

    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        const buttons = (
            <div>
                <div class="container col-sm-8">
                    <div class="calendarStyle">
                        <div id="calendar"></div>
                    </div>
                </div>
            </div>
        );
        const buttons2 = (
            < div >
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.navigate.bind(this)}>Home Page</button>
                <Link to="register"><button className="btn btn-success" style={{ float: 'right' }}>Register</button></Link>
                <Link to="login"><button className="btn btn-primary" style={{ float: 'right' }}>Login</button>></Link>
            </div >
        );
        return (
            <div>
                {buttons2}
                <div className="loginStyle">
                    <form className="col-lg-3">
                        <div className="form-group" >
                            <div >
                                <input type="text" placeholder="Username" className="form-control" ></input>
                                <input type="password" placeholder="Password" className="form-control" ></input>
                                <div className="text-left">
                                    <Link to="forgotPassword"><a>Pamiršote slaptažodį?</a></Link>
                                    <p></p>
                                    <button className="btn btn-primary">Prisijungti </button>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Loginas;