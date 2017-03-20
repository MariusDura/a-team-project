import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HelloMoskwa from './components/Hello';
import Buttonas from './components/Buttonas';
import Login from './components/Login';
import LoginLayout from './components/LoginLayout';
import ForgotPassword from './components/ForgotPassword';
import Calendar from './components/Calendar';
import Register from './components/Register';
import Testas from './components/Testas';


require('./../res/styles/index.css');

ReactDOM.render(
    /*<div>
        <LoginLayout />
        <Calendar />
    </div>*/
    <Router history={hashHistory}>
        <Route path="/" component={Calendar}>
            <IndexRoute component={LoginLayout} />
            <Route path="register" component={Register}> </Route>
            <Route path="login" component={Login}> </Route>
            <Route path="forgotPassword" component={ForgotPassword}> </Route>
        </Route>
    </Router>
    ,
    document.getElementById('app')
);
