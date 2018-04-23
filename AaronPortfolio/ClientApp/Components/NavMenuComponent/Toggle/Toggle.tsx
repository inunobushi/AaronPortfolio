import * as React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


export class Toggle extends React.Component {

    constructor(props: any){
        super(props);
    }
     render() {
        return(
            <div className="nav-toggle">
                <div className="menu">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        )
    }
}