import * as React from 'react';
import Particles from 'react-particles-js';

import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { CopyRightComponent } from '../CopyrightComponent/CopyrightComponent';

import { Link, NavLink } from 'react-router-dom';


export class HomeComponent extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const body = document.querySelector("body");
        body.style.backgroundColor = '#000000';

    }
    componentWillUnmount() {
        console.log("hello");
        const body = document.querySelector("body");
        body.style.backgroundColor = '';
    }

    render() {
        return (
            <div className="app home" id="main">
                <NavbarComponent />
                <div className="main-page-content main-page">
                    <div id="home">
                        <div className="home-content-main">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row home-row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="home-text wow fadeIn text-center">
                                                <h1 className="cd-headline clip is-full-width">
                                                    I Am
                                                    <span className="cd-words-wrapper" style={{ width: 266 + 'px', overflow: 'hidden', marginLeft: '10px' }}>
                                                        <b className="is-visible">Creative</b>
                                                        <b className="is-hidden">Honest</b>
                                                        <b className="is-hidden">Aaron Fairweather</b>
                                                    </span>
                                                </h1>
                                                <Link className="about-contact1" to="/Contact">Contact Me</Link>
                                            </div>{/*<!-- end home-text  -->*/}
                                        </div>{/*<!-- end col-md-8 -->*/}
                                    </div>{/*<!-- end row  -->*/}
                                </div>{/*<!-- end container -->*/}
                            </div>{/*!-- end table-cell -->*/}
                        </div>{/*<!-- end home-content-main  -->*/}
                    </div>{/*<!-- end home  -->*/}
                </div>
                <CopyRightComponent />{/*<!-- end copyright-details -->*/}
            </div>

        )
    }
}
