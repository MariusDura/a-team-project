import React from 'react';

class Loginas extends React.Component {
    ButtonClick() {
        alert("Wrong Button");
    }

    render() {
        return (
            <form className="form-horizontal">
                <div className="loginStyle">
                    <div className="form-group" >
                        <div className="col-md-4" >
                            <input type="text" placeholder="Username" className="form-control" ></input>
                            <input type="password" placeholder="Password" className="form-control" ></input>
                            <div className="text-left">
                                <a href="">Pamiršote slaptažodį?</a>
                                <p></p>
                                <button className="btn btn-success">Prisijungti</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Loginas;