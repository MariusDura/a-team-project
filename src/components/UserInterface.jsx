import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';

class UserInterface extends React.Component {

    render() {
        return (
            <div>
                {this.props.isLoggedIn ? (
                    <div>
                        <form className="col-lg-3" style={{ marginTop: '15px' }} >
                            {/*<div className="form-group" >*/}
                                {/*<div >*/}
                                    {/*<input type="text" placeholder="Name" className="form-control" id="name"></input>
                                    <input type="text" placeholder="Surname" className="form-control" id="surname" ></input>
                                    <input type="email" placeholder="Email" className="form-control" id="email" ></input>
                                    <input type="password" placeholder="Current Password" className="form-control" id="password" ></input>
                                    <input type="password" placeholder="New Password" className="form-control" id="password" ></input>
                                    <input type="password" placeholder="Repeat New password" className="form-control" id="name"></input>*/}
                                    {/*<div className="text-left">*/}
                                        {/*<p></p>*/}
                                        {/*<button className="btn btn-success" >Save info </button>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            <div className="btn-group-vertical">
                                {/*<button type="button" className="btn btn-primary btn-sm">Your Profile</button>
                    <Link to="calendar"><button type="button" className="btn btn-primary btn-sm">Calendar</button></Link>*/}
                                <Link to="userInterface/addReminder"><button className="btn btn-primary btn-sm" style={{ float: 'left' }}>Add reminder</button></Link>
                            </div>
                        </form>
                        {this.props.children}
                    </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(UserInterface);
