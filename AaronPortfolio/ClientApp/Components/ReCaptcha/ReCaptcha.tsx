import * as React from "react";
import {connect } from "react-redux";
import { render } from "react-dom";


import ReCAPTCHA from "react-google-recaptcha";
import { UPDATE_RECAPTCHA, VERIFY_USER } from '../../Contants/Constants';
const grecaptchaObject = {}

class ReCaptchaComponent extends React.Component<{}>{

    constructor(props) {
        super(props);
    }

    ReCaptcha = (e:any) => this.props.updateReCaptcha(e);

    render() {
        return (
            <ReCAPTCHA
                ref={(el) => { captcha = el; }}
                size="invisible"
                sitekey="6LfNT1sUAAAAAH8dAT0uqbDa6HiUlq6UN8079PJM"
                onChange={onChange}
            />
        )
    }
}

const mapStateToProps = (store) => {

    return {
  
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    updateReCaptcha: (event, field) => dispatch({ type: UPDATE_RECAPTCHA, field, payload: event.target.value }),
    submitReCaptcha: (verify) => dispatch({ type: VERIFY_USER, payload: verify }),
  })

export default connect(mapStateToProps, mapDispatchToProps)(ReCaptchaComponent);