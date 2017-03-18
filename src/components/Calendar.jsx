import React from 'react';

class Calendar extends React.Component {
    render() {
        const temporary = (
            <div>
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

export default Calendar;