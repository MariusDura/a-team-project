import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Calendar extends React.Component {
    /*Componentas() {
       setTimeout(
        ReactDOM.render(
            <div>
                <br></br>
                <div className="container col-sm-8">
                    <div className="calendarStyle">
                        <div id="calendar"></div>
                    </div>
                </div>
            </div>
            , document.getElementById('app'))
        , 3000);
    };
    */
    render() {
        const temporary = (
            <div>
                {this.props.children}
                <br></br>
                <div className="container col-sm-8">
                    <div className="calendarStyle">
                        <div className="calendar"></div>
                        
                    </div>
                </div>
            </div>
        );

        return (
            //<button onClick={this.Componentas.bind(this)}>AAA</button>
                temporary
        );
    }
}