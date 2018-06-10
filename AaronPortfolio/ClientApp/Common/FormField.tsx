import * as React from 'react';
import { connect } from 'react-redux';

import Result from '../Common/Results';
import formFields from "../Assets/i18n/en/FormFields";

class FormFieldComponent extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="form-group">
                <div className="ui-input-group">
                    <input type="text" onChange={this.updateLastName}
                        value={this.props.LastName} className="form-control" placeholder="Last Name" required />
                    <span className="input-bar"></span>
                    <div onClick={this.onClick} > {this.state.showResults ? <Result /> : null}</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store) => {
    console.log(store.auth);
    return {
      this.: store.auth.FirstName,
      LastName: store.auth.LastName,
      Username: store.auth.Username,
      Email: store.auth.Email,
      Password: store.auth.Password,
      PasswordConfirm: store.auth.PasswordConfirm
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    updateFieldAuth: (event, field) => dispatch({ type: UPDATE_FIELD_AUTH, field, payload: event.target.value }),
    submitForm: (user) => RegisterUser(dispatch, user)
  })

export default connect(mapStateToProps, mapDispatchToProps)(FormFieldComponent);