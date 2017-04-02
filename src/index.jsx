import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Buttonas from './components/Buttonas';
import Login from './components/Login';
import LoginLayout from './components/LoginLayout';
import ForgotPassword from './components/ForgotPassword';
import Calendar from './components/Calendar';
import Register from './components/Register';
import UserInterface from './components/UserInterface';
import AddReminder from './components/AddReminder';


require('./../res/styles/index.css');

ReactDOM.render(
    /*<div>
        <LoginLayout />
        <Calendar />
    </div>*/
    <Router history={hashHistory}>
        <Route path="/" component={LoginLayout}>
            {/*<IndexRoute component={Register} />*/}
            <Route path="register" component={Register}> </Route>
            <Route path="login" component={Login}> </Route>
            <Route path="forgotPassword" component={ForgotPassword}> </Route>
            <Route path="userInterface" component={UserInterface}> </Route>
            <Route path="userInterface/register2" component={AddReminder}></Route>
            <Route path="calendar" component={Calendar}></Route>
            
        </Route>
    </Router>
    ,
    document.getElementById('app')
);
