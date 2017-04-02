import React from 'react';
import { Link } from 'react-router';

class AddReminder extends React.Component {

    constructor() {
        super();
    }

    navigate() {
        this.props.history.puskState(null, '/');
    }

    ButtoClicl() {
        this.setState({ addReminder: false });
        alert("Wrong Button");

    }

    render() {

        <div class="btn-group-vertical">
            <button type="button" className=" btn-primary ">Your Profile</button>
            <button type="button" className=" btn-primary">Calendar</button>
            <Link to="userInterface/register2"><button className=" btn-primary" style={{ float: 'left' }}>Add reminder</button></Link>
        </div>

        return (
            <div>

                <div className="loginStyle">
                    <form className="col-lg-3">
                        <div className="form-group" >
                            <div >

                                <input type="text" placeholder="Name of event" className="form-control" id="name of event"></input>
                                <input type="date" placeholder="Start" className="form-control" id="start" ></input>
                                <input type="date" placeholder="Event ends" className="form-control" id="ends" ></input>
                                <div className="text-left">
                                    <p></p>
                                    <button className="btn btn-success" /*onClick={this.insertPersonToDatabase}*/ onClick={this.ButtonClick}>Add Event</button>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddReminder;