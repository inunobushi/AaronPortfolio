import * as React from 'react';
import { Link} from 'react-router-dom';

import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { CopyRightComponent } from '../CopyrightComponent/CopyrightComponent';

export class AboutComponent extends React.Component{

    constructor(props:any){
        super(props);
    }

    render() {
        return( 
            <div className="app" id="main">
                <NavbarComponent />
                <div className="main-page-content">

                    {/*<!-- ================================ ABOUT =============================== -->*/}

                    <div id="about">
                        <div className="about-content">
                            <div className="me-grid">
                                <div className="container">
                                    <div className="row wow fadeIn">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="about-image">
                                                <img src="img/about-image.jpg" alt="" className="about-img" />
                                            </div>{/*<!-- end about-image  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="about-details">
                                                <h3>I Am Superman !</h3>
                                                <div className="underline1 no-margin"></div>
                                                <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.</p>
                                                <div className="about-text">
                                                    <ul>
                                                        <li>I Am Good At Design.</li>
                                                        <li>I Am Good At Developing.</li>
                                                        <li>I Am Good At Photography.</li>
                                                        <li>I Love Traveling.</li>
                                                        <li>I Am Adorable.</li>
                                                    </ul>
                                                </div>
                                                <Link className="about-contact1" to="/Contact">Know Me Better</Link>
                                            </div>{/*<!-- end about-details  -->*/}
                                        </div>{/*<!-- end col-md-8  -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                </div>{/*<!-- end container  -->*/}
                            </div>{/*<!-- end me-grid  -->*/}
                            <div className="work-counter text-center">
                                <div id="counter">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="work-statistics text-center">
                                                    <i className="fa fa-star stat-icon" aria-hidden="true"></i>
                                                    <h3 className="Count">2379</h3>
                                                    <p>Idea Making</p>
                                                </div>{/*<!-- end work-statistics  -->*/}
                                            </div>{/*<!-- end col-md-3  -->*/}
                                            <div className="col-md-3 col-sm-6">
                                                <div className="work-statistics text-center">
                                                    <i className="fa fa-crop stat-icon" aria-hidden="true"></i>
                                                    <h3 className="Count">2727</h3>
                                                    <p>Graphics Design</p>
                                                </div>{/*<!-- end work-statistics  -->*/}
                                            </div>{/*<!-- end col-md-3  -->*/}
                                            <div className="col-md-3 col-sm-6">
                                                <div className="work-statistics text-center">
                                                    <i className="fa fa-bolt stat-icon" aria-hidden="true"></i>
                                                    <h3 className="Count">3635</h3>
                                                    <p>Website Created</p>
                                                </div>{/*<!-- end work-statistics  -->*/}
                                            </div>{/*<!-- end col-md-3  -->*/}
                                            <div className="col-md-3 col-sm-6">
                                                <div className="work-statistics text-center">
                                                    <i className="fa fa-coffee stat-icon" aria-hidden="true"></i>
                                                    <h3 className="Count">2120</h3>
                                                    <p>Coffee Taken</p>
                                                </div>{/*<!-- end work-statistics  -->*/}
                                            </div>{/*<!-- end col-md-3  -->*/}
                                        </div>{/*<!-- end row  -->*/}
                                    </div>{/*<!-- end container-fluid  -->*/}
                                </div>{/*<!-- end counter  -->*/}
                            </div>{/*<!-- end work-counter  -->*/}
                            <div id="process-grid">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="process-title text-center wow fadeIn">
                                                <h3>Completed Project</h3>
                                                <div className="underline1"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>{/*<!-- end team-title  -->*/}
                                        </div>{/*<!-- end col-md-12  -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                    <div className="row tips-row">
                                        <div>
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" className="active1 active"><a href=".process1" role="tab" data-toggle="tab">Project 1</a></li>
                                                <li role="presentation" className="active1"><a href=".process2" role="tab" data-toggle="tab">Project 2</a></li>
                                                <li role="presentation" className="active1"><a href=".process3" role="tab" data-toggle="tab">Project 3</a></li>
                                                <li role="presentation" className="active1"><a href=".process4" role="tab" data-toggle="tab">Project 4</a></li>
                                            </ul>
                                            <div className="tab-content wow fadeIn">
                                                <div role="tabpanel" className="process1 tab-pane fade in active1 active" >
                                                    <div className="container">
                                                        <div className="row details-row">
                                                            <div className="col-md-6 col-sm-6 about-main about-col-res">
                                                                <div className="process1-image"></div>
                                                            </div>{/*<!-- end col-md-4  -->*/}
                                                            <div className="col-md-6 col-sm-6 about-main description-res">
                                                                <div className="day-text table-cell text-left">
                                                                    <h3>Project 1</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                                                    <a className="about-contact1" href="#contact">Learn more</a>
                                                                </div>{/*<!-- end property-text  -->*/}
                                                            </div>{/*<!-- end col-md-8  -->*/}
                                                        </div>{/*<!-- end row  -->*/}
                                                    </div>{/*<!-- end container  -->*/}
                                                </div>{/*<!-- end tab-panel  -->*/}
                                                <div role="tabpanel" className="process2 tab-pane fade">
                                                    <div className="container">
                                                        <div className="row details-row">
                                                            <div className="col-md-6 col-sm-6 about-main about-col-res">
                                                                <div className="process2-image"></div>
                                                            </div>{/*<!-- end col-md-4  -->*/}
                                                            <div className="col-md-6 col-sm-6 about-main">
                                                                <div className="day-text table-cell text-left">
                                                                    <h3>Project 2</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                                                    <a className="about-contact1" href="#contact">Learn more</a>
                                                                </div>{/*<!-- end property-text  -->*/}
                                                            </div>{/*<!-- end col-md-8  -->*/}
                                                        </div>{/*<!-- end row  -->*/}
                                                    </div>{/*<!-- end container  -->*/}
                                                </div>{/*<!-- end tab-panel  -->*/}
                                                <div role="tabpanel" className="process3 tab-pane fade">
                                                    <div className="container">
                                                        <div className="row details-row">
                                                            <div className="col-md-6 col-sm-6 about-main about-col-res">
                                                                <div className="process3-image"></div>
                                                            </div>{/*<!-- end col-md-4  -->*/}
                                                            <div className="col-md-6 col-sm-6 about-main">
                                                                <div className="day-text table-cell text-left">
                                                                    <h3>Project 3</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                                                    <a className="about-contact1" href="#contact">Learn more</a>
                                                                </div>{/*<!-- end property-text  -->*/}
                                                            </div>{/*<!-- end col-md-8  -->*/}
                                                        </div>{/*<!-- end row  -->*/}
                                                    </div>{/*<!-- end container  -->*/}
                                                </div>{/*<!-- end tabpanel  -->*/}
                                                <div role="tabpanel" className="process4 tab-pane fade">
                                                    <div className="container">
                                                        <div className="row details-row">
                                                            <div className="col-md-6 col-sm-6 about-main about-col-res">
                                                                <div className="process4-image"></div>
                                                            </div>{/*<!-- end col-md-4  -->*/}
                                                            <div className="col-md-6 col-sm-6 about-main">
                                                                <div className="day-text table-cell text-left">
                                                                    <h3>Project 4</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                                                    <a className="about-contact1" href="#contact">Learn more</a>
                                                                </div>{/*<!-- end property-text  -->*/}
                                                            </div>{/*<!-- end col-md-8  -->*/}
                                                        </div>{/*<!-- end row  -->*/}
                                                    </div>{/*<!-- end container  -->*/}
                                                </div>{/*<!-- end tab-panel  -->*/}
                                            </div>{/*<!-- end tab-content  -->*/}
                                        </div>
                                    </div>{/*<!-- end row -->*/}
                                </div>{/*<!-- end container  -->*/}
                            </div>{/*<!-- end process-grid  -->*/}
                        </div>{/*<!-- end about-content  -->*/}
                    </div>{/*<!-- end about  -->*/}
                    <div id="skill">
                        <div className="skill-main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="skill-title black-title text-center wow fadeIn">
                                            <h3>My Skill</h3>
                                            <div className="underline1 white"></div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam.</p>
                                        </div>{/*<!-- end work-title  -->*/}
                                    </div>{/*<!-- end col-md-12  -->*/}
                                </div>{/*<!-- end row  -->*/}
                                <div className="row skill-row wow fadeIn second-row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 about-col1 responsive">
                                        <div className="skillblock-details">
                                            <div className="skill-details">
                                                <div className="content">
                                                    <div className="col">
                                                        <ul id="skill-main">
                                                            <li><h3>Web Design-85%</h3><span className="expand Web"></span></li>
                                                            <li><h3>Graphics Design-90%</h3><span className="expand Graphics"></span></li>
                                                            <li><h3>Web Developing-82%</h3><span className="expand Developing"></span></li>
                                                            <li><h3>Photoshop-89%</h3><span className="expand Photoshop"></span></li>
                                                            <li><h3>Photography-95%</h3><span className="expand Photography"></span></li>
                                                        </ul>
                                                    </div>{/*<!-- end col  -->*/}
                                                </div>{/*<!-- end content  -->*/}
                                            </div>{/*<!-- end skill-details  -->*/}
                                        </div>{/*<!-- end about-details  -->*/}
                                    </div>{/*<!-- end col-md-8  -->*/}
                                    <div className="col-md-6 col-sm-6 no-padding-col about-col1">
                                        <div className="skill-taxt-details">
                                        </div>{/*<!-- end about-details  -->*/}
                                    </div>{/*<!-- end col-md-6  -->*/}
                                </div>{/*<!-- end row  -->*/}
                            </div>{/*<!-- end container  -->*/}
                        </div>{/*<!-- end skill-main  -->*/}
                        <div className="message1 text-center">
                            <div id="message-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="message1-client wow fadeIn">
                                                <h3>I Know Exactly What I Am Doing</h3>
                                                <a className="about-contact1" href="#contact">Contact</a>
                                            </div>{/*<!-- end message-client  -->*/}
                                        </div>{/*<!-- end col-md-12  -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                </div>{/*<!-- end container  -->*/}
                            </div>{/*<!-- end message-content  -->*/}
                        </div>{/*<!-- end work-counter  -->*/}
                    </div>{/*<!-- end skill  -->*/}

                    {/*<!-- ============================================== SERVICE ===================================================== -->*/}

                    <div id="service">
                        <div className="service-content">
                            <div className="service-grid text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="service-title text-center wow fadeIn">
                                                <h3>My Service</h3>
                                                <div className="underline1"></div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam.</p>
                                            </div>{/*<!-- end work-title  -->*/}
                                        </div>{/*<!-- end col-md-12  -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                    <div className="row about-row wow fadeIn">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-pencil-square-o service-icon" aria-hidden="true"></i>
                                                <h3>HTML5 AND CSS3</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-cogs service-icon" aria-hidden="true"></i>
                                                <h3>Amazing Design</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-file-image-o service-icon" aria-hidden="true"></i>
                                                <h3>Easily customisable</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-heart-o service-icon" aria-hidden="true"></i>
                                                <h3>Working Contact Form</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-hourglass service-icon" aria-hidden="true"></i>
                                                <h3>24/7 Support</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details">
                                                <i className="fa fa-newspaper-o service-icon" aria-hidden="true"></i>
                                                <h3>Bootstrap 3.0.0</h3>
                                                <div className="underline1 no-margin margin-top"></div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>{/*<!-- end service-details  -->*/}
                                        </div>{/*<!-- end col-md-4  -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                </div>{/*<!-- end container  -->*/}
                            </div>{/*<!-- end service-grid  -->*/}
                        </div>{/*<!-- end service-content  -->*/}
                        <CopyRightComponent/>{/*<!-- end copyright-details -->*/}
                    </div>{/*<!-- end service  -->*/}
                </div>{/*<!-- end main-page -->*/}
            </div>

        )
    }
}