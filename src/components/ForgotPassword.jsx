import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: false,
            errorMessage: ''
        };
    }

    validate(e) {
        //e.preventDefault();
        const email = this.input.value;
        console.log(this.input.value);
        let localValidStatus;
        let localErrorMessage;

        const regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

        if (regex.test(email)) {
            localValidStatus = true;
            localErrorMessage = "";
        } else {
            localValidStatus = false;
            localErrorMessage = "Your e-mail adress format is incorrect";
        }

        console.log(localValidStatus);
        if (!(localValidStatus == this.state.valid)) {
            this.setState({
                valid: localValidStatus,
                errorMessage: localErrorMessage
            });
        }
        if (localErrorMessage != "")
            alert(localErrorMessage);
        e.preventDefault();
    }

    navigate() {
        this.props.history.pushState(null, '/');
    }


    render() {
        return (
                <div className="container" >
                    <div className="LoginStyle">
                        <form onSubmit={this.validate.bind(this)}>
                            <div className="vertical-center">
                                <div>
                                    <div className="form-group">
                                        <h1>Forgot password?</h1>
                                        <p>Enter the email address you use to sign in, and we'll send you an email with instructions to
                                    reset your password.</p>
                                        <fieldset>
                                            <div>
                                                <label htmlFor="sf-input-email">Email Address</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Put your email address here..."
                                                    ref={(input) => this.input = input}
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <div>
                                            <input
                                                type="submit"
                                                value="Send email"
                                                className="btn btn-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}