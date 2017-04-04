import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Calendar from './Calendar';
import { Link } from 'react-router';
class MainLayout extends React.Component {

    constructor() {
        super();

        this.state = {
            authentification: false,
            prisijungta: false
        };
        // this.handlePrijungta = this.handlePrijungta.bind(this);
    }

    //Norint kreiptis į apačioje esantį <Login onPaspaudimo={this.handlePrijungta} />
    //Kad this.state.prisijungta būtų priskirta nauja reikšmė

    // handlePrijungta(newValue) {
    //     console.log(newValue);
    //     console.log("asaasd " + this.state.prisijungta);
    //     this.setState({
    //         prisijungta: newValue
    //     })
    //     setTimeout(console.log(this.state.prisijungta), 3000);
    // };
    //------------------------------------------------------------------------------

    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default" style={{ marginBottom: '0px' }} style={{ 'border-radius': '1px' }}>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home page</a></li>
                            <li><Link to="calendar">Calendar</Link></li>
                            <li><Link to="userInterface">Profile</Link></li>

                            {/*susiejimas su viršuj užkomentuota funkcija*/}
                            {/*{this.state.prisijungta ? (<li><Link to="userInterface">paspausta</Link></li>) :
                                (<li><Link to="userInterface">nepaspausta</Link></li>)}*/}
                        </ul>

                        {!this.state.authentification ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        ) :
                            (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/logout" onPaspaudimo={this.handlePrijungta} ><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                                </ul>)
                        }
                    </div>
                </nav>

                {/*<Login onPaspaudimo={this.handlePrijungta} />*/}
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;