import * as React from 'react';
import axios from 'axios';

import { IContactModel } from '../../../Models/Contact.Model';

export class ContactForm extends React.Component {

    contactForm: IContactModel = new IContactModel();

    contactSubmit = (e: any) => {

        e.preventDefault();
        axios.post('/contact', {
            FirstName: this.contactForm.FirstName['value'],
            LastName: this.contactForm.LastName['value'],
            Email: this.contactForm.Email['value'],
            Subject: this.contactForm.Subject['value'],
            Message: this.contactForm.Message['value']
        }).then((data: any) => {
            this.contactForm.FirstName['value'] = '';
            this.contactForm.LastName['value'] = '';
            this.contactForm.Email['value'] = '';
            this.contactForm.Subject['value'] = '';
            this.contactForm.Message['value'] = '';
        })
    }




    render() {
        return (
            <div className="row about-row">
                <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                    <div className="contact-form">
                        <form onSubmit={this.contactSubmit} id="contactForm" className="contact-form shake" data-toggle="validator">
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="name" className="form-control" placeholder="Name" ref={(input: any) => this.contactForm.FirstName = input} required data-error="Please enter your First Name" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="name" className="form-control" placeholder="Name" ref={(input: any) => this.contactForm.LastName = input} required data-error="Please enter your Last Name" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="email" className="email form-control" id="email" placeholder="Email" ref={(input: any) => this.contactForm.Email = input} required data-error="Please enter your email" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <input type="text" id="msg_subject" className="form-control" placeholder="Subject" ref={(input: any) => this.contactForm.Subject = input} required data-error="Please enter your message subject" />
                                    <div className="help-block with-errors"></div>
                                </div>{/*<!-- end controls -->*/}
                            </div>{/*<!-- end form-group -->*/}
                            <div className="form-group">
                                <div className="controls">
                                    <textarea id="message" rows={7} placeholder="Message" className="form-control" ref={(input: any) => this.contactForm.Message = input} required ></textarea>
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