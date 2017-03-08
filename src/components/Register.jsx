import React from 'react';

class Loginas extends React.Component {
    ButtonClick() {
        alert("Wrong Button");
    }

    render() {
        /*let msg;
        if (this.props.hidden=="1")
        {
            msg='Checked'
        }
        else{
            msg='Nieko'
        }
        */
        return (

            <div className="loginStyle">
                <form className="col-lg-3">
                    <div className="form-group" >
                        <div >
                            <input type="text" placeholder="Name" className="form-control" ></input>
                            <input type="text" placeholder="Surname" className="form-control" ></input>
                            <input type="email" placeholder="Email" className="form-control" ></input>
                            <input type="password" placeholder="Password" className="form-control" ></input>
                            <input type="password" placeholder="Repeat password" className="form-control" ></input>
                            <div className="text-left">
                                <p></p>
                                <button className="btn btn-success">Registruotis </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Loginas;