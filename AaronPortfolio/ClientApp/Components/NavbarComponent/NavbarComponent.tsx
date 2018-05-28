import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// import NavDrawer from '../../Services/NavbarDrawerService';
import AuthService from '../../services/authService';

interface INavbarDrawer {
    isLoggedIn: boolean;
    state: any
}

class NavbarComponent extends React.Component<INavbarDrawer, any> {

    private AuthService: AuthService = new AuthService();

    constructor(props: any) {
        super(props);
        this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            open: false,
            mainWidth: null
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {


        this.setState({ open: !this.state.open });
        setTimeout(() => {
            const w = window.innerWidth;

            if (this.state.open) {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            } else {

                if (!this.state.mainWidth && w > 767) {
                    this.setState({ mainWidth: String(w) }, () => {
                        document.getElementById("mySidenav").style.width = this.state.mainWidth;
                        document.getElementById("main").style.marginLeft = "0";
                    })
                } else {
                    document.getElementById("mySidenav").style.width = this.state.mainWidth;
                    document.getElementById("main").style.marginLeft = "0";

                }
            }
        }, 10)
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    isUserLoggedIn() {
        return this.AuthService.getIsLoggedIn();
    };
    logout = () => {
        this.AuthService.logout();
    }




    render() {
        return (
            <div className="menubar">
                <div className="menubar-content">
                    <Navbar className="navbar-static-top con">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 col-sm-2">
                                    <NavLink to={'/'} className="site-title">
                                        <h3>Aaron Fairweather</h3>
                                    </NavLink>{/*<!-- end site-title -->*/}
                                </div>{/*}<!-- end col-md-4 -->*/}
                                <div className="navbar-header">
                                    <button onClick={this.toggleNav} type="button" className="navbar-toggle" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>{/*<!-- end button -->*/}
                                </div>{/*<!-- end navbar-header -->*/}
                                <div className="col-md-10 col-sm-10 navbar-style">
                                    <div className="navbar-collapse sidenav" id="mySidenav">
                                        <Nav className="">
                                            <li>
                                                <NavLink to="/">Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Work">Work</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/About">About</NavLink>
                                            </li>
                                            <li>
                                                {!this.isUserLoggedIn() && <NavLink to="/Login">Login</NavLink>}
                                            </li>
                                            <li>
                                                {this.isUserLoggedIn() && <NavLink exact to="/" onClick={this.logout}>Logout</NavLink>}
                                            </li>
                                            <li>
                                                {this.isUserLoggedIn() && <NavLink to="/Schedule">Schedule</NavLink>}
                                            </li>
                                            <li>
                                                {!this.isUserLoggedIn() && <NavLink to="/Registration">Registration</NavLink>}
                                            </li>
                                            <li>
                                                <NavLink to="/Contact">Contact</NavLink>
                                            </li>
                                        </Nav>{/*<!-- end nav -->*/}
                                    </div>{/*<!-- end collapse navbar-collapse -->*/}
                                </div>{/*<!-- end col-md-8 -->*/}
                            </div>{/*<!-- end row -->*/}
                        </div>{/*<!-- end container-fluid -->*/}
                    </Navbar>{/*<!-- navbar -->*/}
                </div>{/*<!-- end menubar-content -->*/}
            </div>
        )
    }
}

const mapStateToProps = (store) => {

    return {
        headerData: store.header,
        authData: store.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHeaderText: (data) => dispatch({ type: 'UPDATE_HEADER_TEXT', payload: data })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);