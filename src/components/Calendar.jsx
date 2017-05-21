import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';

class Calendar extends React.Component {

    constructor(props) {
        super(props);

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
    render() {
        const temporary = (
            <div>
                <br></br>
                <div className="container col-sm-7">
                    <div className="calendarStyle">
                        <div className="calendar"></div>
                    </div>
                </div>
            </div>
        );


        return (
            <div>
                {this.props.isLoggedIn ? (
                    temporary
                ) : (
                        <form style={{ width: '630px', margin: 'auto' }}>
                            <div className="form-group">
                                <div className="alert alert-warning" style={{ width: '600px', textAlign: 'center' }}>
                                    <strong>Warning!</strong> You need to login first in order to see this section!
                                </div>
                            </div>
                        </form>
                    )}
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatch);
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Calendar);