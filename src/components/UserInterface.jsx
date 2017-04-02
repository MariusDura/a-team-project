import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserInterface extends React.Component {

    render() {
        return (
            <div>
                <div class="btn-group-vertical">
                    <button type="button" className=" btn-primary ">Your Profile</button>
                    <button type="button" className=" btn-primary">Calendar</button>
                    <Link to="userInterface/register2"><button className=" btn-primary" style={{ float: 'left' }}>Add reminder</button></Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}
