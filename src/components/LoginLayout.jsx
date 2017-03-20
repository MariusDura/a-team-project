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
        /*this.state = {
            loginIsHidden: true,
            registerIsHidden: true
        };*/
        this.ButtonClick = this.ButtonClick.bind(this);
        this.ButtonClick1 = this.ButtonClick1.bind(this);
        this.ButtonClick2 = this.ButtonClick2.bind(this);
    }


   /* ButtonClick() {
        //this.setState({ loginIsHidden: true, registerIsHidden: true })
        ReactDOM.render(
            //<But>
            <div>
                <LoginLayout>
                    <Calendar />
                </LoginLayout>
            </div>
            //</But>
            ,
            document.getElementById('app')
        );
    }

    ButtonClick1() {
        //this.setState({ registerIsHidden: false, loginIsHidden: true })
        const buttons = (
            <div>
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.ButtonClick}>Home Page</button>
                <button className="btn btn-success" style={{ float: 'right' }} onClick={this.ButtonClick1}>Register</button>
                <button className="btn btn-primary" style={{ float: 'right' }} onClick={this.ButtonClick2}>Login</button>
            </div>
        );
        ReactDOM.render(
            <div>
                {buttons}
                <Register />
            </div>
            ,
            document.getElementById('app')
        );
    }

    ButtonClick2() {
        //this.setState({ registerIsHidden: true, loginIsHidden: false })
        const buttons = (
            <div>
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.ButtonClick}>Home Page</button>
                <button className="btn btn-success" style={{ float: 'right' }} onClick={this.ButtonClick1}>Register</button>
                <button className="btn btn-primary" style={{ float: 'right' }} onClick={this.ButtonClick2}>Login</button>
            </div>
        );
        ReactDOM.render(
            <div>
                {buttons}
                <Login />
            </div>
            ,
            document.getElementById('app')
        );
    }
    */

    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        /*const buttons = (
            <div>
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.ButtonClick}>Home Page</button>
                <button className="btn btn-success" style={{ float: 'right' }} onClick={this.ButtonClick1}>Register</button>
                <button className="btn btn-primary" style={{ float: 'right' }} onClick={this.ButtonClick2}>Login</button>
            </div>
        );
        */

        const buttons2 = (
            < div >
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.navigate.bind(this)}>Home Page</button>
                <Link to="register"><button className="btn btn-success" style={{ float: 'right' }}>Register</button></Link>
                <Link to="login"><button className="btn btn-primary" style={{ float: 'right' }}>Login</button>></Link>
            </div >
        );

        /*if (!this.state.loginIsHidden) {
            return (
                <div>
                    {buttons}
                    <Login />
                </div>
            );
        }
        if (!this.state.registerIsHidden) {
            return (
                <div>
                    {buttons}
                    <Register />
                </div>
            );
        }
        else {*/
        return (
            <div>
                {buttons2}
                {this.props.children}
            </div>
            //<Calendar />
        );
        //}
    }
}

export default LoginLayout;