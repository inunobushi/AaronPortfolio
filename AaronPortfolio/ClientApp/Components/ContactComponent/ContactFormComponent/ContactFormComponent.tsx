import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { ContactModel } from '../../../Models/Contact.Model';
import {IContactFields} from '../../../Interfaces/ContactInterface';
import { UPDATE_FIELD_CONTACT, CONTACT_FORM } from '../../../Contants/Constants';

export class ContactFormComponent extends React.Component <IContactFields, {}>{
    constructor(props){
        super(props);
        this.contactSubmit = this.contactSubmit.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
    }

    updateFirstName = (e) => this.props.updateFieldContact(e, 'FirstName');
    updateLastName = (e) => this.props.updateFieldContact(e, 'LastName');
    updateEmail = (e) => this.props.updateFieldContact(e, 'Email');
    updateSubject = (e) => this.props.updateFieldContact(e, 'Subject');
    updateMessage = (e) => this.props.updateFieldContact(e, 'Message');

    contactSubmit(){
        const {FirstName, LastName, Email, Subject, Message } = this.props;
        const contactForm: ContactModel = new ContactModel(FirstName, LastName, Email, Subject, Message);
        this.props.submitContactForm(contactForm);
    }




    render() {
        return (
            <div className="row about-row">
                <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                    <div className="contact-form">
                        <form onSubmit={this.contactSubmit} id="contactForm" className="contact-form shake" data-toggle="validator">
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="name" className="form-control" placeholder="Name" onChange={this.updateFirstName} 
                                    value={this.props.FirstName}
                                    required data-error="Please enter your First Name" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="name" className="form-control" placeholder="Name" onChange={this.updateLastName} 
                                    value={this.props.LastName}
                                    required data-error="Please enter your Last Name" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="email" className="email form-control" id="email" placeholder="Email" onChange={this.updateEmail}
                                    value = {this.props.Email} 
                                    required data-error="Please enter your email" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="msg_subject" className="form-control" placeholder="Subject" onChange={this.updateSubject}
                                    value={this.props.Subject}
                                    required data-error="Please enter your message subject" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <textarea id="message" rows={7} placeholder="Message" className="form-control" onChange={this.updateMessage} 
                                    value={this.props.Message}
                                    required ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <button type="submit" id="submit" className="btn btn-success text-center"> Send Message</button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </form>
                    </div>{/*<!-- end contact-form -->*/}
                </div>{/*<!-- end col-md-6 -->*/}
            </div>
        )
    }
}

const mapStateToProps = (store) => {

    return {
  
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    updateFieldContact: (event, field) => dispatch({ type: UPDATE_FIELD_CONTACT, field, payload: event.target.value }),
    submitContactForm: (contactForm) => dispatch({ type: CONTACT_FORM, payload: contactForm }),
  })

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormComponent); 