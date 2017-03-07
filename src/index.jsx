import React from 'react';
import ReactDOM from 'react-dom';
import HelloMoskwa from './components/Hello';
import Buttonas from './components/Buttonas';
import Login from './components/Login';

require('./../res/styles/index.css');

ReactDOM.render(
    <div>
        <Login />
    </div>,
    document.getElementById('app')
);
