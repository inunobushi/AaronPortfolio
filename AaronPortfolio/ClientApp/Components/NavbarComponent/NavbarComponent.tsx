import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import AuthService from '../../services/authService';

export class NavbarComponent extends React.Component {
    private AuthService:AuthService = new AuthService();
    constructor(props: any){
        super(props);
        this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
        this.logout = this.logout.bind(this);
    }

    isUserLoggedIn(){
        return this.AuthService.getIsLoggedIn();
    };
    logout = () => {
        this.AuthService.logout();
    }

    render() {
        return( 
            <div className="menubar">
                <div className="menubar-content">
                    <Navbar className="navbar navbar-default navbar-default-home navbar-fixed-top navbar-default-first">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 col-sm-2">
                                    <NavLink to={ '/' } className="site-title home-page">
                                        <h3>Aaron Fairweather</h3>
                                    </NavLink>{/*<!-- end site-title -->*/}
                                </div>{/*}<!-- end col-md-4 -->*/}
                                <div className="navbar-header">
                                    <Navbar.Toggle type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </Navbar.Toggle>{/*<!-- end button -->*/}
                                </div>{/*<!-- end navbar-header -->*/}
                                <div className="col-md-10 col-sm-10 navbar-style">
                                    <Navbar.Collapse className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <Nav className="nav navbar-nav ">
                                            <li>
                                                <NavLink to="/" className="active">Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Work">Work</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/About">About</NavLink>
                                            </li>
                                            <li>
                                                { !this.isUserLoggedIn() && <NavLink to="/Login">Login</NavLink>}
                                            </li>
                                            <li>
                                                { this.isUserLoggedIn() &&<NavLink exact to="/" onClick={this.logout}>Logout</NavLink>}
                                            </li>
                                            <li>
                                                { this.isUserLoggedIn() && <NavLink to="/Schedule">Schedule</NavLink>}
                                            </li>
                                            <li>
                                                { !this.isUserLoggedIn() &&<NavLink to="/Registration">Registration</NavLink>}
                                            </li>
                                            <li>
                                                <NavLink to="/Contact">Contact</NavLink>
                                            </li>
                                        </Nav>{/*<!-- end nav -->*/}
                                    </Navbar.Collapse>{/*<!-- end collapse navbar-collapse -->*/}
                                </div>{/*<!-- end col-md-8 -->*/}
                            </div>{/*<!-- end row -->*/}
                        </div>{/*<!-- end container-fluid -->*/}
                    </Navbar>{/*<!-- navbar -->*/}
                </div>{/*<!-- end menubar-content -->*/}
            </div>
        )
    }
}