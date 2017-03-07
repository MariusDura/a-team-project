import React from 'react';
import ReactDOM from 'react-dom';
import HelloMoskwa from './components/Hello';
import Buttonas from './components/Buttonas';
import Login from './components/Login';

require('./../res/styles/index.css');

ReactDOM.render(
    <div>
        <HelloMoskwa name="Project"/>
        <Buttonas />
        <Login />
    </div>,
    document.getElementById('app')
);
