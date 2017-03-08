import React from 'react';
import Login from './Login';
import Register from './Register';
class LoginLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            loginIsHidden: true,
            registerIsHidden: true
        };
        this.ButtonClick = this.ButtonClick.bind(this);
        this.ButtonClick1 = this.ButtonClick1.bind(this);
    }


    ButtonClick() {
        this.setState({ loginIsHidden: false, registerIsHidden: true })
    }

    ButtonClick1() {
        this.setState({ registerIsHidden: false, loginIsHidden: true })
    }

    render() {
        const buttons = (
            <div>
                <button className="btn-success" style={{ float: 'right' }} onClick={this.ButtonClick1}>Register</button>
                <button className="btn-primary" style={{ float: 'right' }} onClick={this.ButtonClick}>Login</button>
            </div>
        );


        if (!this.state.loginIsHidden) {
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

        return (
            buttons
        );
    }
}

export default LoginLayout;