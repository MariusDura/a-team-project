import React, { Component } from 'react';

export default class UserInterface extends Component {
render() {
    return(
        <div class="btn-group-vertical">
            <button type="button" className="btn btn-primary">Your Profile</button>
            <button type="button" className="btn btn-primary">Calendar</button>
            <button type="button" className="btn btn-primary">Add reminder</button>
        </div>
        );
    }
}
