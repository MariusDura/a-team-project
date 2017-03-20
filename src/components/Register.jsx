import React from 'react';
import { Link } from 'react-router';

/*const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'

});
connection.connect(function (err) {
            if (!err) {
                console.log("Database is connected ... nn");
            } else {
                console.log("Error connecting database ... nn");
            }
        });
*/
class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            loginIsHidden: true,
            register: true
        };
        this.ButtonClick = this.ButtonClick.bind(this);
        //this.ButtonClick1 = this.ButtonClick1.bind(this);
    }

    ButtonClick() {
        this.setState({ register: false });
        alert("Wrong Button");
    }

    /*insertPersonToDatabase() {
        connection.connect(function (err) {
            if (!err) {
                console.log("Database is connected ... nn");
            } else {
                console.log("Error connecting database ... nn");
            }
        });
        let array = {
            userName: document.getElementById("name"),
            userSurname: document.getElementById("surname"),
            userEmail: document.getElementById("email"),
            userPassword: document.getElementById("password")
        };

        connection.query('INSERT INTO users SET?', array, function (err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Viskas pavyko");
                callback();
            }
        })
    }
    */

    navigate() {
        this.props.history.pushState(null, '/');
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
                {buttons2}
                <div className="loginStyle">
                    <form className="col-lg-3">
                        <div className="form-group" >
                            <div >
                                <input type="text" placeholder="Name" className="form-control" id="name"></input>
                                <input type="text" placeholder="Surname" className="form-control" id="surname" ></input>
                                <input type="email" placeholder="Email" className="form-control" id="email" ></input>
                                <input type="password" placeholder="Password" className="form-control" id="password" ></input>
                                <input type="password" placeholder="Repeat password" className="form-control" id="name"></input>
                                <div className="text-left">
                                    <p></p>
                                    <button className="btn btn-success" /*onClick={this.insertPersonToDatabase}*/ onClick={this.ButtonClick}>Registruotis </button>
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