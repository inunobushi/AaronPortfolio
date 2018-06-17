import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import login from '../../../Actions/LoginActions';
import AuthService from '../../../Services/AuthService';
import { LoginModel }from '../../../Models/login.model';
import { ILoginFields } from '../../../Interfaces/LoginInterface';
import { UPDATE_FIELD_LOGIN, LOGIN_USER } from '../../../Constants/Constants';
import { Button } from 'react-bootstrap';



export class LoginFormComponent extends React.Component <ILoginFields, {}>{

    constructor(props:any){
        super(props);
        this.loginUser = this.loginUser.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }
    private AuthService: AuthService = new AuthService();
    
    updateUsername = (e) => this.props.updateFieldLogin(e, 'Username');
    updatePassword = (e) => this.props.updateFieldLogin(e, 'Password');

    loginUser (e){
        e.preventDefault();
        const {Username, Password } = this.props;
        const user: LoginModel = new LoginModel( Username, Password);
        this.props.submitLogin(user);
    }


    render() {
        return (
            <div className="row about-row">
                <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                    <form onSubmit={this.loginUser} className="form-horizontal ng-pristine ng-valid">
                        <fieldset>
                            <div className="form-group">
                                <div className="ui-input-group">
                                    <input type="text" onChange={this.updateUsername} 
                                    value={this.props.Username}
                                    className="form-control email" placeholder="Username" id="email" required/>
                                    <span className="input-bar"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="ui-input-group">
                                    <input type="password" onChange={this.updatePassword} 
                                    value={this.props.Password}
                                    className="form-control" placeholder="Password" required/>
                                    <span className="input-bar"></span>
                                </div>
                            </div>
                        </fieldset>
                        <div className="card-action no-border text-right"> <Button onClick={this.loginUser} className="color-primary">Sign in</Button> </div>
                        <span className="divider-h"></span><a href="#/page/forgot-password">Forgot your password?</a>
                    </form>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (store) => {

    return {
        Username: store.login.Username,
        Password: store.login.Password
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    updateFieldLogin: (event, field) => dispatch({ type: UPDATE_FIELD_LOGIN, field, payload: event.target.value }),
    submitLogin: (user) => login(dispatch, user),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);