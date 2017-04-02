import React, { Component } from 'react';

export default class AddReminder extends React.Component {
    ButtonClick() {
        alert("Event added");
    }
    componentDidMount() {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        $('.calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            events: [
                {
                    title: 'Miegojimas',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Eiti į paskaitas',
                    start: new Date(y, m, 12),
                    end: new Date(y, m, 14)
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <form className="col-lg-3" style={{ marginTop: '15px' }} >
                    <div className="form-group" >
                        <div >
                            <input type="text" placeholder="Name of event" className="form-control" id="name of event"></input>
                            Event Starts:
                                <input type="date" placeholder="Start" className="form-control" id="start" ></input>
                            Event Ends:
                                <input type="date" placeholder="Event ends" className="form-control" id="ends" ></input>
                            <div className="text-left">
                                <p></p>
                                <button className="btn btn-success" /*onClick={this.insertPersonToDatabase}*/ onClick={this.ButtonClick}>Add Event</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <br></br>
                    <div className="container col-sm-6">
                        <div className="calendarStyle">
                            <div className="calendar"></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}