import * as React from 'react';
import { connect } from 'react-redux';

// import ReCaptchaComponent from '../../ReCaptcha/ReCaptcha';

import AuthAPI from '../../../API/AuthAPI';
import RegisterUser from '../../../Actions/RegActions';
import { RegistrationModel } from '../../../Models/Registration.Model';
import { IRegFields } from '../../../Interfaces/RegInterface';
import { UPDATE_FIELD_AUTH, REG_USER } from '../../../Constants/Constants';

//let captcha;




class RegistrationFormComponent extends React.Component<IRegFields, {}> {

  constructor(props: any) {
    super(props);
    this.register = this.register.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordConfirm = this.updatePasswordConfirm.bind(this);
  }

  //  user:RegistrationModel = new RegistrationModel();

  isValid: boolean = false;


  confirmPassword(e: any) {
    console.log(e);


  }

  updateFirstName = (e) => this.props.updateFieldAuth(e, 'FirstName');
  updateLastName = (e) => this.props.updateFieldAuth(e, 'LastName');
  updateEmail = (e) => this.props.updateFieldAuth(e, 'Email');
  updatePassword = (e) => this.props.updateFieldAuth(e, 'Password');
  updatePasswordConfirm = (e) => this.props.updateFieldAuth(e, 'PasswordConfirm');

  register() {
    console.log("Im being called");
    const { FirstName, LastName, Email, Password, PasswordConfirm } = this.props;
    const user: RegistrationModel = new RegistrationModel(FirstName, LastName, Email, Password, PasswordConfirm);
    this.props.submitForm(user);
    //() => { captcha.execute()};
  }

  render() {
    return (
      <div id="login" className="ptb ptb-xs-40 page-signin">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-body">
                <div className="body-inner">
                  <div className="card bg-white">
                    <div className="card-content">
                      <section className="logo text-center">
                        <h2 className="title-header">Register</h2>
                        <div className="underline1"></div>
                      </section>
                      <div className="row about-row">
                        <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                          <form onSubmit={this.register} className="form-horizontal ng-pristine ng-valid">
                            <fieldset>
                              <div className="form-group">
                                <div className="ui-input-group">
                                  <input type="text" onChange={this.updateFirstName}
                                    value={this.props.FirstName} className="form-control" placeholder="First Name" required />
                                  <span className="input-bar"></span>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="ui-input-group">
                                  <input type="text" onChange={this.updateLastName}
                                    value={this.props.LastName} className="form-control" placeholder="Last Name" required />
                                  <span className="input-bar"></span>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="ui-input-group">
                                  <input type="text" onChange={this.updateEmail}
                                    value={this.props.Email} className="form-control email" placeholder="Email" required />
                                  <span className="input-bar"></span>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="ui-input-group">
                                  <input type="password" onChange={this.updatePassword}
                                    value={this.props.Password} className="form-control" placeholder="Password" required />
                                  <span className="input-bar"></span>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="ui-input-group">
                                  <input type="password" onChange={this.updatePasswordConfirm}
                                    value={this.props.PasswordConfirm} className="form-control" placeholder="Password Confirmation" required />
                                  <span className="input-bar"></span>
                                </div>
                              </div>
                              <div className="spacer"></div>
                              <div className="form-group checkbox-field">
                                <label className="text-small">
                                  <input type="checkbox" id="check_box" />
                                  <span className="ion-ios-checkmark-empty22 custom-check"></span> By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></label>
                              </div>
                            </fieldset>
                            <button className="btn btn-success text-center" type="button" onClick={this.register}>Sign Up</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
console.log(store.auth);
  return {
    FirstName: store.auth.FirstName,
    LastName: store.auth.LastName,
    Email: store.auth.Email,
    Password: store.auth.Password,
    PasswordConfirm: store.auth.PasswordConfirm
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFieldAuth: (event, field) => dispatch({ type: UPDATE_FIELD_AUTH, field, payload: event.target.value }),
  submitForm: (user) => RegisterUser(dispatch, user)
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormComponent);