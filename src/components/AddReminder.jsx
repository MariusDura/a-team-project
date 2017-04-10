import React, { Component } from 'react';
import request from 'superagent';

export default class AddReminder extends React.Component {
    ButtonClick() {
        alert("Event added");
    }
    componentDidMount() {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        request
            .get('/api/projects/calendarEvents')
            .end((function (err, res) {
                if (err) {
                    console.log("Error: " + err);
                }
                else {
                    $('.calendar').fullCalendar({
                        header: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'month,agendaWeek,agendaDay'
                        },
                        editable: true,
                        events: res.body
                    });
                }
            }).bind(this));
    }

    handleClick() {
        var event = {
            title: this.title.value,
            start: this.startDate.value,
            end: this.endDate.value
        };

        request
            .post('/api/projects/addReminder')
            .send(event)
            .end((function (err, res) {
                if (err) {
                    console.log("Error: " + err);
                }
                else {
                    console.log(res.req._data);
                    console.log('www', res);
                    console.log(res.text);
                    let atsakymas = res.text;
                    if (atsakymas == "true") {
                        console.log("Eventas įkeltas");
                        $('.calendar').fullCalendar('renderEvent', event);
                    }
                }
            }).bind(this));
    }

    render() {
        return (
            <div>
                <form className="col-lg-3" style={{ marginTop: '15px' }} >
                    <div className="form-group" >
                        <div >
                            <input
                                ref={(input) => this.title = input}
                                type="text"
                                placeholder="Name of event"
                                className="form-control"
                                id="name of event"></input>
                            Event Starts:
                                <input
                                ref={(input) => this.startDate = input}
                                type="date"
                                placeholder="Start"
                                className="form-control"
                                id="start" ></input>
                            Event Ends:
                                <input
                                ref={(input) => this.endDate = input}
                                type="date"
                                placeholder="Event ends"
                                className="form-control"
                                id="ends" ></input>
                            <div className="text-left">
                                <p></p>
                                <button type="button" className="btn btn-success" /*onClick={this.insertPersonToDatabase}*/ onClick={this.handleClick.bind(this)}>Add Event</button>
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