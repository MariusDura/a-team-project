import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserInterface extends React.Component {

    render() {
        return (
            <div>
                <form className="col-lg-3" style={{marginTop:'15px'}} >
                    <div className="form-group" >
                        <div >
                            <input type="text" placeholder="Name" className="form-control" id="name"></input>
                            <input type="text" placeholder="Surname" className="form-control" id="surname" ></input>
                            <input type="email" placeholder="Email" className="form-control" id="email" ></input>
                            <input type="password" placeholder="Current Password" className="form-control" id="password" ></input>
                            <input type="password" placeholder="New Password" className="form-control" id="password" ></input>
                            <input type="password" placeholder="Repeat New password" className="form-control" id="name"></input>
                            <div className="text-left">
                                <p></p>
                                <button className="btn btn-success" /*onClick={this.insertPersonToDatabase}*/ onClick={this.ButtonClick}>Save info </button>
                            </div>
                        </div>
                    </div>

                    <div className="btn-group-vertical">
                        {/*<button type="button" className="btn btn-primary btn-sm">Your Profile</button>
                    <Link to="calendar"><button type="button" className="btn btn-primary btn-sm">Calendar</button></Link>*/}
                        <Link to="userInterface/addReminder"><button className="btn btn-primary btn-sm" style={{ float: 'left' }}>Add reminder</button></Link>
                    </div>
                </form>
                {this.props.children}
            </div>
        );
    }
}
