import React, { Component } from 'react';
import request from 'superagent';

export default class Calendar extends React.Component {
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
                    console.log(res.body);
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
    render() {
        const temporary = (
            <div>
                {/*{this.props.children}*/}
                <br></br>
                <div className="container col-sm-7">
                    <div className="calendarStyle">
                        <div className="calendar"></div>
                    </div>
                </div>
            </div>
        );

        return (
            temporary
        );
    }
}