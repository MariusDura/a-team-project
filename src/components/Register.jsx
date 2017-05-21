import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            loginIsHidden: true,
            register: false
        };
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({
            register: true
        });

        request
            .post('/api/projects/useriai/add')
            .send({
                firstname: this.firstName.value, lastName: this.lastName.value,
                email: this.emailAddress.value, password: this.password.value
            })
            .end(function (err, res) {
                if (err) {
                    console.log("Error: " + err);
                }
                // console.log(res.req._data);
                console.log("wwww" + res.text);
                if (res.text == "false") {
                    alert("This email address is already in use");
                }
                if (res.text == "true") {
                    alert("You have successfully registered");
                }
            });
    }
    navigate() {
        this.props.history.pushState(null, '/');
    }

    passwordConfirmation() {
        const password = this.password.value;
        const passwordConfirmation = this.passwordConfirm.value;

        if (password != passwordConfirmation)
            this.passwordConfirm.setCustomValidity("Passwords Don't Match");
        else
            this.passwordConfirm.setCustomValidity('');
    }

    render() {
        const buttons2 = (
            < div >
                <button className="btn btn-default btn-xs" style={{ float: 'left' }} onClick={this.navigate.bind(this)}>Home Page</button>
                <Link to="register"><button className="btn btn-success" style={{ float: 'right' }}>Register</button></Link>
                <Link to="login"><button className="btn btn-primary" style={{ float: 'right' }}>Login</button>></Link>
            </div >
        );
        return (
            <div>
                {/*{buttons2}*/}
                <div className="loginStyle">
                    <form className="col-lg-3" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group" >
                            <div >
                                <input
                                    ref={(input) => this.firstName = input}
                                    pattern="[a-zA-Z]{3,}"
                                    required title="Field can not be empty and valid inputs are required. Only letters should be used."
                                    type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    id="name"
                                />
                                <input
                                    ref={(input) => this.lastName = input}
                                    type="text"
                                    placeholder="Surname"
                                    className="form-control"
                                    id="surname"
                                    pattern="[a-zA-Z]{3,}"
                                    required title="Field can not be empty and valid inputs are required. Only letters should be used."
                                />
                                <input
                                    ref={(input) => this.emailAddress = input}
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    id="email"
                                    required title="Field is required"
                                />
                                <input
                                    ref={(input) => this.password = input}
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    id="password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    required title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                                <input
                                    type="password"
                                    placeholder="Repeat password"
                                    className="form-control"
                                    id="passwordconfirmation"
                                    required title="6 to 18 characters"
                                    pattern=".{6,18}"
                                    onInput={this.passwordConfirmation.bind(this)}
                                    ref={(input) => this.passwordConfirm = input}
                                />
                                <div className="text-left">
                                    <p></p>
                                    <input type="submit" value="Sign Up" className="btn btn-success" />
                                    {/*<button onClick={this.handleClick}> Registruotis </button>*/}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;