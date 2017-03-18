import React from 'react';
import ReactDOM from 'react-dom';
import HelloMoskwa from './components/Hello';
import Buttonas from './components/Buttonas';
import Login from './components/Login';
import LoginLayout from './components/LoginLayout';

require('./../res/styles/index.css');

ReactDOM.render(
    <LoginLayout />,
    document.getElementById('app')
);
