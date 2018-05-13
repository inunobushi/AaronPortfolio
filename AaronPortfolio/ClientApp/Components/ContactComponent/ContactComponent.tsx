import * as React from 'react';
import axios from 'axios';

import {NavbarComponent} from '../NavbarComponent/NavbarComponent';
import {CopyRightComponent} from '../CopyrightComponent/CopyrightComponent';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactDirect } from './ContactDirect/ContactDirect';
import { ContactHeader } from './ContactHeader/ContactHeader';


export class ContactComponent extends React.Component{

    constructor(props:any){
        super(props);
    }

    render() {
        return(
            <div className="app">
                <NavbarComponent />
                <div className="main-page-content">

                    {/*<!-- ================================ CONTACT =============================== -->*/}

                    <div id="contact">
                        <div id="contact-content">
                            <div className="contact-grid">
                                <div className="contact-form-details wow fadeIn">
                                    <div className="container">
                                        <ContactHeader/>{/*<!-- end row  -->*/}
                                        <ContactForm/>{/*<!-- end row -->*/ }
                                        <ContactDirect/>{/*<!-- end row -->*/}
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