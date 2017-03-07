import React from 'react';

class Buttonas extends React.Component {
    ButtonClick() {
        alert("Wrong Button");
    }

    render() {
        return <button onClick={this.ButtonClick}>Hello Button</button>;
    }
}

export default Buttonas;