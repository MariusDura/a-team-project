import React from 'react';
import ReactDOM from 'react-dom';
import ForgotPassword from './ForgotPassword';

class Loginas extends React.Component {
    ButtonClick() {
        alert("Wrong Button");
        this.redirectToForgotPassword.bind(this);
    }

    redirectToForgotPassword () {
        ReactDOM.render(
            <ForgotPassword/>,
            document.getElementById('app')
        );
    }

    render() {
        /*let msg;
        if (this.props.hidden=="1")
        {
            msg='Checked'
        }
        else{
            msg='Nieko'
        }
        */


        return (

            <div className="loginStyle">
                <form className="col-lg-3">
                    <div className="form-group" >
                        <div >
                            <input type="text" placeholder="Username" className="form-control" ></input>
                            <input type="password" placeholder="Password" className="form-control" ></input>
                            <div className="text-left">
                                <a onClick={this.redirectToForgotPassword}>Pamiršote slaptažodį?</a>
                                <p></p>
                                <button className="btn btn-primary">Prisijungti </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Loginas;