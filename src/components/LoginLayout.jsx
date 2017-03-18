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
        this.ButtonClick2=this.ButtonClick2.bind(this);
    }


    ButtonClick() {
        this.setState({ loginIsHidden: true, registerIsHidden: true })
    }

    ButtonClick1() {
        this.setState({ registerIsHidden: false, loginIsHidden: true })
    }

    ButtonClick2() {
        this.setState({ registerIsHidden: true, loginIsHidden: false })
    }

    render() {
        const buttons = (
            <div>
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.ButtonClick}>Home Page</button>
                <button className="btn-success" style={{ float: 'right' }} onClick={this.ButtonClick1}>Register</button>
                <button className="btn-primary" style={{ float: 'right' }} onClick={this.ButtonClick2}>Login</button>
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

        else {
            return (
                <div>
                    {buttons}
                    <br></br>
                    <div className="container col-sm-8">
                        <div className="calendarStyle">
                            <div className="calendar calendarStyle"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default LoginLayout;