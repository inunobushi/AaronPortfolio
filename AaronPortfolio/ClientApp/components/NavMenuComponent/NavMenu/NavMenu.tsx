import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component {

    constructor(props: any){
        super(props);
    }
     render() {
        return( 
            <Navbar.Collapse id="navbarSupportedContent" className="navbar fixed-top navbar-expand-lg navbar-light">
                
            <div className="container">
                <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="menu">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </Navbar.Toggle>
                <div id="navbarSupportedContent" >
                    <Nav className="navbar-nav ml-auto">
                        <li id="home" className="nav-item active-nav">
                            <a href="#home-cont" data-value="home-cont">
                            <i className="icon-home" hidden></i>
                                <span className="name-menu">Home</span>
                            </a>
                        </li>
                        <li id="about" className="nav-item">
                            <a href="#about-cont" data-value="about-cont">
                            <i className="icon-male-user" hidden></i>
                                <span className="name-menu">About</span>
                            </a>
                        </li>
                        <li id="serv" className="nav-item">
                            <a href="#serv-cont" data-value="serv-cont">
                            <i className="icon-layers" hidden></i>
                                <span className="name-menu">Services</span>
                            </a>
                        </li>
                        <li id="work" className="nav-item">
                            <a href="#work-cont" data-value="work-cont">
                            <i className="icon-picture" hidden></i>
                                <span className="name-menu">Portfolio</span>
                            </a>
                        </li>
                        <li id="testim" className="nav-item">
                            <a href="#testim-cont" data-value="testim-cont">
                            <i className="icon-speech" hidden></i>
                                <span className="name-menu">Testimonials</span>
                            </a>
                        </li>
                        <li id="contact" className="nav-item">
                            <a href="#contact-cont" data-value="contact-cont">
                            <i className="icon-envelope" hidden></i>
                                <span className="name-menu">Contact</span>
                            </a>
                        </li>
                    </Nav>
                    <div className="social-media">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a> {/*<!-- You Can Edit the link here -->*/}
                        <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a> {/*<!-- You Can Edit the link here -->*/}
                        <a href="https://www.tumblr.com/" target="_blank"><i className="fab fa-tumblr"></i></a> {/*<!-- You Can Edit the link here -->*/}
                        <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a> {/*<!-- You Can Edit the link here -->*/}
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a> {/*<!-- You Can Edit the link here -->*/}
                    </div>
               </div>
            </div>
        </Navbar.Collapse>
        )
    }
}