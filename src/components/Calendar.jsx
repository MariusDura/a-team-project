import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Calendar extends React.Component {
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
        const temporary = (
            <div>
                {/*{this.props.children}*/}
                <br></br>
                <div className="container col-sm-8">
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