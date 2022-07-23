import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>Login</div>
                        <div className='col-12 form-group input-login'>
                            <label>Username:</label>
                            <input type='text' className='form-control' placeholder='Enter your username'></input>
                        </div>
                        <div className='col-12 form-group input-login'>
                            <label>Password:</label>
                            <input type='password' className='form-control' placeholder='Enter your password'></input>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login'>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-2'>
                            <span className=''>Or login with: </span>
                        </div>
                        <div className='col-12 social-login'>
                        <i class="fab fa-facebook-f facebook"></i>
                        <i class="fab fa-google-plus-g google"></i>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
