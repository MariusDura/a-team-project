import React from 'react';

class Loginas extends React.Component {
    ButtonClick() {
        alert("Wrong Button");
    }

    render() {
        return (
            <div className="backgroundStyle">
                <div className="tableRow">
                    Prisijungimo vardas:
                    <input className="inputFloat"></input>
                </div>
                <div className="tableRow">
                    Slaptažodis:
                    <input className="inputFloat"></input>
                </div>
            </div>
        );
    }
}

export default Loginas;