import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component {

    constructor(props: any){
        super(props);
    }
     render() {
        return( 
            <Navbar inverse className='navbar navbar-inverse navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <Navbar.Toggle  type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </Navbar.Toggle>
                    <NavLink className='navbar-brand' to={ '/' }>
                        AaronPortfolio
                    </NavLink>
                </div>
                <Navbar.Collapse className='navbar-collapse collapse'>
                    <Nav pullRight className='nav navbar-nav navbar-right'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
