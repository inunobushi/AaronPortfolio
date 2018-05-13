import * as React from 'react';
import axios from 'axios';

import {NavbarComponent} from '../NavbarComponent/NavbarComponent';
import {CopyRightComponent} from '../CopyrightComponent/CopyrightComponent';
import {ContactModel} from '../../Models/Contact.Model';

export class ContactComponent extends React.Component{

    constructor(props:any){
        super(props);
    }
    contactForm:ContactModel = new ContactModel();

    contactSubmit = (e:any) => {

        e.preventDefault();
        axios.post('/contact', {
            FirstName: this.contactForm.FirstName['value'],
            LastName: this.contactForm.LastName['value'],
            Email:this.contactForm.Email['value'],
            Subject:this.contactForm.Subject['value'],
            Message:this.contactForm.Message['value']
        }).then((data: any) => {
            this.contactForm.FirstName['value'] = '';
            this.contactForm.LastName['value'] = '';
            this.contactForm.Email['value'] = '';
            this.contactForm.Subject['value'] ='';
            this.contactForm.Message['value'] = '';
        })
    }

    render() {
        return(
            <div>
                <NavbarComponent />
                <div className="main-page-content">

                    {/*<!-- ================================ CONTACT =============================== -->*/}

                    <div id="contact">
                        <div id="contact-content">
                            <div className="contact-grid">
                                <div className="contact-form-details wow fadeIn">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="contact-title white-title text-center">
                                                    <h3>Contact With Me</h3>
                                                    <div className="underline1 white1"></div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam.</p>
                                                </div>{/*<!-- end testimonial-title  -->*/}
                                            </div>{/*<!-- end col-md-12  -->*/}
                                        </div>{/*<!-- end row  -->*/}
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
                                        </div>{/*<!-- end row -->*/}
                                        <div className="row main-row text-center">
                                            <div className="col-md-4 col-sm-12">
                                                <div className="info-details">
                                                    <i className="fa fa-desktop contact-icon" aria-hidden="true"></i>
                                                    <h3>Email</h3>
                                                    <p>Lamisa@gmail.com</p>
                                                </div>{/*<!-- end info-details  -->*/}
                                            </div>{/*<!-- end col-md-4 -->*/}
                                            <div className="col-md-4 col-sm-12">
                                                <div className="info-details">
                                                    <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                                                    <h3>Phone</h3>
                                                    <p>+8748347934</p>
                                                </div>{/*<!-- end info-details  -->*/}
                                            </div>{/*<!-- end col-md-4 -->*/}
                                            <div className="col-md-4 col-sm-12">
                                                <div className="info-details">
                                                    <i className="fa fa-car contact-icon" aria-hidden="true"></i>
                                                    <h3>Address</h3>
                                                    <p>Noakhali,Chittagong</p>
                                                </div>{/*<!-- end info-details  -->*/}
                                            </div>{/*<!-- end col-md-4 -->*/}
                                        </div>{/*<!-- end row -->*/}
                                    </div>{/*<!-- end container -->*/}
                                    <div className="container-fluid map-con">
                                        <div className="row map-row">
                                            <div className="col-md-12 col-sm-12 map-col">
                                                <div className="google-maps">
                                                    <div className="map-wrap">
                                                        <div className="overlay-map"></div>{/*<!-- wrap map iframe to turn off mouse scroll and turn it back on on click -->*/}
                                                        <div id="map" style={{ width: 100 + '%', height: 600 + 'px' }}></div>
                                                    </div>{/*<!-- end map wrap  -->*/}
                                                </div>{/*<!-- end google map  -->*/}
                                            </div>{/*<!-- end col-md-6  -->*/}
                                        </div>{/*<!-- end row  -->*/}
                                    </div>{/*<!-- end container  -->*/}
                                </div>{/*<!-- end contact-form-details -->*/}
                                <CopyRightComponent />{/*<!-- end copyright-details -->*/}
                            </div>{/*<!-- end contact-grid -->*/}
                        </div>{/*<!-- end contact-content -->*/}
                    </div>
                </div>
            </div>
        )
    }
}