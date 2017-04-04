import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Link } from 'react-router';

class Loginas extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            authentification: false
        };

        this.handleClick = this.handleClick.bind(this);
    }


    //Norint kreiptis į <button className="btn btn-danger" onClick={this.handleChange.bind(this)}>Bandymas</button>*
    // kad reikšmė pasikeistų MainLayout state.prisijungta

    // handleChange() {
    //     var temp = true;
    //     console.log("bandyyyymas " + temp);
    //      console.log(this.props.onPaspaudimo);

    //     this.props.onPaspaudimo(temp);
    // }
    //-------------------------------------------------------------------


    handleClick() {

        console.log("OPOP");

        request
            .post('/api/projects/login')
            .send({
                email: this.email.value,
                password: this.password.value,
            })
            .end((function (err, res) {
                if (err) {
                    console.log("Error: " + err);
                }
                else {
                    console.log(res.req._data);
                    console.log('www', res);
                    console.log(res.text);
                    let atsakymas = res.text;
                    if (atsakymas == "true") {
                        console.log("Geras prisijungimas");
                        this.setState({
                            authentification: true
                        });
                    }
                    else {
                        console.log("blogas prisijungimas");
                        this.setState({
                            authentification: false
                        });
                        alert("Blogai įvesti prisijungimo duomenys");
                    }
                }
            }).bind(this));
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
                {/*{buttons2}*/}
                {!this.state.authentification ? (
                    <div className="loginStyle">
                        <form className="col-lg-3">
                            <div className="form-group" >
                                <div >
                                    <input
                                        ref={(input) => this.email = input}
                                        type="text"
                                        placeholder="Email"
                                        className="form-control" >
                                    </input>
                                    <input
                                        ref={(input) => this.password = input}
                                        type="password"
                                        placeholder="Password"
                                        className="form-control" >
                                    </input>
                                    <div className="text-left">
                                        <Link to="forgotPassword">Pamiršote slaptažodį?</Link>
                                        <p></p>
                                        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Prisijungti</button>

                                        {/*<button className="btn btn-danger" onClick={this.handleChange.bind(this)}>Bandymas</button>*/}

                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ) :
                    (
                        <div className="loginStyle">
                            <form className="col-lg-3">
                                <div className="form-group" >
                                    <div >
                                        <button type="button" className="btn btn-danger btn-">Prisijungta</button>
                                        {this.props.children}
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>

        );
    }
}

export default Loginas;